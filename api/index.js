const express = require('express')
const axios = require('axios')
const cors = require('cors')
const app = express()
const {
  generateProduct,
  get,
  keys,
  generateProductDetail,
  pick,
} = require('./utils')

app.use(cors())
app.use(express.json())

const baseURL = 'https://api.renos.id/'
const instance = axios.create({ baseURL })

app.get('/products/:slug', async (req, res) => {
  try {
    if (!get(req, 'params.slug', '')) throw new Error('Product is not exist')

    const data = await instance
      .get('/api/v1/buyer/product', {
        params: {
          slug: `satu-elektronik/${get(req, 'params.slug', '')}`,
        },
      })
      .then((response) => get(response, 'data', {}))
    const product =
      get(generateProductDetail(get(data, 'data')), 'results', {}) || {}

    const results = pick(
      { ...(get(product, 'default', {}) || {}), ...product },
      [
        'id',
        'name',
        'description',
        'slug',
        'price',
        'formatted_price',
        'images',
      ]
    )

    if (keys(results).length <= 0) throw new Error('Product is not exist')

    res.json({
      results,
      message: 'Successfully get product',
    })
  } catch (err) {
    const { message } = err

    res.json({ message, results: null })
  }
})

app.get('/products', async (_, res) => {
  try {
    const data = await instance
      .get('/api/v1/master/store', {
        params: {
          slug: 'satu-elektronik',
        },
      })
      .then((response) => get(response, 'data', {}))
    const results = (get(data, 'data.products', []) || []).map((product) =>
      generateProduct(
        pick(product, [
          'formatted_product_price',
          ...['id', 'name', 'description', 'slug', 'price', 'image_url'].map(
            (v) => `product_${v}`
          ),
        ])
      )
    )

    if (keys(results).length <= 0) throw new Error('Product list is not exist')

    res.json({
      results,
      message: 'Successfully get product list',
    })
  } catch (err) {
    const { message } = err

    res.json({ message, results: null })
  }
})

module.exports = app
