import type { ActionTree, MutationTree } from 'vuex'

export interface ProductImage {
  id: number
  image_id: number
  sku_id: number | null
  image: string
  image_order: number | null
  image_url?: string | null
}

export interface Product extends Pick<ProductImage, 'id' | 'image_url'> {
  name: string
  description: string
  slug: string
  price: number
  formatted_price: number
  images?: ProductImage[] | null
}

export interface ProductState {
  list: Product[]
  current: Product | null
}

export const state = () =>
  <ProductState>{
    list: [],
    current: null,
  }

export const mutations: MutationTree<ProductState> = {
  ADD_PRODUCT(state, product: Product) {
    state.list.push(product)
  },
  REMOVE_PRODUCT(state, { product }: { product: Product }) {
    state.list.splice(state.list.indexOf(product), 1)
  },
  SET_LIST(state, products: Product[]) {
    state.list = products
  },
  SET_PRODUCT(state, product) {
    state.current = product
  },
}

export const actions: ActionTree<ProductState, any> = {
  async FETCH_LIST({ commit }) {
    const results: Product[] = (await this.$axios.$get('/api/products'))
      ?.results

    if (Object.prototype.toString.call(results) !== '[object Array]') return

    commit('SET_LIST', results)
  },
  async FETCH_DETAIL({ commit }, slug: string) {
    const results: Product[] = (await this.$axios.$get('/api/products/' + slug))
      ?.results

    if (Object.prototype.toString.call(results) !== '[object Object]') return

    commit('SET_PRODUCT', results)
  },
}
