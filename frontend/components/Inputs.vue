<template>
  <div>
    <button 
      class="w-full py-1 bg-rose-500 hover:bg-rose-700 tracking-wider antialiased capitalize font-semibold text-white rounded"
      v-if="type == 'primary'"
    >
      <div v-if="loading" class="flex justify-center">
        <Loaders :type="3" :isOpen="loading" />
      </div>  
      <div v-else>
        {{ label }}
      </div>
    </button> 
    <button 
      class="w-full py-1 bg-rose-500 hover:bg-rose-700 tracking-wider antialiased capitalize font-semibold text-white rounded"
      v-else
    >
      <div v-if="loading" class="flex justify-center">
        <Loaders :type="3" :isOpen="loading" />
      </div>  
      <div v-else>
        {{ label }}
      </div>
    </button> 
  </div>
</template>

<script lang="ts" setup>

const props = defineProps<{
  label: {
    required: true,
    type: string,
  },
  type: string, // primary, secondary, default = none or ''
  isOpen: boolean,
  loading: false,
}>();

</script>