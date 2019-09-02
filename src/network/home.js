import {request} from './request'

export function getHomeAds() {
  return request({
    url: '/home/multidata'
  })
}