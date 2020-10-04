<template>
  <div class="home my-4">
    <Hero
      :strongTitle="hero.strongTitle"
      :title="hero.title"
      :note="hero.note"
      :btnTitle="hero.btnTitle"
      :img="hero.img"
    />
    <div class="d-flex mt-4">
      <p class="h3 border-bottom">Menu Favorit</p>
      <router-link to="/foods" class="btn btn-success ml-auto">
        <b-icon icon="eye"></b-icon> Lihat Semua
      </router-link>
    </div>
    <div class="row mt-3">
      <div class="col-md-4" v-for="product in bestProduct" :key="product.id">
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
import Hero from "@/components/Hero.vue";
import ProductCard from "../components/ProductsCards.vue";
import axios from "axios";

export default {
  name: "Home",
  components: {
    Hero,
    ProductCard,
  },
  data() {
    return {
      hero: [],
      bestProduct: [],
    };
  },
  mounted() {
    axios
      .get(`http://localhost:8000/landingPage/`)
      .then((res) => (this.hero = res.data[0]))
      .catch((err) => console.log(err));
    axios
      .get(`http://localhost:8000/makanan/`)
      .then(
        (res) =>
          (this.bestProduct = res.data.filter((food) => food.rating > 4.5))
      );
  },
};
</script>
<style lang="scss" scoped>
.card {
  border: 1px solid;
  border-radius: 16px;
}
</style>
