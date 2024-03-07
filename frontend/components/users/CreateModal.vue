<template lang="">
  <div>
    <div class="modal" :class="{ 'modal-open' : show }">
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
                class="w-full border rounded px-2"
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
                class="w-full border rounded px-2"
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
                class="w-full border rounded px-2"
                v-model="newUser.last_name"
              />
            </div>
            <div class="">
              Gender:
            </div>
            <div class="col-span-2">
              <select 
                v-model="newUser.gender" 
                name="gender" 
                id="gender" 
                class="w-full border rounded"
              >
                <option disabled selected>Select Gender</option>
                <option v-for="(item) in genderList" :value="item" :id="item">{{ item }}</option>
              </select>
            </div>
            <div class="">
              Username:
            </div>
            <div class="col-span-2">
              <input 
                type="text" 
                placeholder="" 
                class="w-full border rounded px-2"
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
                class="w-full border rounded px-2"
              />
            </div>
            <div class="">
              Status:
            </div>
            <div class="col-span-2">
              <select 
                v-model="newUser.status" 
                name="status" 
                id="status" 
                class="w-full border rounded"
              >
                <option disabled selected>Select Status</option>
                <option v-for="(item) in statusList" :value="item" :id="item">{{ item }}</option>
              </select>
            </div>
          </div>
        </div>
        <div class="modal-action">
          <button class="btn" @click="close">Close</button>
          <button class="btn btn-primary" @click.prevent="addNewUser()">
            <span v-if="loading" class="loading loading-spinner text-white"></span>
            <span v-else>Create</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

  import { useUserStore } from '~/stores/users';
  import { storeToRefs } from 'pinia';

  const props = defineProps({
    show: { type: Boolean },
  });
  const { addUser } = useUserStore();
  const { loading } = storeToRefs(useUserStore());
  const newUser = ref<TNewUserInfo>({
    first_name: "",
    middle_name: "",
    last_name: "",
    image: "",
    email: "",
    username: "",
    password: "Admin@123",
    status: "",
    gender: ""
  });
  const statusList = ref(["Active", "Deactive"]);
  const genderList = ref(["Male", "Female"]);
  const added = ref(false);
  const emit = defineEmits([
    'handleClose', 
  ]);

  const addNewUser = async () => {
    await addUser(newUser.value)
      .then(res => {
        added.value = true;
        close();
      })
      .catch(err => console.log("Error ", err));
  }

  const close = () => {
    emit('handleClose', added.value);
    clear();
  }

  const clear = () => {
    newUser.value.first_name = "";
    newUser.value.middle_name = "";
    newUser.value.last_name = "";
    newUser.value.image = "";
    newUser.value.email = "";
    newUser.value.username = "";
    newUser.value.password = "Admin@123";
    newUser.value.status = "";
  }

</script>