<template>
  <div>
    <p v-if="!cakes">No cakes here :(</p>
    <ul v-else>
      <li v-for="cake in cakes">
        <div @click="selectCake(cake)">
          <img :src="cake.imageUrl || 'http://placehold.it/100x100'" alt="cake" width="100" height="100">
          <p>{{ cake.name }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    name: 'cake-list',
    props: {
      cakes: Array
    },
    methods: {
      ...mapActions(['selectCake'])
    }
  }
</script>