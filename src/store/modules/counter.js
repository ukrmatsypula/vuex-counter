export default {
  state: {
    counter: 0,
  },

  getters: {
    GET_COUNTER: (state) => state.counter,
  },

  mutations: {
    SET_COUNTER: (state, payload) => {
      state.counter += payload;
    },
  },

  actions: {
    SET_COUNTER_WITH_DELAY(context, value) {
      setTimeout(() => context.commit('SET_COUNTER', value), 300);
    },
  },
};
