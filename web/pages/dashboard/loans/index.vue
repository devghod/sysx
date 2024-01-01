<template>
  <div>
    <div class="w-full bg-white shadow rounded-lg border mb-4 p-2 space-x-2">
      <button class="btn btn-primary btn-sm text-white">
        <Icon name="lets-icons:add-duotone" color="" width="20" height="20" />
        New
      </button>
    </div>

    <div class="grid grid-cols-5 gap-4">
      <div class="col-span-4 bg-white shadow rounded-lg border col-span-2">
        <div class="overflow-x-auto">
          <LoansTable
            :loans="loans"
            :paginates="paginates"
            :page="page" 
          />
        </div>
      </div>
      <div class="max-h-96 bg-white shadow rounded-lg border">
        <div class="px-3 pt-1 text-sm font-semibold text-gray-700">Status</div>
        <div class="divider m-0"></div>
        <div class="">
          <LoansStatus
            :loans="loans"
            :paginates="paginates"
            :page="page" 
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

  // import { useLoanStore } from '~/stores/loans';
  
  definePageMeta({
    layout: "dashboard"
  });

  const loans = ref([
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
  const paginates = ref(1);
  const page = ref(1);

</script>