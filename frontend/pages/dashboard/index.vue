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
      <div class="bg-white shadow rounded-lg border">
        <div class="border-b">
          <div class="text-slate-700 text-sm mx-2 my-1">Logs</div>
        </div>
        <div class="h-32 overflow-auto">
          <!-- <ul class="list-none m-h-32" v-scroll="handleTouchEnd">
            <li v-for="(log, idx) in logs" :key="idx" class="m-2">
              <div class="grid grid-cols-2 gap-2">
                <div class="text-xs text-slate-700 font-medium">{{ log.created_by.first_name }}</div>
                <div class="text-xs text-slate-400 text-right">{{ formatDate(log.date_created, 'MMM-DD-yy') }}</div>
              </div>
              <div class="text-xs text-slate-400" >{{ log.description }}</div>
            </li>
          </ul> -->
          
          <v-infinite-scroll :height="300" :items="logs" :onLoad="onFetchLogsPaginate">
            <template v-for="(log, index) in logs" :key="index">
              <div :class="['pa-2', index % 2 === 0 ? 'bg-grey-lighten-2' : '']">
                Item #{{ log.created_by.first_name }}
              </div>
            </template>
          </v-infinite-scroll>

        </div>
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
  const { 
    logs, 
    limit: limitStore, 
    skip: skipStore, 
    total: totalLogs 
  } = storeToRefs(useLogStore());
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

  const handleTouchEnd = (event) => {

				console.log('bottom!')
			
    }

</script>