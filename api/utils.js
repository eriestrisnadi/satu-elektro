/* eslint-disable camelcase */
const _ = require('lodash')
const { omit, flatMapDeep, get, entries, fromPairs } = _

function generateCategory(data) {
  const simplified = omit(
    Object.keys(data).reduce(
      (prev, key) => ({ ...prev, [key.replace('category_', '')]: data[key] }),
      {}
    ),
    ['url', 'image_url']
  )

  const image = get(simplified, 'image')
  const image_url =
    typeof image === 'string'
      ? 'https://belanja.labsx.workers.dev/assets/' + image
      : image

  return { ...simplified, image_url }
}

function generateStore(data) {
  const simplified = omit(
    Object.keys(data).reduce(
      (prev, key) => ({ ...prev, [key.replace('store_', '')]: data[key] }),
      {}
    ),
    ['url', 'image_url', 'banner_image_path', 'banner_image_url']
  )

  const image = get(simplified, 'image_path')
  const image_url =
    typeof image === 'string'
      ? 'https://belanja.labsx.workers.dev/assets/' + image
      : image

  return { ...simplified, image_url }
}

function generateProduct(data) {
  const simplified = omit(
    Object.keys(data).reduce(
      (prev, key) => ({ ...prev, [key.replace('product_', '')]: data[key] }),
      {}
    ),
    [
      'url',
      'product_url',
      'store_url',
      'category_url',
      'variants',
      'image_name',
    ]
  )
  const categories = mapCategories(get(simplified, 'categories', []) || [])
  const images = (get(simplified, 'images', []) || []).map(generateProduct)
  const skus = (get(simplified, 'skus', []) || []).map(generateProduct)
  const includes = get(simplified, 'default')
    ? { default: generateProduct(get(simplified, 'default')) }
    : {}
  const store = get(simplified, 'store')
    ? { store: generateStore(get(simplified, 'store')) }
    : {}
  const extras = fromPairs(
    entries({
      categories,
      images,
      skus,
    }).filter(([_, v]) => (isArray(v) ? v.length > 0 : !!v))
  )

  try {
    const { pathname } = new URL(
      get(simplified, 'default.image_url', get(simplified, 'image_url'))
    )
    const image_url =
      typeof pathname === 'string'
        ? 'https://belanja.labsx.workers.dev/assets/' +
          pathname.replace('/assets/portal-assets/', '')
        : pathname
    return {
      ...simplified,
      ...extras,
      image_url,
      ...store,
      ...includes,
    }
  } catch (error) {
    return { ...simplified, ...extras, ...store, ...includes }
  }
}

function isArray(n) {
  return Object.prototype.toString.call(n) === '[object Array]'
}

function getCategories(category) {
  return !isArray(get(category, 'categories'))
    ? omit(category, 'categories')
    : [
        omit(category, 'categories'),
        flatMapDeep(category.categories, getCategories),
      ]
}

function mapCategories(data) {
  return data.map((category) => ({
    ...generateCategory(category),
    ...(isArray(get(category, 'categories'))
      ? {
          categories: mapCategories(get(category, 'categories')),
        }
      : {}),
  }))
}

function generateProductDetail(data) {
  const related = (get(data, 'relateds', []) || []).map(generateProduct)
  const recommendations = (get(data, 'recommendations', []) || []).map(
    generateProduct
  )
  const results = generateProduct(get(data, 'product', {}) || {})

  return {
    results,
    related,
    recommendations,
  }
}

const falseAsStrings = [false, undefined, -1, 0, null].map(String)

module.exports = {
  ..._,
  isArray,
  generateCategory,
  getCategories,
  generateProduct,
  generateProductDetail,
  mapCategories,
  falseAsStrings,
}

/* eslint-enable camelcase */
