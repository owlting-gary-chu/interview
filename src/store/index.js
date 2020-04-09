import Vue from 'vue'
import Vuex from 'vuex'

import request from '@/utils/request'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    itemList: [],
    searchString: ''
  },
  mutations: {
    SET_SEARCH: (state, searchString) => {
      state.searchString = searchString
    },
    SET_ITEM_LIST: (state, itemList) => {
      state.itemList = itemList
    }
  },
  actions: {
    async fetchProducts({ state, commit }) {
      try {
        // TODO: 資料是否可以只拿一次
        const response = await request('/api/products')
        const { data = [] } = await response.json()
        commit('SET_ITEM_LIST', data)
        return data
      } catch (err) {
        console.log('fetchProducts error:', err)
      }
    },
    fetchProductById(store, id) {
      return request(`/api/products/${id}`)
        .then(response => response.json())
        .then(json => json.data || {})
        .catch(err => console.log('fetchProductById error:', err))
    },
    setSearch({ commit }, searchString) {
      commit('SET_SEARCH', `${searchString}`)
    }
  },
  getters: {
    // TODO: 怪怪的...
    filteredData: ({ searchString, itemList }) =>
      searchString.length
        ? itemList.filter(v => v.name.indexOf(searchString) > 0 || v.location.city.indexOf(searchString) > 0)
        : itemList
  }
})
