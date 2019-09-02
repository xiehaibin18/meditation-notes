import axios from 'axios'

export function request(config) {//导出网络请求方法
  //创建实例
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000/api/v1',
    timeout: 5000
  })
  //发送真正的网络请求
  return instance(config)
}
