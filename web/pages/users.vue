<template>
  <div class="p-10">
    <div class="card card-compact w-full bg-base-100 shadow-xl">
      <div class="card-body">
        <h2 class="card-title">
          Users 
          <button class="btn btn-ghost btn-xs" @click="handleFetchUsers(1)">
            <div v-if="loading">
              <span class="loading loading-spinner"></span>
            </div>
            <div v-else>Fetch Users</div>
          </button>
        </h2>
        <div class="m-2">
          <div class="overflow-x-auto">
            <div v-if="loading" class="flex flex-col gap-4">
              <div class="skeleton h-4 w-full"></div>
              <div class="skeleton h-4 w-full"></div>
              <div class="skeleton h-4 w-full"></div>
              <div class="skeleton h-4 w-full"></div>
            </div>
            <table v-else class="table table-xs">
              <thead>
                <tr>
                  <th></th>
                  <th>Age</th>
                  <th>Username</th>
                  <th>Email</th>
                  <th>University</th>
                </tr>
              </thead>
              <tbody>
                <tr 
                  v-for="user in users" 
                  :key="user.id" 
                  class="hover"
                  @click="handleUserDetails(user)"
                  onclick="my_modal_1.showModal()"
                >
                  <th>
                    <div class="flex items-center gap-3">
                      <div class="avatar">
                        <div class="mask mask-squircle w-12 h-12">
                          <img :src="user.image" alt="Avatar Tailwind CSS Component" />
                        </div>
                      </div>
                      <div>
                        <div class="font-bold text-xs">{{ user.firstName }} {{ user.lastName }}</div>
                        <div class="text-xs font-normal opacity-50">{{ user.domain }}</div>
                      </div>
                    </div>
                  </th>
                  <td>{{ user.age }}</td>
                  <td>{{ user.username }}</td>
                  <td>{{ user.email }}</td>
                  <td>{{ user.university }}</td>
                </tr>
              </tbody>
            </table>
            <div class="join mt-4">
              <button 
                v-for="paginate in paginates" 
                @click="handleFetchUsers(paginate)" 
                :class="{ 'join-item btn btn-sm' : true, 'btn-active' : paginate == page }"
              >
                {{ paginate }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <dialog id="my_modal_1" class="modal">
      <div class="modal-box">
        <h3 class="font-bold text-lg">Hello!</h3>
        <p class="py-4">Press ESC key or click the button below to close</p>
        <div class="modal-action">
          <form method="dialog">
            <!-- if there is a button in form, it will close the modal -->
            <button class="btn">Close</button>
          </form>
        </div>
      </div>
    </dialog>
  </div>
</template>

<script setup lang="ts">
  import { useUserStore } from '../stores/usersStore';

  const { fetchUsers } = useUserStore();
  const store = useUserStore();
  const users =  computed(() => store.users);
  const loading =  computed(() => store.loading);
  const skip =  computed(() => store.skip);
  const limit = computed(() => store.limit);
  const total = computed(() => store.total);
  const paginates = computed(() => total.value / limit.value);
  const page = ref(1);
  const handleFetchUsers = async (pageNum: number) => {
    page.value = pageNum;
    let skipVal = (pageNum * limit.value) - 10;
    await fetchUsers(skipVal);
  };
  const handleUserDetails = (data: object) => {
    console.log(data)
  };

  onMounted(async () => await handleFetchUsers(1));

</script>

<style scoped>

</style>