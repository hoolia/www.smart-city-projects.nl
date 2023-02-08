/**
 * 返回到上级页面
 */
function backToPrevious() {
  var ispreview = /\b_v=preview\b/i.test(location.search);
  if (!ispreview && window.iseditor) {
    return
  }
  window.history.go(-1)
}
