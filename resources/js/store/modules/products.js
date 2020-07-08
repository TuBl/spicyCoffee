import ProductsService from "../../services/ProductsService";
import lodash from "lodash"
const state = {
    products: []
}

const getters = {
    productsGetter: (state) => {
        return   lodash
                    .chain(state.products)
                    .groupBy('category_id')
                    .map((value, key) => ({category_id: key, products: value}))
                    .value()
        // return state.products
    }
}

const actions = {
    async getProducts({commit}){
        try {
            let response = await ProductsService.getProducts();
            commit('SET_PRODUCTS', response.data);
        } catch (e) {
            const errors = e.response.data.errors;
            if(errors){
                errors.forEach((error) => {console.error(error)})
            }
        }
    }
}

const mutations = {
    SET_PRODUCTS: (state, products) => state.products = products
}

export default {
    state,
    getters,
    actions,
    mutations
}
