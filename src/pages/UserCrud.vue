<template>
  <section class="flex w-full">
    <div class="m-auto">
      <div class="mt-10">
        <Create @new-user-added="addUser" />
        <table>
          <thead>
            <tr>
              <th class="border px-4 py-2">ID</th>
              <th class="border px-4 py-2">Avatar</th>
              <th class="border px-4 py-2">Name</th>
              <th class="border px-4 py-2">Email</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in state.users" :key="user._id">
              <td class="border px-4 py-2">{{ user._id }}</td>
              <td class="border px-4 py-2">
                <img
                  :src="user.avatar"
                  :alt="user.name"
                  width="100"
                  class="rounded-full"
                />
              </td>
              <td class="border px-4 py-2">{{ user.name }}</td>
              <td class="border px-4 py-2">{{ user.email }}</td>
              <td class="border px-4 py-2">
                <button
                  class="px-2 py-1 bg-red-800 rounded text-white"
                  @click="destory(user._id)"
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="flex justify-between">
          <button
            class="border rounded px-3 py-2 hover:shadow"
            @click="prev"
            :disabled="state.users.page === 1"
            :class="state.users.page === 1 ? 'bg-gray-100' : 'hover:shadow'"
          >
            Prev
          </button>
          <button
            class="border rounded px-3 py-2 hover:shadow"
            @click="next"
            :disabled="state.users.page === 2"
            :class="state.users.page === 2 ? 'bg-gray-100' : 'hover:shadow'"
          >
            Prev
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { onMounted, reactive, ref } from "vue";
import axios from "../plugins/axios";
import Create from "../components/UserCrud/Create";
export default {
  components: { Create },
  setup() {
    const isModalOpen = ref(false);
    const state = reactive({
      users: [],
    });

    onMounted(async () => {
      const { data } = await axios.get("/users");
      state.users = data;
    });

    async function next() {
      const { data } = await axios.get("/users?page=2");
      state.users = data;
    }

    async function prev() {
      const { data } = await axios.get("/users?page=1");
      state.users = data;
    }

    async function destory(id) {
      state.users = state.users.filter((user) => user._id !== id);
      await axios.delete(`/users/${id}`);
    }

    function addUser(data) {
      state.users.push(data);
    }
    return { state, next, prev, isModalOpen, destory, addUser };
  },
};
</script>

<style></style>
