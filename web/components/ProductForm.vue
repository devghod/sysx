<template>
  <div class="w-full px-8 py-4">
    <form action="">
      <input type="hidden" readonly />
      <div>
        <label class="label">
          <span class="label-text">Title</span>
        </label>
        <input type="text" placeholder="Title" class="input input-bordered w-full" />
      </div>
      <div>
        <label class="label">
          <span class="label-text">Description</span>
        </label>
        <textarea class="textarea textarea-bordered w-full" placeholder="Description"></textarea>
      </div>
      <div>
        <label class="label">
          <span class="label-text">Brand</span>
        </label>
        <input type="text" placeholder="Brand" class="input input-bordered w-full" />
      </div>
      <div>
        <label class="label">
          <span class="label-text">Price</span>
        </label>
        <input type="number" placeholder="Price" class="input input-bordered w-full" />
      </div>
      <div>
        <label class="label">
          <span class="label-text">Discount</span>
        </label>
        <input type="number" placeholder="Discount" class="input input-bordered w-full" />
      </div>
      <div>
        <label class="label">
          <span class="label-text">Category</span>
        </label>
        <input type="text" placeholder="Category" class="input input-bordered w-full" />
      </div>
      <div class="mt-10 mb-2">
        <button type="submit" class="btn btn-block btn-primary">Submit</button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
</script>