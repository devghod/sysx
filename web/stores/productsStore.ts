import { defineStore } from 'pinia'

export const useProductsStore = defineStore('products', {

  state: () => ({
    products: [] as TProductInfo[],
    product: null as TProductInfo | null,
    loading: false as Boolean,
    total: 0 as number,
    limit: 10 as number,
    skip: 0 as number,
  }),

  getters: {
    getProductsCount: (state) => state.total,
  },

  actions: {
    async fetchProducts(skipNum: number) {
      this.loading = true;

      const { data, error }: any = await useLazyFetch('https://dummyjson.com/products', {
        query: { limit: this.limit, skip: skipNum }
      });

      if (data.value?.products && data.value.products.length > 0) {
        this.products = data.value.products;
        this.total = data.value.total;
        this.skip = skipNum;
      };

      this.loading = false;
    },

    async createProducts(prdct: object) {
      const { data }: any = await useLazyFetch('https://dummyjson.com/products/add', {
        method: "post",
        body: prdct
      });
      let result = toRaw(data.value);
      console.log("Successfully Created:", result);
    }
  }

})

export type TProductInfo = {
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

export const ProductInit: TProductInfo = {
  id: 0,
  title: '',
  description: '',
  price: 0,
  discountPercentage: 0,
  rating: 0,
  stock: 0,
  brand: '',
  category: '',
  thumbnail: '',
  images: []
}