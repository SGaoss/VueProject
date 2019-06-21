import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:8888/api/private/v1'

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
