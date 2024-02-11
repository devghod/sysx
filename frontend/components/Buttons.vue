<template>
  <div>
    <button
      v-if="type == 'primary'"
      class="rounded bg-sky-500 hover:bg-sky-700 text-slate-50 py-1 px-3 text-sm subpixel-antialiased tracking-wider"
      :class="{ 
        'bg-slate-200 hover:bg-slate-200 text-slate-400': (loading || disabled), 
        'block': fullWidth 
      }"
      :disabled="disabled"
    >
      <span v-if="loading" class="loading loading-spinner"></span>
      <div v-else>{{ label }}</div>
    </button>
    <button
      v-else-if="type == 'secondary'"
      class="rounded bg-emerald-500 hover:bg-emerald-700 text-slate-50 py-1 px-3 text-sm subpixel-antialiased tracking-wider"
      :class="{ 
        'bg-slate-200 hover:bg-slate-200 text-slate-400': (loading || disabled), 
        'block': fullWidth 
      }"
      :disabled="disabled"
    >
      <span v-if="loading" class="loading loading-spinner"></span>
      <div v-else>{{ label }}</div>
    </button>
    <button
      v-else-if="type == 'neutral'"
      class="rounded bg-slate-500 hover:bg-slate-700 text-slate-50 py-1 px-3 text-sm subpixel-antialiased tracking-wider"
      :class="{ 
        'bg-slate-200 hover:bg-slate-200 text-slate-400': (loading || disabled), 
        'block': fullWidth 
      }"
      :disabled="disabled"
    >
      <span v-if="loading" class="loading loading-spinner"></span>
      <div v-else>{{ label }}</div>
    </button>
    <button 
      class="w-full py-1 px-2 bg-rose-500 hover:bg-rose-700 tracking-wider antialiased capitalize font-semibold text-white text-sm rounded"
      :class="{ 'btn btn-disabled': loading }"
      v-else-if="type == 'special'"
    >
      <div v-if="loading" class="flex justify-center">
        <Loaders :type="3" :isOpen="loading" />
      </div>  
      <div v-else>
        {{ label }}
      </div>
    </button> 
    <!-- Default -->
    <button
      v-else
      class="rounded bg-slate-100 hover:bg-slate-300 text-slate-700 py-1 px-3 text-sm font-semibold tracking-wider"
      :class="{ 
        'bg-slate-200 hover:bg-slate-200 text-slate-400': (loading || disabled), 
        'block': fullWidth 
      }"
      :disabled="disabled"
    >
      <span v-if="loading" class="loading loading-spinner"></span>
      <div v-else>{{ label }}</div>
    </button>
  </div>
</template>

<script lang="ts" setup>

  interface ButtonProps {
    label: string;
    type?: string;
    isOpen?: boolean;
    loading?: boolean;
    fullWidth?: boolean;
    disabled?: boolean;
  }

  const props = defineProps<ButtonProps>();

</script>