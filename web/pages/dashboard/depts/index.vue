<template>
  <div>
    <div class="w-full bg-white shadow rounded-lg border mb-4 p-2 space-x-2">
      <button class="btn btn-primary btn-sm text-white">
        <Icon name="lets-icons:add-duotone" color="" width="20" height="20" />
        Create
      </button>
    </div>

    <div class="flex gap-4">
      <div class="flex-1 bg-white shadow rounded-lg border col-span-2">
        <div class="overflow-x-auto">
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
              <tr v-for="(data, i) in datas" :key="i">
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
      </div>
      <div class="w-52 bg-white shadow rounded-lg border">
        <div class="px-3 pt-1 text-sm font-semibold text-gray-700">Status</div>
        <div class="divider m-0"></div>
        <div class="">
          <table class="table table-xs">
            <tbody>
              <tr v-for="(data, i) in datas" :key="i">
                <td class="grid grid-cols-3">
                  <div class="col-span-2 text-xs text-slate-700 font-medium">{{ data.full_name }}</div>
                  <div v-if="statusDisplayType == 'text'" class="text-xs text-right capitalize text-slate-400" :class="statusColor(data.status)">{{ data.status }}</div>
                  <div v-if="statusDisplayType == 'pill'" class="text-xs text-center capitalize text-slate-100 rounded-full" :class="statusColorBackground(data.status)">{{ data.status }}</div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  
  definePageMeta({
    layout: "dashboard"
  });

  const datas = ref([
    { "id": 0, "full_name": "Cy Ganderton", "date_created": "10/10/2021", "deadline": "10/10/2023", "status": "pending", "amount": 1000 },
    { "id": 1, "full_name": "Hart Hagerty", "date_created": "10/10/2021", "deadline": "10/10/2023", "status": "completed", "amount": 2000 },
    { "id": 2, "full_name": "Brice Swyre", "date_created": "10/10/2021", "deadline": "10/10/2023", "status": "failed", "amount": 3000 },
    { "id": 0, "full_name": "Cy Ganderton", "date_created": "10/10/2021", "deadline": "10/10/2023", "status": "pending", "amount": 1000 },
    { "id": 1, "full_name": "Hart Hagerty", "date_created": "10/10/2021", "deadline": "10/10/2023", "status": "completed", "amount": 2000 },
    { "id": 2, "full_name": "Brice Swyre", "date_created": "10/10/2021", "deadline": "10/10/2023", "status": "failed", "amount": 3000 },
    { "id": 0, "full_name": "Cy Ganderton", "date_created": "10/10/2021", "deadline": "10/10/2023", "status": "pending", "amount": 1000 },
    { "id": 1, "full_name": "Hart Hagerty", "date_created": "10/10/2021", "deadline": "10/10/2023", "status": "completed", "amount": 2000 },
    { "id": 2, "full_name": "Brice Swyre", "date_created": "10/10/2021", "deadline": "10/10/2023", "status": "failed", "amount": 3000 },
  ]);
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