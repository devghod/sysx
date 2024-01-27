<template>
  <div>
    <table class="table table-xs">
      <thead>
        <tr>
          <th>Offers</th>
          <th>Title</th>
          <th>Price</th>
          <th>Rating</th>
          <th>Stock</th>
        </tr>
      </thead>
      <tbody>
        <tr 
          v-for="product in props.products" 
          :key="product.id" 
          class="hover"
          @click="handleDetails(product)"
          onclick="my_modal_1.showModal()"
        >
          <th>
            <div class="flex items-center gap-3">
              <div class="avatar">
                <div class="mask mask-squircle w-12 h-12">
                  <img :src="product.thumbnail" alt="Avatar Tailwind CSS Component" />
                </div>
              </div>
              <div>
                <div class="font-bold text-xs">{{ product.discountPercentage }} % Discount</div>
                <div class="text-xs font-normal opacity-50">{{ product.brand }}</div>
              </div>
            </div>
          </th>
          <td>{{ product.title }}</td>
          <td>{{ product.price }}</td>
          <td>{{ product.rating }}</td>
          <td>{{ product.stock }}</td>
        </tr>
      </tbody>
    </table>
    <div class="join ml-2 my-4">
      <button 
        v-for="paginate in props.paginates" 
        @click="handlePageFetch(paginate)" 
        :class="{ 'join-item btn btn-sm' : true, 'btn-active' : paginate == page }"
      >
        {{ paginate }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
  
  const props = defineProps({
    products: { type: Array, required: true },
    paginates: { type: Number },
    page: { type: Number },
  });

  const emit = defineEmits([
    'handleProductFetch', 
    'handleProductDetails'
  ]);

  const handleDetails = (data: Object) => emit('handleProductDetails', data);
  const handlePageFetch = (num: Number) => emit('handleProductFetch', num);

</script>