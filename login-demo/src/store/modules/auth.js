const state = () => ({
    authToken: 'fsdf'

})
const getters = {
    isAuthenticate(state) {
        return state.authToken ? true : false
    }
}
const actions = {
    setAuthToken(context, token) {
        context.commit('changeAuthState', token)
    }
}
const mutations = {
    changeAuthState(state, token) {
        state.authToken = token
    }
}
export default {
    state,
    getters,
    actions,
    mutations
}