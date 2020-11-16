<template>
  <section class="flex w-full">
    <div class="m-auto">
      <h1 class="text-center text-2xl">Real Time Chat</h1>
      <div class="border rounded-lg">
        <div class="h-64 p-2">
          <div v-for="chat in state.chats" :key="chat.message" :class="chat.userId === userId ? 'text-right' : 'text-left'">
            {{ chat.message }}
          </div>
        </div>
      </div>
      <div class="h-8 p-2">
        <input
          v-model="state.message"
          placeholder="Start Typing..."
          class="p-1 border rounded shadow"
          @keydown.enter="addMessagge"
        />
      </div>
    </div>
  </section>
</template>

<script>
import { computed, onMounted, reactive } from 'vue';
import { chatsRefs } from '../utilities/firebase';
import { useStore } from 'vuex'

export default {
  setup() {
    const state = reactive({
      chats: [],
      message: '',
      collection: null
    });

    const store = useStore();
    const userId = computed(() => store.state.authUser.uid);

    onMounted(async () => {
      chatsRefs.on('child_added', (sanpshot)=> {
        state.chats.push({ key: sanpshot.key, ...sanpshot.val() });
      });
    });

    function addMessagge() {
      const newChat = chatsRefs.push();
      newChat.set({ userId: this.userId, message: state.message });
      state.message = '';
    }
    return { state, addMessagge, userId };
  }
}
</script>

<style>

</style>