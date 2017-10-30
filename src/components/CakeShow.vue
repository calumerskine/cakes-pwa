<template>
  <div>
    <router-link to="/">Back</router-link>
    <div v-if="cake">
      <h1>{{ cake.name }}</h1>
      <img :src="cake.imageUrl || 'http://placehold.it/200x200'" alt="cake" width="200" height="200">
      <div>
        <p>Yum Factors: {{ cake.yumFactor }}</p>
      </div>
      <div>
        <p>
          Comments:
          <b>
            <span v-if="cake.comment">{{ cake.comment }}</span>
            <span v-else>None</span>
          </b>
        </p>
      </div>
    </div>
    <div v-else>
      <p>No cake here :(</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'cake-show',
  computed: {
    ...mapGetters({
      cake: 'selectedCake'
    })
  }
}
</script>
