import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:8888/api/private/v1'
axios.interceptors.request.use(function (config) {
  var token = localStorage.getItem('itcast_pro_token')
  config.headers['Authorization'] = token

  return config
}, function (error) {
  return Promise.reject(error)
})

export const userlogin = (data) => {
  return axios({
    url: 'login',
    method: 'post',
    data: data
  })
}

export const getAllList = (params) => {
  return axios({
    url: 'users',
    params: params
  })
}
export const addUser = (data) => {
  return axios({
    method: 'post',
    url: 'users',
    data
  })
}
export const editUser = (data) => {
  return axios({
    method: 'put',
    url: `users/${data.id}`,
    data
  })
}
