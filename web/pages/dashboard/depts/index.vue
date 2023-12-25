<template>
  <div>
    <div class="flex gap-4">
      <div class="flex-1 bg-white shadow rounded-lg border col-span-2">
        <div class="overflow-x-auto">
          <table class="table">
            <!-- head -->
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Job</th>
                <th>Favorite Color</th>
              </tr>
            </thead>
            <tbody>
              <!-- row 1 -->
              <tr>
                <th>1</th>
                <td>Cy Ganderton</td>
                <td>Quality Control Specialist</td>
                <td>Blue</td>
              </tr>
              <!-- row 2 -->
              <tr>
                <th>2</th>
                <td>Hart Hagerty</td>
                <td>Desktop Support Technician</td>
                <td>Purple</td>
              </tr>
              <!-- row 3 -->
              <tr>
                <th>3</th>
                <td>Brice Swyre</td>
                <td>Tax Accountant</td>
                <td>Red</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="w-52 bg-white shadow rounded-lg border">wow
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  
  definePageMeta({
    layout: "dashboard"
  });

</script>