<template>
  <div>
    <button
      v-if="type === 'primary'"
      class="rounded uppercase py-2 font-semibold bg-blue-400 hover:bg-blue-700 text-slate-50 py-1 px-3 text-sm subpixel-antialiased tracking-widest"
      :class="{ 
        'bg-slate-200 hover:bg-slate-200 text-slate-400': (loading || disabled), 
        'w-full': fullWidth 
      }"
      :disabled="disabled"
    >
      <div v-if="loading" class="mx-auto border-gray-300 h-5 w-5 animate-spin rounded-full border-4 border-t-blue-600" />
      <div v-else>{{ label }}</div>
    </button>
    
    <button
      v-else-if="type === 'secondary'"
      class="rounded bg-emerald-500 hover:bg-emerald-700 text-slate-50 py-1 px-3 text-sm subpixel-antialiased tracking-wider"
      :class="{ 
        'bg-slate-200 hover:bg-slate-200 text-slate-400': (loading || disabled), 
        'w-full': fullWidth 
      }"
      :disabled="disabled"
    >
      <div v-if="loading" class="mx-auto border-gray-300 h-5 w-5 animate-spin rounded-full border-4 border-t-blue-600" />
      <div v-else>{{ label }}</div>
    </button>
    
    <button
      v-else-if="type == 'neutral'"
      class="rounded bg-slate-500 hover:bg-slate-700 text-slate-50 py-1 px-3 text-sm subpixel-antialiased tracking-wider"
      :class="{ 
        'bg-slate-200 hover:bg-slate-200 text-slate-400': (loading || disabled), 
        'w-full': fullWidth 
      }"
      :disabled="disabled"
    >
      <div v-if="loading" class="mx-auto border-gray-300 h-5 w-5 animate-spin rounded-full border-4 border-t-blue-600" />
      <div v-else>{{ label }}</div>
    </button>
    
    <button 
      v-else-if="type === 'special'"
      class="w-full py-1 px-2 bg-rose-500 hover:bg-rose-700 tracking-wider antialiased capitalize font-semibold text-white text-sm rounded"
      :class="{ 'btn btn-disabled': loading }"    
    >
      <div v-if="loading" class="flex justify-center">
        <Loaders :type="3" :isOpen="loading" />
      </div>  
      <div v-else>
        {{ label }}
      </div>
    </button>

    <!-- Icon -->
    <button
      v-else-if="type === 'icon'"
      class="hover:text-blue-500"
    >
      <span :class="icon"></span>
    </button>

    <!-- Icon Text -->
    <button
      v-else-if="type === 'icon-text'"
      class="hover:text-blue-500 bg-blue-500 text-slate-100 py-1 px-2 font-semibold rounded"
    >
      <span :class="icon"></span>
      <span 
        v-if="label"
        class="ml-1"
      >
        {{ label }}
      </span>
    </button>

    <!-- Profile -->
    <button
      v-else-if="type === 'profile'"
      class="border rounded-full hover:border-blue-500"
    >
      <v-img 
        :src="data?.image ? data.image : ''" 
        :alt="`${data.first_name} ${data.last_name}`" 
        width="32" 
        height="32" 
      />
    </button>
    
    <!-- Default -->
    <button
      v-else
      class="rounded bg-slate-100 hover:bg-slate-300 text-slate-700 py-1 px-3 text-sm font-semibold tracking-wider"
      :class="{ 
        'bg-slate-200 hover:bg-slate-200 text-slate-400': (loading || disabled), 
        'w-full': fullWidth 
      }"
      :disabled="disabled"
    >
      <div v-if="loading" class="mx-auto border-gray-300 h-5 w-5 animate-spin rounded-full border-4 border-t-blue-600" />
      <div v-else>{{ label }}</div>
    </button>
  </div>
</template>

<script lang="ts" setup>

  interface ButtonProps {
    label?: string;
    type?: string;
    isOpen?: boolean;
    loading?: boolean;
    fullWidth?: boolean;
    disabled?: boolean;
    icon?: string;
    data?: object;
    bgColor?: string; // background color ex: bg-blue-500
  }

  const props = defineProps<ButtonProps>();
  const textColor = ref('red');

</script>