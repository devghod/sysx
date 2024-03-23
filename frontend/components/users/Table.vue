<template lang="">
  <div>
    <div class="m-2">
      <div class="overflow-x-auto">
        <div v-if="userLoading" class="flex flex-col gap-4">
          <div class="skeleton h-4 w-full"></div>
          <div class="skeleton h-4 w-full"></div>
          <div class="skeleton h-4 w-full"></div>
          <div class="skeleton h-4 w-full"></div>
        </div>
        <v-table v-else class="table">
          <thead>
            <tr>
              <th></th>
              <th>Username</th>
              <th>Email</th>
              <th>Date Created</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr 
              v-for="(user, index) in users" 
              :key="index" 
              class="hover"
            >
              <th @click="handleUserDetails(user._id)">
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
                    <div class="font-bold text-xs">
                      {{ user.first_name }} {{ user.middle_name }} {{ user.last_name }}
                      </div>
                    <div class="text-xs font-normal opacity-50">{{ user._id }}</div>
                  </div>
                </div>
              </th>
              <td>{{ user.username }}</td>
              <td>{{ user.email }}</td>
              <td>{{ formatDate(user.date_created, 'MMM-DD-yy') }}</td>
              <td>
                <div>
                  <div class="dropdown dropdown-top dropdown-bottom">
                    <div tabindex="0" role="button" class="btn btn-ghost">
                      <Icon 
                        name="lets-icons:meatballs-menu" 
                        color="" 
                        width="20" 
                        height="20" 
                      />
                    </div>
                    <ul 
                      tabindex="0" 
                      class="dropdown-content z-50 menu shadow p-0 bg-base-100 rounded w-24"
                    >
                      <li>
                        <a>
                          <Icon 
                            name="lets-icons:edit-duotone" 
                            color="green" 
                            width="14" 
                            height="14" 
                          />
                          Edit
                        </a>
                      </li>
                      <li>
                        <a @click="handleUpdateUserStatusModal(user._id)">
                          <Icon 
                            name="lets-icons:del-alt-duotone" 
                            color="red" 
                            width="14" 
                            height="14" 
                          />
                          {{ user.status == "Active" ? "Deactive" : "Active" }}
                        </a>
                      </li>
                      <li>
                        <a @click="handleDeleteModal(user._id)">
                          <Icon 
                            name="lets-icons:del-alt-duotone" 
                            color="red" 
                            width="14" 
                            height="14" 
                          />
                          Delete
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>             
              </td>
            </tr>
          </tbody>
        </v-table>
        <!-- <div class="join mt-4">
          <button 
            v-if="paginates % 1 === 0"
            v-for="(paginate, index) in paginates" 
            :key="index"
            @click="handleFetchUsers(paginate)" 
            :class="{ 'join-item btn btn-sm' : true, 'btn-active' : paginate == page }"
          >
            {{ paginate }}
          </button>
        </div> -->
      </div>
    </div>

    <UsersDetailModal 
      v-if="openModalDetailUser" 
      :show="openModalDetailUser" 
      :selectedUser="selectedUser"
      @handleClose="isOpenModalDetailUser" 
    />

    <div class="modal" :class="{ 'modal-open' : openModalDelete }">
      <div class="modal-box">
        Are your sure to delete?
        <div class="modal-action">
          <button class="btn" @click="handleDeleteModal">No</button>
          <button class="btn btn-error" @click="onDelete">
            <span v-if="loading" class="loading loading-spinner text-white"></span>
            <span v-else>Yes</span>
          </button>
        </div>
      </div>
    </div>

    <div class="modal" :class="{ 'modal-open' : openModalUpdateStatus }">
      <div class="modal-box">
        Are your sure to update this user status?
        <div class="modal-action">
          <button class="btn" @click="handleUpdateUserStatusModal">No</button>
          <button class="btn btn-error" @click="onUpdateStatus">
            <span v-if="loading" class="loading loading-spinner text-white"></span>
            <span v-else>Yes</span>
          </button>
        </div>
      </div>
    </div>

  </div>
</template>

<script lang="ts" setup>

  import { useUserStore } from '~/stores/users';
  import { storeToRefs } from 'pinia';

  const { fetchUser, clearAll, deleteUser, updateUserStatus } = useUserStore();
  const { loading: userLoading } = storeToRefs(useUserStore());
  const store = useUserStore();
  const selectedUser = ref<TUserInfo | null>(store.user);
  const openModalDetailUser = ref(false); 
  const openModalDelete = ref(false); 
  const openModalUpdateStatus = ref(false); 
  const idToDelete = ref<null | String>(null);
  const idToUpdateStatus = ref<null | String>(null);

  const props = defineProps({
    users: { type: Object as () => TUserInfo[] },
  });

  const isOpenModalDetailUser = () => {
    if (openModalDetailUser.value) {
      openModalDetailUser.value = false;
      clearAll();
    } else {
      openModalDetailUser.value = true
    }
  }

  const handleUserDetails = async (id: String) => {
    await fetchUser(id);
    selectedUser.value = store.user;
    isOpenModalDetailUser();
  }

  const handleDeleteModal = (id = null) => {
    if (openModalDelete.value == true) {
      idToDelete.value = null;
      openModalDelete.value = false;
    } else {
      openModalDelete.value = true;
      idToDelete.value = id;
    }
  }

  const onDelete = async () => {
    if (idToDelete.value) await deleteUser(idToDelete.value);
    handleDeleteModal();
  }

  const handleUpdateUserStatusModal = (id = null) => {
    if (openModalUpdateStatus.value == true) {
      idToUpdateStatus.value = null;
      openModalUpdateStatus.value = false;
    } else {
      openModalUpdateStatus.value = true;
      idToUpdateStatus.value = id;
    }
  }

  const onUpdateStatus = async () => {
    if (idToUpdateStatus.value) await updateUserStatus(idToUpdateStatus.value);
    handleUpdateUserStatusModal();
  }

</script>