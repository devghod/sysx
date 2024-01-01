<template>
  <div>
    <table class="table table-xs">
      <tbody>
        <tr v-for="(data, i) in loans" :key="i">
          <td class="grid grid-cols-3">
            <div class="col-span-2 text-xs text-slate-700 font-medium">{{ data.full_name }}</div>
            <div v-if="statusDisplayType == 'text'" class="text-xs text-right capitalize text-slate-400" :class="statusColor(data.status)">{{ data.status }}</div>
            <div v-if="statusDisplayType == 'pill'" class="text-xs text-center capitalize text-slate-100 rounded-full" :class="statusColorBackground(data.status)">{{ data.status }}</div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">

  const props = defineProps({
    loans: { type: Array, required: true },
    paginates: { type: Number },
    page: { type: Number },
  });

  const statusDisplayType = ref('pill'); // text, pill
  const statusColor = (data: string) => {
    switch(data) {
      case 'completed': return 'text-green-500';
      case 'pending': return 'text-yellow-500';
      case 'failed': return 'text-red-500';
      default: return 'text-gray-500';
    }
  };
  const statusColorBackground = (data: string) => {
    switch(data) {
      case 'completed': return 'bg-green-500';
      case 'pending': return 'bg-yellow-500';
      case 'failed': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

</script>