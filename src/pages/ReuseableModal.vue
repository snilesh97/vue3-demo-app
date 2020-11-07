<template>
  <section class="flex flex-wrap w-full">
    <div class="m-auto">
      <h1 class="text-2xl my-5 w-full">Re-useable Modal</h1>
      <Modal v-if="isRedModalOpen" @close="isRedModalOpen=false">
        <template #title> <div class="text-red-500">Red Modal</div></template>
        <template #body> This is Red Modal Body</template>
      </Modal>
      <button 
        class="border rounded px-2 mx-4 bg-red-500 text-white"
        @click="isRedModalOpen = true"> Open Red Modal
      </button>

      <Modal v-if="isBlueModalOpen" @close="isBlueModalOpen= false">
        <template #title> <div class="text-blue-500">Blue Modal</div></template>
        <template #body> This is Blue Modal Body</template>
      </Modal>
      <button 
        class="border rounded px-2 mx-4 bg-blue-500 text-white"
        @click="isBlueModalOpen = true"> Open Blue Modal
      </button>
    </div>
  </section>
</template>
 
<script>
import Modal from '../components/Modal'
import {ref} from 'vue';
export default {
  components: { Modal },
  setup() {
    const isRedModalOpen = ref(false);
    const isBlueModalOpen = ref(false);
  
    return { isRedModalOpen, isBlueModalOpen }
  }
}
</script>

<style>

</style>
