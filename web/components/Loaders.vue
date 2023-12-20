<template>
  <div>
    <dialog
      v-if="type == 1"
      :class="{ 'modal': true, 'modal-open': isOpen }"
    >
      <div class="card bg-base-100 bg-transparent">
        <span class="loading loading-infinity loading-lg text-primary"></span>
      </div>
    </dialog>
    <dialog
      v-if="type == 2"
      :class="{ 'modal': true, 'modal-open': isOpen }"
    >
      <div class="card bg-base-100 bg-transparent">
        <Icon icon="svg-spinners:blocks-wave" />
      </div>
    </dialog>
  </div>
</template>

<script lang="ts" setup>

const props = defineProps<{
  type: number,
  isOpen: boolean
}>();

</script>