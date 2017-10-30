import axios from 'axios'

const api = axios.create({
  baseURL: 'http://ec2-52-209-201-89.eu-west-1.compute.amazonaws.com:5000/api',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json'
  }
})

export default {
  getCakes (cb, errorCb) {
    api.get('cakes')
      .then(res => cb(res.data))
      .catch(err => errorCb(`Couldn't get the list of cakes: ${err}`))
  },
  createCake (data, cb, errorCb) {
    api.post('cakes', data)
      .then(res => cb(res.data))
      .catch(err => errorCb(`Couldn't create cake: ${err}`))
  }
}
