const url = require('url')
const cheerio = require('cheerio')
const axios = require('axios')

class Scraper {
  constructor (host) {
    this.host = host || 'https://www.google.com/search'
  }

  async search (query = '', { lang = 'en', fileType = null, startAt = 0, limit = null, age = null, cookie = null }) {
    const params = {
      q: fileType ? `fileType:${fileType} AND ${query}` : query,
      h1: lang,
      start: startAt,
      limit,
      cookie
    }

    if (age) params.tbs = `qdr:${age}`

    return this.getResults(params, [])
  }

  async getResults (params, previousResults) {
    const results = []
    const currentResults = await this.getPage(params, params.headers)

    const newResults = currentResults
      .filter((result) => previousResults.indexOf(result) === -1)

    if (!newResults.length) {
      return previousResults
    }

    results.push(...newResults, ...currentResults)

    if (params.limit && results.length >= params.limit) {
      return results.splice(0, params.limit)
    }

    params.start = results.length
    return this.getResults(params, results)
  }

  async getPage ({ q, lang: h1, start, cookie }) {
    const headers = {
      'Upgrade-Insecure-Requests': 1,
      'Cookie': cookie
    }

    const params = {
      q, h1, start
    }

    return axios.get(this.host, { params, headers, maxRedirects: 0 })
      .then((response) => this.extractResults(response.data))
  }
  
  async extractResults (data) {
    const results = []
    const $ = cheerio.load(data)

    $('#search .g').each(function (i, elem) {
      const elemUrl = $(this).find('h3 a')
      const elemMeta = $(this).find('.slp')
      const elemDesc = $(this).find('.st')
      const parsedUrl = url.parse(elemUrl.attr('href'), true)

      const item = {
        title: elemUrl.text(),
        meta: elemMeta.text(),
        desc: elemDesc.text()
      }

      if (parsedUrl.pathname === '/url') {
        item.url = parsedUrl.query.q
      }

      results.push(item)
    })

    return results
  }
}

module.exports = Scraper
