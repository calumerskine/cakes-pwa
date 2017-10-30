<template>
  <div>
    <router-link to="/">Back</router-link>

    <form id="cake-form" @submit.prevent="submit('cake-form')">
      <div class="field">
        <input id="name" :class="{ error: errors.has('name')}" data-vv-name="name" v-model="name" v-validate="'required'" type="text" placeholder="Name">
      </div>
      <span v-show="errors.has('name')" class="message">{{ errors.first('name') }}</span>
      <br>
      <div class="field">
        <textarea id="comment" :class="{ error: errors.has('comment')}" data-vv-name="comment" v-model="comment" v-validate="'required'" placeholder="Comment"></textarea>
      </div>
      <span v-show="errors.has('comment')" class="message">{{ errors.first('comment') }}</span>

      <div class="field">
        <label>Yum Factor:</label>
        <select v-model="yumFactor" v-validate="'required'">
          <option value="1" selected>1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>

      <div class="field">
        <button type="submit">Add</button>
      </div>
    </form>

  </div>
</template>

<script>
  export default {
    name: 'cake-form',
    data () {
      return {
        name: '',
        comment: '',
        yumFactor: 1
      }
    },
    methods: {
      async submit (scope) {
        if (await this.$validator.validateAll()) {
          const { name, comment, yumFactor } = this
          this.$store.dispatch('createCake', { name, comment, yumFactor })
        }
      }
    }
  }
</script>

<style>
  .error {
    border: 1px solid red;
  }

  .field {
    margin-top: 12px;
  }

  .field button {
    font-size: 20px;
  }
</style>