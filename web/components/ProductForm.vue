<template>
  <div class="w-full px-8 py-4">
    <form ref="createProductForm" method="dialog">
      <input type="hidden" readonly />
      <div>
        <label class="label">
          <span class="label-text">Title</span>
        </label>
        <input type="text" v-model="formDataDetails.title" placeholder="Title" class="input input-bordered w-full" />
      </div>
      <div>
        <label class="label">
          <span class="label-text">Description</span>
        </label>
        <textarea class="textarea textarea-bordered w-full" v-model="formDataDetails.description" placeholder="Description"></textarea>
      </div>
      <div>
        <label class="label">
          <span class="label-text">Brand</span>
        </label>
        <input type="text" v-model="formDataDetails.brand" placeholder="Brand" class="input input-bordered w-full" />
      </div>
      <div>
        <label class="label">
          <span class="label-text">Price</span>
        </label>
        <input type="number" v-model="formDataDetails.price" placeholder="Price" class="input input-bordered w-full" />
      </div>
      <div>
        <label class="label">
          <span class="label-text">Discount</span>
        </label>
        <input type="number" v-model="formDataDetails.discountPercentage" placeholder="Discount" class="input input-bordered w-full" />
      </div>
      <div>
        <label class="label">
          <span class="label-text">Category</span>
        </label>
        <input type="text" v-model="formDataDetails.category" placeholder="Category" class="input input-bordered w-full" />
      </div>
      <div class="mt-6 mb-2">
        <button type="button" @click="create" class="btn btn-block btn-primary">Submit</button>
      </div>
      <div class="">
        <button class="btn btn-block btn-ghost" @click="handleModal">Close</button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">

  import { TProductInfo } from '~/stores/productsStore';

  const props = defineProps<{
    formData: TProductInfo;
    // formData:  as TProductInfo
  }>();

  const menu = reactive({
      isOpen: false
  });

  const formDataDetails = ref<TProductInfo>(props.formData);
  // const formDataDetails = ref<HTMLFormElement >(props.formData);

  watch(() => props.formData, (newValue) => {
    // console.log("new value", newValue)
    // formDataDetails.value = newValue;
    // $refs.createProductForm.reset();
    console.log(formDataDetails.value)
  }, { deep: true, immediate: true });

  const emit = defineEmits([
    'handleProductCreate', 
    'handleModalCreate'
  ]);
  
  const clear = () => {
    formDataDetails.value.brand = "";
  }
  const create = () => {
    
    emit('handleProductCreate', props.formData)
    clear();
  };
  const handleModal = () => emit('handleModalCreate'); 
  
</script>