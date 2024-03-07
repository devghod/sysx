<template>
  <div class="">
    <div class="card card-compact w-full bg-base-100 shadow">
      <div class="card-body">
        <h2 class="card-title">
          <div class="flex">
            <div>Users</div>
            <div class="flex gap-2 mx-2">
              <div class="">
                <select 
                  v-model="filterValue" 
                  @change="handleFetchUsers(1, 'status')" 
                  name="filter" 
                  id="filter" 
                  class="w-full border rounded text-sm py-1"
                >
                  <option disabled selected>Filter by</option>
                  <option 
                    v-for="(item, idx) in filterList" 
                    :value="item" 
                    :id="item"
                    :key="idx"
                  >{{ item }}</option>
                </select>
              </div>
              <div>
                <button class="btn btn-primary btn-sm" @click="isOpenModalAddUser">
                  <Icon name="lets-icons:add-duotone" color="" width="20" height="20" />
                  <div v-if="loading">
                    <span class="loading loading-spinner"></span>
                  </div>
                  <div v-else>New User</div>
                </button>
              </div>
            </div>
          </div>
        </h2>
        <UsersTable :users="users" />
      </div>
    </div>

    <UsersCreateModal 
      v-if="openModalAddUser" 
      :show="openModalAddUser" 
      @handleClose="isOpenModalAddUser"
    />

  </div>
</template>

<script setup lang="ts">

  import { useUserStore } from '~/stores/users';
  import { storeToRefs } from 'pinia';

  definePageMeta({
    layout: "dashboard"
  });

  const { fetchUsersByFilter } = useUserStore();
  const { users, loading, total, limit, skip } = storeToRefs(useUserStore());
  const store = useUserStore();
  const paginates = computed(() => total.value / limit.value);
  const page = ref(1);
  const openModalAddUser = ref(false); 
  const filterList = ref(["Active", "Deactive"]);
  const filterValue = ref("Active");

  const handleFetchUsers = async (pageNum: Number, property: String) => {
    let filter = {};

    if (filterValue.value) {
      filter[property] = filterValue.value;
    } 

    page.value = pageNum;
    let skipVal = (pageNum * limit.value) - 10;
    await fetchUsersByFilter(skipVal, filter);
  };

  await handleFetchUsers(1, "status");

  const isOpenModalAddUser = async (added: Boolean) => {
    if (added) {
      await handleFetchUsers(1, "status");
    }
    openModalAddUser.value == false ? 
    openModalAddUser.value = true : 
    openModalAddUser.value = false;
  }

</script>