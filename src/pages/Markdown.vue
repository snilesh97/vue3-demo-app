<template>
  <h1 class="w-full text-center text-4xl"> Markdown App</h1>
  <div class="flex w-full">
    <section class="flex m-auto w-10/12 h-screen">
      <article class="w-1/2 border ">
        <textarea class="w-full h-full" :value="text" @input="update" ref="markdownTextArea"> </textarea>
      </article>
      <article class="w-1/2 border bg-green-100" v-html="markedText"></article>
    </section>
  </div>
</template>

<script>
import marked from "marked";
import debounce from "../utilities/mixins/debounce"
export default {
  mixins: [debounce],
  data() {
    return {
      text: ''
    }
  },
  computed: {
    markedText() {
      return marked(this.text);
    }
  },
  methods: {
    update(e) {
      const task = () => (this.text = e.target.value);
      this.debounce(task, 500)
    }
  },
  mounted() {
    this.$refs.markdownTextArea.focus();
  }

}
</script>

<style>

</style>