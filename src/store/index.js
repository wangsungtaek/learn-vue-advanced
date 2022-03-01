import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations.js';
import actions from './actions.js';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        news: [],
        ask: [],
        jobs: []
    },
    getters: {
        getJobs(state) {
            return state.jobs;
        },
        getNews(state) {
            return state.news;
        },
        getAsk(state) {
            return state.ask;
        },
    },
    mutations,
    actions
});
