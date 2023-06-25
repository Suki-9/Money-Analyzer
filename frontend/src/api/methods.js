import Api from './index'

export default {
  Auth2URL() {
    return Api().get('/api/auth2')
  }
  // 他の処理も追加可能
}