<template>
  <div>
    <p v-if="cakesLoader">
      Loading...
    </p>
    <cake-list v-else :cakes="cakes"></cake-list>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import CakeList from '@/components/CakeList'

export default {
  name: 'cake-view',
  components: {
    CakeList
  },
  mounted () {
    this.$store.dispatch('getCakes')
  },
  computed: {
    ...mapGetters({
      'cakes': 'cakes',
      'error': 'error',
      'cakesLoader': 'cakesLoader'
    })
  }
}
</script>

<style>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #35495E;
}
</style>
