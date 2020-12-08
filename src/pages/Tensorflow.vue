<template>
  <section class="flex w-full">
    <div class="m-auto">
      <div class="mt-10">
        <h1 class="text-2xl my-4">Tensorflow Object Detection</h1>
        <div class="flex flex-wrap justify-center mx-2">
          <div class="w-full flex justify-center">
            <button @click="openCamera" v-if="!isStreaming" class="w-40 rounded shadow-md bg-gradient-to-r from-blue-800 ro placeholder-pink-600 text-white px-2 py-1">
              <span> Open Camera</span>
            </button>
            <div v-else class="flex justify-between">
              <button @click="stopStreaming" class="w-40 rounded shadow-md bg-gradient-to-r from-blue-800 ro placeholder-pink-600 text-white px-2 py-1">
                <span> Stop Streaming</span>
              </button>
              <button @click="snapShot" class="w-40 rounded shadow-md bg-gradient-to-r from-blue-800 ro placeholder-pink-600 text-white px-2 py-1">
                <span> SnapShot</span>
              </button>
            </div>
          </div>
          <video ref="videoRef" autoplay="true" width="100"/>
        </div>
        <div class="flex justify-center">
          <img
            ref="imgRef"
            src="https://images.unsplash.com/photo-1523206489230-c012c64b2b48"
            width="200"
            crossorigin="anonymous"
          />
        </div>
        <div class="w-full text-center">
          <button @click="detect" class="w-40 rounded shadow-md bg-gradient-to-r from-red-800 ro placeholder-pink-600 text-white p-2">
            <span v-if="isLoading">Loading...</span>
            <span v-else>Detect Object</span>
          </button>
          <div v-if="result.length > 0">
            <p>{{result[0].class }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import {  ref } from 'vue';
require('@tensorflow/tfjs-backend-cpu');
require('@tensorflow/tfjs-backend-webgl');
const cocoSsd = require('@tensorflow-models/coco-ssd');
export default {
  setup() {
    const imgRef = ref('')
    const result = ref('')
    const videoRef = ref('')
    const isLoading = ref(false)
    const isStreaming = ref(false)
    async function detect() {
      isLoading.value = true;
      const img = imgRef.value;
      const model = await cocoSsd.load();
      const predictions = await model.detect(img);
      result.value = predictions;
      isLoading.value = false;
    }

    function openCamera() {
      if(navigator.mediaDevices.getUserMedia){
        navigator.mediaDevices.getUserMedia({video: true}).then((stream) => {
          isStreaming.value = true;
          videoRef.value.srcObject = stream;
        });
      }
    }

    function stopStreaming() {
      const stream = videoRef.value.srcObject;
      const tracks = stream.getTracks();
      tracks.map((track) => track.stop());
      isStreaming.value = false;
    }

    function snapShot () {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      ctx.drawImage(videoRef.value, 0,0, 200, 200);
      const data = canvas.toDataURL('image/png');
      imgRef.value.setAttribute('src', data)
    }
    return {imgRef, result, detect, isLoading, openCamera, videoRef, isStreaming, stopStreaming, snapShot}
  }

}
</script>

<style>

</style>