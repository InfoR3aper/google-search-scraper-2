'use strict'

const Scraper = require('./scraper')
const scraper = new Scraper()

;(async () =>  {
  // cookie: 'CGIC=IlV0ZXh0L2h0bWwsYXBwbGljYXRpb24veGh0bWwreG1sLGFwcGxpY2F0aW9uL3htbDtxPTAuOSxpbWFnZS93ZWJwLGltYWdlL2FwbmcsKi8qO3E9MC44; CONSENT=YES+BR.pt-PT+20170514-09-0; OGPC=19008862-2:; OGP=-19008862:; SID=pAbPU8rSo25ZEc2sP67kKuTfS74zIyoSGXN520ge28YdWiuleXIuv8Al78WA_PylZQIflw.; HSID=A0jD_yJiHm7E0zI4p; SSID=AwEdnp33HR5tB1V9K; APISID=29BVAcTEvp5G5BTd/Anvm2MCKkCfIAB-Ne; SAPISID=csW8zmLf_4TkJvHC/A7FAgRtqdO-zqF1V0; NID=144=Q2uOZrPVKhioGm5s64QYIma6f2JmvJ0okDHITIHy446VdHJybq9zKEszELMlyznoB_0hjPB8LcNcgHeW0ICWYzx3uzGudMDouVWPK6FRtf4g--zuJG1-3aKDwfhCO14DvC5_-A3pIw2xXR6WWS1o1RO4KDBkhx5BA-iwQWL41DOdwHnQ3IwEdjAy8PtgtNojL1nL5D1ZEv4SLPG8gdMg90qi3fOkhOXoJFk0oNO8s9tfHfF9Ng3yf-8XXhg3cITx5LEHyNyTuQ6F1hKLEYmMbnLD3Hs-fApXYV4acC2-Izyr; 1P_JAR=2018-11-03-21; SIDCC=ABtHo-EBYqv57By74qDqEvzX16hfGucVcCw_wmVU6qYZZVmaoMgJUgUAW2pytWl0HR9ustYsYA'
  const params = {
    limit: 2
  }

  const result = await scraper.search('teste', params)

  console.log(result)
})();