const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return `${[year, month, day].map(formatNumber).join('/')} ${[hour, minute, second].map(formatNumber).join(':')}`
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : `0${n}`
}
/********************************** 正则-start ***********************************/
/** 纯数字 */
var numberPattern = /^[0-9]*$/;
/** 中文 */
var ChinesePattern = /^[\u4e00-\u9fa5]{0,}$/;
/** 字母 */
var letterPattern = /^[A-Za-z]+$/;
/** 银行卡 */
var acctPattern = /^\d{16}|\d{19}$/;
/** 固定n位纯数字 */
var numberStaticPattern = /^\d{n}$/;
/** 固定6位纯数字 验证码*/
var codePattern = /^\d{6}$/;
/** 至少n位纯数字 */
var numberLessPattern = /^\d{n,}$/;
/** 至少m位，最多n位纯数字 */
var numberLessMorePattern = /^\d{m,n}$/;
/** 手机号 */
var phonePattern = /^[1]([3-9])[0-9]{9}$/;
/** 身份证号 */
var idCardPattern = /^([1-9]\d{5})((18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31))(\d{3}[0-9Xx])$/;
/** 密码：以字母开头，长度在8-16之间，只能包含字符、数字和下划线 */
var passwordPattern = /^[a-zA-Z]\w{7,15}$/;
/** 银行卡校验 */
function checkAcctReg(str) {
  return !acctPattern.test(str);
}
/** 中文校验 */
function checkChineseReg(str) {
  return !ChinesePattern.test(str);
}
/** 字母校验 */
function checkLetteRReg(str) {
  return !letterPattern.test(str);
}
/** 纯数字校验 */
function checkNumberReg(number) {
  return !numberPattern.test(number);
}
/** 固定n位纯数字校验 */
function checkNumberStaticReg(number) {
  return !numberStaticPattern.test(number);
}
/** 至少n位纯数字校验 */
function checkNumberLessReg(number) {
  return !numberLessPattern.test(number);
}
/** 至少m位，最多n位纯数字校验 */
function checkNumberLessMoreReg(number) {
  return !numberLessMorePattern.test(number);
}
/** 手机号校验 */
function checkPhoneReg(phone) {
  return !phonePattern.test(phone);
}
/** 身份证号校验 */
function checkIdCardReg(idcard) {
  return !idCardPattern.test(idcard);
}
/** 密码校验 */
function checkPasswordReg(password) {
  return !passwordPattern.test(password);
}
/** 固定n位纯数字校验 */
function checkCodeReg(number) {
  return !codePattern.test(number);
}
/********************************** 正则-end ***********************************/
module.exports = {
  formatTime,
  checkAcctReg,
  checkChineseReg,
  checkLetteRReg,
  checkNumberReg,
  checkNumberStaticReg,
  checkNumberLessReg,
  checkNumberLessMoreReg,
  checkPhoneReg,
  checkIdCardReg,
  checkPasswordReg,
  checkCodeReg,
}
