<template>
  <div>
    <div class="w-full shadow rounded border">
      <div class="grid grid-cols-6 gap-4 pt-3 px-3">
        <div class="col-start-1 col-end-3">
          <div class="">
            <span class="font-medium tracking-wide mr-2">Products</span> 
            <button class="btn btn-neutral btn-xs" @click="handleProductFetch(1)">
              <div v-if="loading">
                <span class="loading loading-spinner loading-xs"></span>
              </div>
              <div v-else>Fetch Products</div>
            </button>
          </div>
        </div>
        <div class="col-end-8 col-span-1">
          <button class="btn btn-circle btn-sm" @click="handleModalCreate">
            <Icon 
              name="lets-icons:add-duotone"
              color="green" 
              height="30"
              width="30"
            />
          </button>
        </div>
      </div>
      <div class="divider mt-0"></div> 
      <div class="">
        <div class="overflow-x-auto">
          <ProductsTable 
            v-if="products.length > 0"
            :products="products"
            :paginates="paginates"
            :page="page"
            @handleProductFetch="handleProductFetch" 
            @handleProductDetails="handleProductDetails" 
          />
        </div>
      </div>
    </div>
    <dialog id="my_modal_1" class="modal">
      <div class="card w-96 bg-base-100 shadow-xl">
        <figure><img :src="productDetails.thumbnail" height="50" alt="Shoes" /></figure>
        <div class="pt-2 pb-4 px-4">
          <div class="text-sm">
            <div class="grid grid-cols-5">
              <div class="col-span-3">
                <span class="text-xs text-gray-400">
                  {{ productDetails.brand }}
                </span>
                <p>{{ productDetails.title }}</p>
              </div>
              <div class="col-span-1 justify-self-end">
                <span class="text-xs text-gray-400">Stocks</span>
                <p>{{ productDetails.stock }}</p>
              </div>
              <div class="col-span-1 justify-self-end">
                <span class="text-xs text-gray-400">Price</span>
                <p>${{ productDetails.price }}</p>
              </div>
            </div>
          </div>
          <div class="modal-action">
            <form method="dialog">
              <button class="btn btn-sm">Close</button>
            </form>
          </div>
        </div>
      </div>
    </dialog>
    <dialog :class="{ 'modal': true, 'modal-open': modalCreate }">
      <div class="card w-96 bg-base-100">
        <ProductForm 
          :formData="newProductDetails" 
          @handleProductCreate="handleProductCreate"
          @handleModalCreate="handleModalCreate"
        />
      </div>
    </dialog>
    <Loaders :type="2" :isOpen="loading" />
  </div>
</template>

<script setup lang="ts">

  import { useProductsStore } from '../../../stores/productsStore';
  import { ProductInit } from '../../../stores/productsStore';
  import type { TProductInfo } from '../../../stores/productsStore';

  const { fetchProducts, createProducts, init } = useProductsStore();
  const store = useProductsStore();
  const products = computed(() => store.products);
  const loading = computed(() => store.loading);
  const skip = computed(() => store.skip);
  const limit = computed(() => store.limit);
  const total = computed(() => store.total);
  const paginates = computed(() => total.value / limit.value);

  const page = ref(1);
  const newProductDetails = ref<TProductInfo>(ProductInit);
  const productDetails = ref<TProductInfo>(ProductInit);
  const modalCreate = ref(false);

  const handleProductFetch = async (pageNum: number) => {
    page.value = pageNum;
    let skipVal = (pageNum * limit.value) - 10;
    await fetchProducts(skipVal);
  };
  await handleProductFetch(1);
  const handleProductDetails = (data: object) => productDetails.value = data;
  const handleProductCreate = async (data: object) => {
    handleModalCreate();
    await createProducts(data);
  }
  const handleModalCreate = () => {
    modalCreate.value == true ? modalCreate.value = false : modalCreate.value = true;
    init();
  }
  
  definePageMeta({
    layout: "dashboard"
  });

</script>