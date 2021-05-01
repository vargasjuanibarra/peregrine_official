import banners from '../components/banners/banners'

const state = {
    banners: []
};

const mutations = {
    'SET_BANNERS'(state, banners) {
        state.banners = banners
    }
};

const actions = {
    initBanners: ({ commit }) => {
        commit('SETBANNERS', banners)
    }
};

const getters = {
    banners: state => {
        return state.banners;
    }
};


export default {
    state,
    mutations,
    actions,
    getters
}