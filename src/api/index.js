let baseUrl = ''
if (process.env.NODE_ENV === 'development') { // 开发
  baseUrl = ''
} else if (process.env.NODE_ENV === 'production' && process.env.VUE_APP_CURRENTMODE === 'test') { // 测试
  baseUrl = process.env.VUE_APP_BASEURL
} else { // 生产
  baseUrl = ''
}

// `${baseUrl}/apis/v1/login`
