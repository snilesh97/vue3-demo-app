<template>
  <div class="flex flex-wrap w-full relative">
    <div class="absolute w-full" v-for="(color, index) in sliders" :key="color">
      <transition name="fade">
        <div v-if="currentSlider === index" :class="color" style="height: 350px"></div>
      </transition>
    </div>
    <div class="w-full" style="height: 340px;">
      <div class="absolute bottom-0 w-full flex justify-center">
      <div v-for="(slider,index) in sliders" :key="slider">
        <div class="w-4 h-4 mx-2 rounded-full bg-black z-20 cursor-pointer" :class="currentSlider === index ? 'bg-gray-700' : 'bg-gray-300'" @click="makeActive(index)"></div>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      currentSlider: 0,
      interval: '',
      sliders: ['bg-pink-600', 'bg-yellow-600', 'bg-teal-600'],
    }
  },
  mounted () {
    this.interval = setInterval(() => {
      this.currentSlider++;
      if(this.currentSlider == 3){
        this.currentSlider = 0
      }
    }, 2000);
  },
  beforeUnmount () {
    clearInterval(this.interval);
  },
  methods:{
    makeActive (index) {
      this.currentSlider = index
    }
  }
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: all 1s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: translateX(-100%);
}
.fade-enter-to {
  opacity: 0;
  transform: translateX(100%);
}
</style>