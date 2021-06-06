import axios  from 'axios'

const service = axios.create({
  baseURL:"https://api.gmit.vip/Api"// api的base_url
})
export default service;