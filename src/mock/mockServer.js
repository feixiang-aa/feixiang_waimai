/*
使用mockjs提供mock数据接口
 */
import Mock from 'mockjs'
import data from './data.json'

// 返回goods的接口
Mock.mock('/goods', {code:0, data: data.goods})
// 返回ratings的接口
Mock.mock('/ratings', {code:0, data: data.ratings})
// 返回info的接口
Mock.mock('/info', {code:0, data: data.info})

// 这个地方不需要暴露任何东西 有些模块比较特别的，只需要保证能执行一次即可，，，
// 在main引入这文件夹
// export default ？？？






























