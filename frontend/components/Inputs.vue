<template>
  <div>
    <button 
      class="w-full py-1 bg-rose-500 hover:bg-rose-700 tracking-wider antialiased capitalize font-semibold text-white rounded"
      v-if="type == 1"
    >
      <div v-if="loading" class="flex justify-center">
        <Loaders :type="3" :isOpen="loading" />
      </div>  
      <div v-else>
        Sign in
      </div>
    </button> 
  </div>
</template>

<script lang="ts" setup>

const props = defineProps<{
  type: number,
  isOpen: boolean,
  loading: false
}>();

</script>