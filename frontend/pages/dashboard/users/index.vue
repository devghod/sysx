<template>
  <div class="">
    <div class="w-full text-slate-700 dark:text-slate-100 bg-slate-100 dark:bg-slate-700 p-4 rounded-lg shadow">
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
                  class="w-full border rounded text-sm py-1 text-slate-700 dark:text-slate-700"
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
                <Buttons
                  @click="isOpenModalAddUser"
                  type="icon-text"
                  icon="mdi mdi-plus-circle" 
                  label="Add User"
                  bgColor="bg-blue-500"
                />
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
  const { users, loading: userLoading, total, limit, skip } = storeToRefs(useUserStore());
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