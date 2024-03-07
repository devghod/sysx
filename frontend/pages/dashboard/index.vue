<template>
  <div>

    <div class="grid grid-cols-5 gap-4">
      <div class="col-span-4 col-span-2">
        <div class="stats shadow col-span-2">
        
          <div class="stat">
            <div class="stat-title font-bold">Total Users</div>
            <div class="stat-value">{{ total_users }}</div>
            <div class="stat-desc">Jan 1st - Feb 1st</div>
          </div>
          
          <div class="stat">
            <div class="stat-title font-bold">Active Users</div>
            <div class="stat-value">{{ total_users_active }}</div>
            <div class="stat-desc">↗︎ 400 (22%)</div>
          </div>
          
          <div class="stat">
            <div class="stat-title font-bold">Deactive Users</div>
            <div class="stat-value">{{ total_users_deactive }}</div>
            <div class="stat-desc">↘︎ 90 (14%)</div>
          </div>
          
        </div>
      </div>
      <div class="max-h-96 bg-white shadow rounded-lg border">
        <table class="table table-xs">
          <tbody>
            <tr v-for="(log, idx) in logs" :key="idx">
              <td class="grid grid-cols-3">
                <div class="col-span-2 text-xs text-slate-700 font-medium">{{ log.created_by }}</div>
                <div class="text-xs text-right capitalize text-slate-400" >{{ log.created_for }}</div>
                <!-- <div v-if="statusDisplayType == 'pill'" class="text-xs text-center capitalize text-slate-100 rounded-full" >{{ log.desciption }}</div> -->
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- <div class="grid gap-4 grid-cols-5">
      <div class="stats shadow col-span-2">
    
        <div class="stat">
          <div class="stat-title font-bold">Total Users</div>
          <div class="stat-value">{{ total_users }}</div>
          <div class="stat-desc">Jan 1st - Feb 1st</div>
        </div>
        
        <div class="stat">
          <div class="stat-title font-bold">Active Users</div>
          <div class="stat-value">{{ total_users_active }}</div>
          <div class="stat-desc">↗︎ 400 (22%)</div>
        </div>
        
        <div class="stat">
          <div class="stat-title font-bold">Deactive Users</div>
          <div class="stat-value">{{ total_users_deactive }}</div>
          <div class="stat-desc">↘︎ 90 (14%)</div>
        </div>
        
      </div>

      <div class="stats shadow col-span-2">
  
        <div class="stat place-items-center">
          <div class="stat-title">Total Users</div>
          <div class="stat-value text-secondary">{{ total_users }}</div>
          <div class="stat-desc">From January 1st to February 1st</div>
        </div>
        
        <div class="stat place-items-center">
          <div class="stat-title">Total Users Active</div>
          <div class="stat-value">{{ total_users_active }}</div>
          <div class="stat-desc">↗︎ 40 (2%)</div>
        </div>
        
        <div class="stat place-items-center">
          <div class="stat-title">Total Users Deactive</div>
          <div class="stat-value">{{ total_users_deactive }}</div>
          <div class="stat-desc">↘︎ 90 (14%)</div>
        </div>
        
      </div>

      <div class="stats stats-vertical shadow">
  
        <div class="stat">
          <div class="stat-title">Downloads</div>
          <div class="stat-value">31K</div>
          <div class="stat-desc">Jan 1st - Feb 1st</div>
        </div>
        
        <div class="stat">
          <div class="stat-title">New Users</div>
          <div class="stat-value">4,200</div>
          <div class="stat-desc">↗︎ 400 (22%)</div>
        </div>
        
        <div class="stat">
          <div class="stat-title">New Registers</div>
          <div class="stat-value">1,200</div>
          <div class="stat-desc">↘︎ 90 (14%)</div>
        </div>
        
      </div>
    </div> -->

  </div>
</template>

<script setup lang="ts">

  import { useUserStore } from '~/stores/users';
  import { useLogStore } from '~/stores/logs';
  import { storeToRefs } from 'pinia';
  
  definePageMeta({
    layout: "dashboard",
    // middleware: ["auth"],
  });

  const { fetchUsersStatistics } = useUserStore();
  const { fetchLogsPaginate } = useLogStore();
  const { 
    total_users, 
    total_users_active, 
    total_users_deactive 
  } = storeToRefs(useUserStore());
  const { logs } = storeToRefs(useLogStore());
  const limit = ref(2);
  const skip = ref(2);

  const onFetchUsersStatistics = () => {
    fetchUsersStatistics();
  }

  onFetchUsersStatistics();

  const onFetchLogsPaginate = () => {
    fetchLogsPaginate(skip.value, limit.value);
  }

  onFetchLogsPaginate();

</script>