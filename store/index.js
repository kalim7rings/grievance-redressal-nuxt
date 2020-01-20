export const state = () => {
    return {
        storeBusinessType : 'LOANS',
        storeHeaderMessage : '',
        storeFlag : '',
        storeFlagValue : '',
        storeRefCode : '',
        storeIsAllowedFlag : '',
        storeRequestId : '',
        storeSubMode : '',
        storeCurrentURL : '',
        storeIsUserAuthenticated : false,
    }
}

export const mutations = {
    /*SET_USER (state, user) {
        state.user = user || null
    },*/
    SET_BUSINESS_TYPE(state, payload){
        state.storeBusinessType = payload;
    },
    SET_HEADER_MASSAGE_BASIS_OF_REFCODE(state, payload){
        state.storeHeaderMessage = payload;
    },
    SET_REFCODE(state, payload){
        state.storeRefCode = payload;
    },
    SET_FLAG(state, payload){
        state.storeFlag = payload;
    },
    SET_FLAG_VALUE(state, payload){
        state.storeFlagValue = payload;
    },
    SET_REQUEST_ID(state, payload){
        state.storeRequestId = payload;
    },
    SET_IS_ALLOWED_FLAG(state, payload){
        state.storeIsAllowedFlag = payload;
    },
    SET_SUBMODE(state, payload){
        state.storeSubMode = payload;
    },
    SET_CURRENT_URL(state, payload){
        state.storeCurrentURL = payload;
    },
    SET_USER_AUTHENTICATION(state, payload){
        state.storeIsUserAuthenticated = payload;
    },
}

export const getters = {
    isAuthenticated (state) {
        return !!state.user
    },
    loggedUser (state) {
        return state.user
    }
}
