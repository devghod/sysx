<template lang="">
  <div>
    <div class="modal" :class="{ 'modal-open' : show }">
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
              <span class="mr-2 text-sm text-slate-500 font-semibold">Gender:</span>
              {{ selectedUser?.gender }}
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
          <Buttons @click="close" label="Close" type="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

  const props = defineProps({
    show: { type: Boolean },
    selectedUser: { type: Object as () => TUserInfo },
  });
 
  const emit = defineEmits([
    'handleClose', 
  ]);

  const close = () => {
    emit('handleClose');
  };

</script>