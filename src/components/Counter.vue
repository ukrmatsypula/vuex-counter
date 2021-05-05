<template>
  <div>
    <h2>{{ getCounter }}</h2>
    <button @click="updateCounter(1)">Add</button>
    <button @click="updateCounter(-1)" :disabled="!getCounter">Prev</button>
  </div>
</template>

<script>
export default {
  name: 'Counter',
  computed: {
    getCounter() {
      return this.$store.getters.GET_COUNTER;
    }
  },
  methods: {
    updateCounter(value) {
      //this.$store.commit('SET_COUNTER', value);
      this.$store.dispatch('SET_COUNTER_WITH_DELAY', value)
    },
  },
};
</script>
