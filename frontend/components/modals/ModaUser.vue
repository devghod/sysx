<template>
  <div>
    <Modal>
      <div class="modal-box">
        <h3 class="font-bold text-lg">Details</h3>
        <div class="py-4">
          <ul>
            <li class="">
              <div class="avatar">
                <div class="mask mask-squircle w-16 h-16">
                  <img v-if="user?.image" :src="user.image" :alt="`${ user.first_name } ${ user.middle_name } ${ user.last_name }`" />
                </div>
              </div>
            </li>
            <li class="mt-2 mb-1">
              <span class="mr-1 text-sm text-slate-500 font-semibold">ID:</span>{{ user?._id }}
            </li>
            <li class="mb-1">
              <span class="mr-2 text-sm text-slate-500 font-semibold">First Name:</span>{{ user?.first_name }}
            </li>
            <li class="mb-1">
              <span class="mr-2 text-sm text-slate-500 font-semibold">Middle Name:</span>{{ user?.middle_name }}
            </li>
            <li class="mb-1">
              <span class="mr-2 text-sm text-slate-500 font-semibold">Last Name:</span>{{ user?.last_name }}
            </li>
            <li class="mb-1">
              <span class="mr-2 text-sm text-slate-500 font-semibold">Username:</span>{{ user?.username }}
            </li>
            <li class="mb-1">
              <span class="mr-2 text-sm text-slate-500 font-semibold">Email:</span>{{ user?.email }}
            </li>
          </ul>
        </div>
        <div class="modal-action">
          <form method="dialog">
            <Buttons label="Close" type="" @click="closeModal" />
          </form>
        </div>
      </div>
    </Modal>
  </div>
</template>

<script lang="ts" setup>

  // import { Modal } from 'daisyui';
  import { Modal } from '@headlessui/vue';

  interface ModalProps {
    user: Object,
  }

  const { user } = defineProps<ModalProps>();

  const closeModal = () => {
    emits('closeUserDetails');
  };

</script>