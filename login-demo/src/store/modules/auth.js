const state = () => ({
    authToken: ''

})
const getters = {
    isAuthenticate(state) {
        return state.authToken ? true : false
    }
}
const actions = {

}
const mutations = {

}
export default {
    state,
    getters,
    actions,
    mutations
}