
const env = 'prod'

const apiBaseUrl = {
  dev: 'http://127.0.0.1:8080/',
  //你自己的项目路径
  prod: 'http://127.0.0.1:8080/'
}

export const Config = {
  apiBaseUrl: apiBaseUrl[env]
}

