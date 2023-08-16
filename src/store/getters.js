const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  // !将token值作为公共的访问属性,快捷访问
  token: state => state.user.token,
  getUserInfo: state => state.user.getUserInfo //! 建立用户名称的映
}
export default getters
