import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations.js';
import actions from './actions.js';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        news: [],
        ask: [],
        jobs: [],
        user: {},
        item: [],
        list: []
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
        getUser(state) {
            return state.user;
        },
        getItem(state) {
            return state.item;
        }

    },
    mutations,
    actions
});
