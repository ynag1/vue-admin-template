// ?自定义指令
export const imagerror = {
// ?指令对象
//! inserted 会在当前都没元素插入到节点之后执行
  inserted(dom, options) {
    //! options 是指令中的变量解释，其中有value属性
    //! dom 表示当前指令作用的dom对象 dom此时就认为图片
    // !当图片有地址但是地址没有加载成功会报错，会触发一个事件 => onerror
    dom.onerror = function() {
      // !图片出现异常的时候会将此图片设置为默认图片
      // ! dom 可以注册onerror事件 图片不能写死
      dom.src = options.value
    }
  }
}
