import { defineStore } from 'pinia'

export const useProductsStore = defineStore('products', {

  state: () => {
    return {
      products: [] as ProductInfo[],
      product: null as ProductInfo | null,
      loading: false as Boolean,
      total: 0 as number,
      limit: 10 as number,
      skip: 0 as number,
    }
  },

  getters: {
    
  },

  actions: {
    async fetchProducts(skipNum: number) {
      this.loading = true;

      const { data }: any = await useLazyFetch('https://dummyjson.com/products', {
        query: { limit: this.limit, skip: skipNum }
      });

      if (data.value?.products && data.value.products.length > 0) {
        this.products = data.value.products;
        this.total = data.value.total;
        this.skip = skipNum;
      };

      this.loading = false;
    }
  }

})

export interface ProductInfo {
  id: number,
  title: string,
  description: string,
  price: number,
  discountPercentage: number,
  rating: number,
  stock: number,
  brand: string,
  category: string,
  thumbnail: string,
  images: []
}