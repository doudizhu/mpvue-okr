const domain = "https://www.daokoudai.com"

const interfaces = {
  appHome: domain +'/api/3.0/m/appHome?params={"coreEnterpriseVersion":"","activityBannerVersion":"","slideBarVersion":""}&from=M',
  appHomeData: domain + '/api/3.0/m/appHomeData?params={"coreEnterpriseVersion":"","activityBannerVersion":"","slideBarVersion":""}&from=M',
  listCoreEnterprise: domain + '/api/3.0/m/listCoreEnterprise?params={coreEnterpriseVersion:0}&from=IC&imei=8888888',

  login: domain + '/api/3.0/m/login',

  saveOkrTeamWithVote: domain + '/api/3.0/m/saveOkrTeamWithVote',
}

module.exports = interfaces