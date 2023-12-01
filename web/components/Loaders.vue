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
  </div>
</template>

<script lang="ts" setup>

const props = defineProps<{
  type: number,
  isOpen: boolean
}>();

</script>