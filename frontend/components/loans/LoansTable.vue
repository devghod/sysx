<template>
  <div>
    <table class="table">
      <thead>
        <tr>
          <th></th>
          <th>Name</th>
          <th>Issued</th>
          <th>Deadline</th>
          <th>Amount</th>
          <th class="w-32">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(data, i) in loans" :key="i">
          <th>{{ data.id }}</th>
          <td>{{ data.full_name }}</td>
          <td>{{ data.date_created }}</td>
          <td>{{ data.deadline }}</td>
          <td>{{ data.amount }}</td>
          <td>
            <div v-if="actionDisplayType == 'buttons'">
              <span class="tooltip" data-tip="Edit">
                <button class="btn btn-xs rounded-l rounded-r-none">
                  <Icon name="lets-icons:edit-duotone" color="green" width="20" height="20" />
                </button>
              </span>
              <span class="tooltip" data-tip="Delete">
                <button class="btn btn-xs rounded-r rounded-l-none">
                  <Icon name="lets-icons:del-alt-duotone" color="red" width="20" height="20" />
                </button>
              </span>  
            </div>  
            <div v-if="actionDisplayType == 'dropdown'">
              <div class="dropdown dropdown-top dropdown-bottom">
                <div tabindex="0" role="button" class="btn btn-xs btn-ghost">
                  <Icon name="lets-icons:meatballs-menu" color="" width="20" height="20" />
                </div>
                <ul tabindex="0" class="dropdown-content z-[2] menu shadow p-0 bg-base-100 rounded w-24">
                  <li><a><Icon name="lets-icons:edit-duotone" color="green" width="14" height="14" />Edit</a></li>
                  <li><a><Icon name="lets-icons:del-alt-duotone" color="red" width="14" height="14" />Delete</a></li>
                </ul>
              </div>
            </div>             
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

  const emit = defineEmits([
    'handleProductFetch', 
    'handleProductDetails'
  ]);

  const handleDetails = (data: Object) => emit('handleProductDetails', data);
  const handlePageFetch = (num: Number) => emit('handleProductFetch', num);

  const actionDisplayType = ref('dropdown'); // buttons, dropdown
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