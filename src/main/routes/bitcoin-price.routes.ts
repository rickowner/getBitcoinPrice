import axios from 'axios'
import fetch from 'cross-fetch'
import { Router } from 'express'

export default (router: Router): void => {
  // router.get('/getBitcoinPrice', adaptRoute(makeGetBitcoinPriceControllerFactory()))
  router.get('/getBitcoinPrice', async (req, res) => {
    const uri = 'https://api.coindesk.com/v1/bpi/currentprice.json'
    const response = await fetch(uri, {
      method: 'GET',
      headers: { 'Content-Type': 'application/vnd.api+json' }
    })
      .then(async (res) => await res.json())
      .catch(err => console.log(err))
    return res.json(response)
  })

  router.get('/getBitcoinPrice/:code', async (req, res) => {
    const { code } = req.params
    const uri = 'https://api.coindesk.com/v1/bpi/currentprice.json'
    let newObj: any
    const response = await fetch(uri, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    })
      .then(async (res) => await res.json())
      .catch(err => console.log(err))

    Object.keys(response.bpi).forEach((key, index) => {
      if (key.includes(code)) {
        newObj = `${response.bpi[key].symbol}: ${response.bpi[key].rate.toLocaleString()}`
        return newObj
      }
    })
    console.log('res:', newObj)
    return res.json(newObj)
  })
  router.get('/getBitcoinPrice1/:code', async (req, res) => {
    const { code } = req.params
    const uri = 'https://api.coindesk.com/v1/bpi/currentprice.json'
    let newObj: any
    const response = await axios.get(uri)
      .then(async (res) => await res.data)
      .catch(err => console.log(err))
    Object.keys(response.bpi).forEach((key, index) => {
      if (key.includes(code)) {
        newObj = `${response.bpi[key].symbol}: ${response.bpi[key].rate.toLocaleString()}`
        return newObj
      }
    })
    console.log('res:', newObj)
    return res.json(newObj)
  })
}
