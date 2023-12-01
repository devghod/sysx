<template>
  <div class="w-full px-8 py-4">
    <form method="dialog">
      <input type="hidden" readonly />
      <div>
        <label class="label">
          <span class="label-text">Title</span>
        </label>
        <input type="text" v-model="props.formData.title" placeholder="Title" class="input input-bordered w-full" />
      </div>
      <div>
        <label class="label">
          <span class="label-text">Description</span>
        </label>
        <textarea class="textarea textarea-bordered w-full" v-model="props.formData.description" placeholder="Description"></textarea>
      </div>
      <div>
        <label class="label">
          <span class="label-text">Brand</span>
        </label>
        <input type="text" v-model="props.formData.brand" placeholder="Brand" class="input input-bordered w-full" />
      </div>
      <div>
        <label class="label">
          <span class="label-text">Price</span>
        </label>
        <input type="number" v-model="props.formData.price" placeholder="Price" class="input input-bordered w-full" />
      </div>
      <div>
        <label class="label">
          <span class="label-text">Discount</span>
        </label>
        <input type="number" v-model="props.formData.discountPercentage" placeholder="Discount" class="input input-bordered w-full" />
      </div>
      <div>
        <label class="label">
          <span class="label-text">Category</span>
        </label>
        <input type="text" v-model="props.formData.category" placeholder="Category" class="input input-bordered w-full" />
      </div>
      <div class="mt-10 mb-2">
        <button type="button" @click="create" class="btn btn-block btn-primary">Submit</button>
      </div>
      <div class="w-full px-8 pb-4 pt-0">
        <button class="btn btn-block btn-ghost" @click="handleModal">Close</button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">

  import { TProductInfo } from '~/stores/productsStore';

  const props = defineProps<{
    formData: TProductInfo;
  }>();

  const emit = defineEmits([
    'handleProductCreate', 
    'handleModalCreate'
  ]);

  const create = () => emit('handleProductCreate', props.formData);
  const handleModal = () => emit('handleModalCreate');
  
</script>