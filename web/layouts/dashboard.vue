<template>
  <div data-theme="light">
    <DashboardHorizontal />
    <div class="flex flex-row h-screen">
      <div class="w-full flex">
        <DashboardVertical />
        <div class="w-full p-5 h-5/6 overflow-y-scroll bg-gray-200">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>