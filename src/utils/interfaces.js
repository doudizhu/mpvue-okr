// const domain = "https://www.daokoudai.com"
// const domain = "http://10.10.1.121:8080"
const domain = "http://wap2.daokoujihua.com"

const interfaces = {
  appHome: domain +'/api/3.0/m/appHome?params={"coreEnterpriseVersion":"","activityBannerVersion":"","slideBarVersion":""}&from=M',
  appHomeData: domain + '/api/3.0/m/appHomeData?params={"coreEnterpriseVersion":"","activityBannerVersion":"","slideBarVersion":""}&from=M',
  listCoreEnterprise: domain + '/api/3.0/m/listCoreEnterprise?params={coreEnterpriseVersion:0}&from=IC&imei=8888888',

  login: domain + '/api/3.0/m/login',

  saveOkrTeamWithVote: domain + '/api/3.0/m/saveOkrTeamWithVote',
}

module.exports = interfaces