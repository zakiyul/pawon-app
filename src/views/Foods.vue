<template>
  <div class="about my-4">
    <h3>Daftar Makanan</h3>
    <div class="input-group mb-2">
      <input
        type="text"
        class="form-control"
        placeholder="Cari Makanan Anda..."
        v-model="search"
      />
    </div>
    <div class="row">
      <div
        class="col-md-4 my-3"
        v-for="product in filteredProducts"
        :key="product.id"
      >
        <ProductCard
          :id="product.id"
          :nama="product.nama"
          :harga="product.harga"
          :rating="product.rating"
          :gambar="product.gambar"
        />
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import ProductCard from "@/components/ProductsCards.vue";
import searchMixin from "@/mixins/searchMixin";

export default {
  components: {
    ProductCard,
  },
  data() {
    return {
      products: [],
      search: "",
    };
  },
  mounted() {
    axios
      .get(`http://localhost:8000/makanan/`)
      .then((res) => (this.products = res.data))
      .catch((err) => console.log(err));
  },
  mixins: [searchMixin],
};
</script>
