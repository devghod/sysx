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
        <Icon 
          name="svg-spinners:blocks-wave" 
          :color="color" 
          height="40"
          width="40"        
        />
      </div>
    </dialog>
    <div v-if="type == 3">
      <Icon 
        name="svg-spinners:3-dots-bounce" 
        :color="color"  
        height="20"
        width="20"        
      />
    </div>
  </div>
</template>

<script lang="ts" setup>

const props = defineProps<{
  type: number,
  isOpen: boolean
}>();

const color = ref("#e11d48"); // set color here

</script>