<template>
  <button class="border rounded py-1 my-4" @click="isModalOpen = true">
    Add User
  </button>
  <teleport to="body">
    <Modal v-if="isModalOpen">
      <template #title>
        Add New User
      </template>
      <template #body>
        <form @submit="submit">
          <div class="p-2">
            <label>Name </label>
            <input
              class="border rounded w-full p-2"
              placeholder="User Name"
              v-model="state.form.name"
            />
          </div>
          <div class="p-2">
            <label>Email</label>
            <input
              class="border rounded w-full p-2"
              placeholder="User Email"
              type="email"
              v-model="state.form.email"
            />
          </div>
          <div class="p-2">
            <label>Avatar</label>
            <input
              class="border rounded w-full p-2"
              placeholder="Avatar Url"
              type="text"
              v-model="state.form.avatar"
            />
          </div>
          <div class="p-2">
            <label>Avatar</label>
            <input
              class="border rounded w-full p-2 hover:bg-gray-300"
              placeholder="Avatar Url"
              type="submit"
              value="create"
            />
          </div>
        </form>
      </template>
    </Modal>
  </teleport>
</template>

<script>
import { ref, reactive } from "vue";
import axios from "../../plugins/axios";
import Modal from "../Modal";
export default {
  components: { Modal },
  setup(_, { emit }) {
    const isModalOpen = ref(false);
    const state = reactive({
      form: {
        name: "",
        email: "",
        avatar: "",
      },
    });

    async function submit() {
      const { data } = await axios.post("/users", state.form);
      emit("new-user-added", data);
      state.users.push(data);
    }

    return { isModalOpen, submit, state };
  },
};
</script>

<style></style>
