const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  // !将token值作为公共的访问属性,快捷访问
  token: state => state.user.token,
  //! 建立用户名称的映射
  name: state => state.user.uerInfo.username,
  // !用户id
  userId: state => state.user.uerInfo.userId,
  //! 建立用户头像的映射
  staffPhoto: state => state.user.uerInfo.staffPhoto
}
export default getters
