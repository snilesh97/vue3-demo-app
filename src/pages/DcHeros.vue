<template>
  <div class="w-full flex">
    <div class="m-auto">
      <h1 class="text-2xl text-center "> DC Hero List {{count}}</h1>
      <ul>
        <li class="flex justify-between" v-for="(dcHero, index) in dcHeros" v-bind:key="dcHero">
          {{dcHero}}
          <button @click="remove(index)">remove</button>
        </li>
      </ul>
      <form class="mt-10" @submit.prevent="addHero">
        <input class="border rounded" v-model.trim="dcHero" placeholder="Enter Your Hero Name" ref="newHeroRef"/>
        <button class="border rounded-lg bg-gradient-to-t from-red-500 to-pink-500" type="submit">Add Hero</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    count() {
      return this.dcHeros.length;
    }
  },
  data() {
    return {
      dcHero: '',
      dcHeros: []
    }
  },
  methods: {
    addHero() {
      if (this.dcHero !== '') {
        this.dcHeros.push(this.dcHero);
        this.dcHero = '';
      }
    },
    remove(index) {
      this.dcHeros = this.dcHeros.filter((hero, i) => i !== index);
    }
  },
  mounted() {
    this.$refs.newHeroRef.focus();
  }
}
</script>
