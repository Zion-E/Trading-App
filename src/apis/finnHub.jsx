import axios from 'axios'

const TOKEN = "cckajgiad3idqgd76v20cckajgiad3idqgd76v2g"

export default axios.create({
  baseURL: "https://finnhub.io/api/v1",
  params: {
    token: TOKEN
  }
})