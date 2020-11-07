<template>
  <section class="flex w-full">
    <div class="m-auto">
      <h1 class="text-2xl text-center">Calculator</h1>
      <p class="text-3xl text-right mt-10 mb-2 w-40  h-20 overflow-x-scroll" style="direction:rtl">
        {{currentNumber}}
      </p>
      <div class="h-5"> 
        <small v-if="selectedOperation">
          {{ prevNumber }} {{ selectedOperation}} {{ currentNumber }}
        </small>
      </div>
      <div class="grid grid-cols-4 gap-1">
        <button @click="pressed('1')" class="p-2 w-10 h-10 border rounded shadow">1</button>
        <button @click="pressed('2')" class="p-2 w-10 h-10 border rounded shadow">2</button>
        <button @click="pressed('3')" class="p-2 w-10 h-10 border rounded shadow">3</button>
        <button @click="pressed('+')" class="p-2 w-10 h-10 border rounded shadow">+</button>
        <button @click="pressed('4')" class="p-2 w-10 h-10 border rounded shadow">4</button>
        <button @click="pressed('5')" class="p-2 w-10 h-10 border rounded shadow">5</button>
        <button @click="pressed('6')" class="p-2 w-10 h-10 border rounded shadow">6</button>
        <button @click="pressed('-')" class="p-2 w-10 h-10 border rounded shadow">-</button>
        <button @click="pressed('7')" class="p-2 w-10 h-10 border rounded shadow">7</button>
        <button @click="pressed('8')" class="p-2 w-10 h-10 border rounded shadow">8</button>
        <button @click="pressed('9')" class="p-2 w-10 h-10 border rounded shadow">9</button>
        <button @click="pressed('*')" class="p-2 w-10 h-10 border rounded shadow">*</button>
        <button @click="pressed('c')" class="p-2 h-10 border rounded shadow">C</button>
        <button @click="pressed('0')" class="p-2 h-10 border rounded shadow">0</button>
        <button @click="pressed('=')" class="p-2 w-10 h-10 border rounded shadow">=</button>
        <button @click="pressed('/')" class="p-2 w-10 h-10 border rounded shadow">/</button>
      </div>
    </div>
  </section>
</template>

<script>
import {onMounted, onUnmounted, ref} from 'vue';
export default {
  setup() {
    const operations = ['+', '-', '*', '/'];
    const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const currentNumber = ref('');
    const prevNumber = ref('');
    const selectedOperation = ref('');

    function pressed(value){
      if(value === '=' || value === 'Enter') calculate();
      else if(value === 'c') clear();
      else if(operations.includes(value)) applyOperation(value);
      else if(numbers.includes(value)) appendNumber(value);
    }
    
    function appendNumber(value) {
      currentNumber.value = currentNumber.value + value;
    }

    function applyOperation(value){
      calculate();
      prevNumber.value = currentNumber.value;
      selectedOperation.value = value;
      clear();
    }

    function calculate(){
      switch(selectedOperation.value){
        case '+': 
          addition();
          break;
        case '-': 
          subtraction();
          break;
        case '*': 
          multiplication();
          break;
        case '/': 
          division();
          break;
      }
      prevNumber.value = '';
      selectedOperation.value = '';
    }

    const addition = () => currentNumber.value = +prevNumber.value + +currentNumber.value;
    const subtraction = () => currentNumber.value = prevNumber.value - currentNumber.value;
    const multiplication = () => currentNumber.value = prevNumber.value * currentNumber.value;
    const division = () => currentNumber.value = prevNumber.value / currentNumber.value;
    const clear = () => currentNumber.value = '';
    const handleKeyDown = (e) =>  pressed(e.key);

    onMounted(()=> window.addEventListener('keydown', handleKeyDown));
    onUnmounted(()=> window.removeEventListener('keydown', handleKeyDown));
  
   return {currentNumber, pressed, selectedOperation, prevNumber};
  }
}
</script>

<style>

</style>
