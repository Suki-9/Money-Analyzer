import Api from './index'

export default {
  Auth2URL() {
    return Api().get('/api/oauth2')
  },
  GetToken(AuthorizatioCode) {
    const item = { AuthorizatioCode: AuthorizatioCode }
    return Api().post('/api/gettoken', item)
  }
}