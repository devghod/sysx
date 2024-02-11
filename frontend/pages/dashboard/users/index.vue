<template>
  <div class="">
    <div class="card card-compact w-full bg-base-100 shadow">
      <div class="card-body">
        <h2 class="card-title">
          Users 
          <button class="btn btn-ghost btn-xs" @click="handleFetchUsers(1)">
            <div v-if="loading">
              <span class="loading loading-spinner"></span>
            </div>
            <div v-else>Fetch Users</div>
          </button>
          <button class="btn btn-primary btn-xs" @click="isOpenModalAddUSer">
            <div v-if="loading">
              <span class="loading loading-spinner"></span>
            </div>
            <div v-else>Add User</div>
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
                  <th>Username</th>
                  <th>Email</th>
                  <th>Date Created</th>
                </tr>
              </thead>
              <tbody>
                <tr 
                  v-for="(user, index) in users" 
                  :key="index" 
                  class="hover"
                  @click="handleUserDetails(user._id)"
                  onclick="detail_user_modal.showModal()"
                >
                  <th>
                    <div class="flex items-center gap-3">
                      <div class="avatar">
                        <div class="mask mask-squircle w-12 h-12">
                          <NuxtImg
                            v-if="user?.image"
                            :src="user?.image ? user?.image : ''" 
                            :alt="`${ user.first_name } ${ user.middle_name } ${ user.last_name }`"
                            loading="lazy"
                          />
                        </div>
                      </div>
                      <div>
                        <div class="font-bold text-xs">{{ user.first_name }} {{ user.middle_name }} {{ user.last_name }}</div>
                        <div class="text-xs font-normal opacity-50">{{ user._id }}</div>
                      </div>
                    </div>
                  </th>
                  <td>{{ user.username }}</td>
                  <td>{{ user.email }}</td>
                  <td>{{ formatDate(user.date_created, 'MMM-DD-yy') }}</td>
                </tr>
              </tbody>
            </table>
            <div class="join mt-4">
              <button 
                v-if="paginates % 1 === 0"
                v-for="(paginate, index) in paginates" 
                :key="index"
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

    <!-- Detail Modal -->
    <dialog id="detail_user_modal" class="modal">
      <div class="modal-box">
        <h3 class="font-bold text-lg border-b">Details</h3>
        <div class="py-2">
          <ul>
            <li class="">
              <div class="avatar">
                <div class="mask mask-squircle w-16 h-16">
                  <NuxtImg
                    v-if="selectedUser?.image"
                    :src="selectedUser?.image ? selectedUser?.image : ''" 
                    :alt="`${ selectedUser.first_name } ${ selectedUser.middle_name } ${ selectedUser.last_name }`"
                    loading="lazy"
                  />
                </div>
              </div>
            </li>
            <li class="mt-2 mb-1">
              <span class="mr-1 text-sm text-slate-500 font-semibold">ID:</span>
              {{ selectedUser?._id }}
            </li>
            <li class="mb-1">
              <span class="mr-2 text-sm text-slate-500 font-semibold">First Name:</span>
              {{ selectedUser?.first_name }}
            </li>
            <li class="mb-1">
              <span class="mr-2 text-sm text-slate-500 font-semibold">Middle Name:</span>
              {{ selectedUser?.middle_name }}
            </li>
            <li class="mb-1">
              <span class="mr-2 text-sm text-slate-500 font-semibold">Last Name:</span>
              {{ selectedUser?.last_name }}
            </li>
            <li class="mb-1">
              <span class="mr-2 text-sm text-slate-500 font-semibold">Username:</span>
              {{ selectedUser?.username }}
            </li>
            <li class="mb-1">
              <span class="mr-2 text-sm text-slate-500 font-semibold">Email:</span>
              {{ selectedUser?.email }}
            </li>
          </ul>
        </div>
        <div class="modal-action">
          <form method="dialog">
            <Buttons label="Close" type="" />
          </form>
        </div>
      </div>
    </dialog>

    <!-- Add Modal -->
    <!-- <dialog id="add_user_modal" class="modal"> -->
    <div v-if="openModalAddUser" id="add_user_modal" class="modal">
      <div class="modal-box">
        <h3 class="font-bold text-lg border-b">Add User</h3>
        <div class="py-2 my-4">
          <div class="grid grid-cols-3 gap-4">
            <div class="text-md">
              First Name:
            </div>
            <div class="col-span-2">
              <input 
                type="text" 
                placeholder="" 
                class="w-full border"
                v-model="newUser.first_name"
              />
            </div>
            <div class="">
              Middle Name:
            </div>
            <div class="col-span-2">
              <input 
                type="text" 
                placeholder="" 
                class="w-full border"
                v-model="newUser.middle_name"
              />
            </div>
            <div class="">
              Last Name:
            </div>
            <div class="col-span-2">
              <input 
                type="text" 
                placeholder="" 
                class="w-full border"
                v-model="newUser.last_name"
              />
            </div>
            <div class="">
              Username:
            </div>
            <div class="col-span-2">
              <input 
                type="text" 
                placeholder="" 
                class="w-full border"
                v-model="newUser.username"
              />
            </div>
            <div class="">
              Email:
            </div>
            <div class="col-span-2">
              <input 
                v-model="newUser.email"
                type="text" 
                placeholder="" 
                class="w-full border"
              />
            </div>
            <div class="">
              Status:
            </div>
            <div class="col-span-2">
              <select name="status" id="status" class="w-full border">
                <option disabled selected>Select Status</option>
                <option v-for="(item) in statusList" :value="item" :id="item">{{ item }}</option>
              </select>
            </div>
          </div>
        </div>
        <div class="modal-action">
          <Buttons label="Add" type="primary" @click="addUserFunc" />
        </div>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">

  import { useUserStore, type IUserInfo } from '~/stores/users';
  import { storeToRefs } from 'pinia';

  definePageMeta({
    layout: "dashboard"
  });

  const { fetchUsers, fetchUser, addUser } = useUserStore();
  const { users, user, loading, total, limit, skip } = storeToRefs(useUserStore());
  const store = useUserStore();
  const paginates = computed(() => total.value / limit.value);
  const page = ref(1);
  const selectedUser = ref<IUserInfo | null>(store.user);
  const newUser = ref<INewUserInfo>(store.newUser);
  const statusList = ref(["Active", "Deactive"]);
  const openModalAddUser = ref(false); 
  // const isOpenModalUser = ref(false);

  const handleFetchUsers = async (pageNum: number) => {
    page.value = pageNum;
    let skipVal = (pageNum * limit.value) - 10;
    await fetchUsers(skipVal);
  };

  await handleFetchUsers(1);

  const handleUserDetails = async (id: string) => {
    await fetchUser(id);
    selectedUser.value = store.user;
    // selectedUser.value = user;
    // isOpenModalUser.value = true;
  };

  const addUserFunc = async () => {
    console.log(newUser.value)
    await addUserFunc(newUser.value);
  };

  const closeUserDetails = async () => {
  //   isOpenModalUser.value = false;
  };

  const isOpenModalAddUSer = () => openModalAddUser.value == false ? openModalAddUser.value = true : openModalAddUser.value = false;

</script>

<style scoped>

</style>