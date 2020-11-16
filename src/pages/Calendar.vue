<template>
  <div class="w-full flex">
    <div class="m-auto">
      <h1 class="text-2xl my-5 text-center">Vue Calendar</h1>
      <section class="mx-2 flex justify-between">
        <h3 class="font-bold">{{currentMonthName}}</h3>
        <h3 class="font-bold">{{currentYear}}</h3>
      </section>
      <section class="flex my-3">
        <p class="p-2 text-center" style="width: 14.28%" v-for="day in days" v-text="day" :key="day"/>
      </section>
      <section class="flex flex-wrap">
        <p class="text-center" style="width: 14.28%" v-for="num in startDate()" :key="num"></p>
        <p class="text-center" style="width: 14.28%" v-for="num in daysInMonth()" v-text="num" :key="num" :class="currentDateClass(num)"></p>
      </section>
      <section class="flex justify-between my-4">
        <button class="px-2 border rounded" @click="previous"> Previous</button>
        <button class="px-2 border rounded" @click="next"> Next</button>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentMonth: new Date().getMonth(),
      currentYear: new Date().getFullYear(),
      days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat'],
    };
  },
  methods: {
    daysInMonth() {
      return new Date(this.currentYear, this.currentMonth + 1, 0).getDate();
    },

    startDate() {
      return new Date(this.currentYear, this.currentMonth).getDay();
    },

    next() {
      if (this.currentMonth === 11) {
        this.currentYear+=1;
        this.currentMonth = 0;
      } else {
        this.currentMonth+=1;
      }
    },

    previous() {
      if (this.currentMonth === 0) {
        this.currentYear-=1;
        this.currentMonth = 11;
      } else {
        this.currentMonth-=1;
      }
    },

    currentDateClass(num) {
      const currentFullDate = new Date(this.currentYear, this.currentMonth, num).toDateString();
      const calendarFullDate = new Date().toDateString();
      return currentFullDate === calendarFullDate ? 'text-red-600' : '';
    },
  },
  computed: {
    currentMonthName() {
      return new Date(this.currentYear, this.currentMonth).toLocaleString('default', { month: 'long' });
    },
  },
};
</script>

<style>

</style>
