<template>
  <div class="card h-100 shadow-sm rounded border-0">
    <img :src="gambar" class="card-img-top img-fluid" :alt="nama" />
    <div class="card-body">
      <h5 class="card-title">{{ nama }}</h5>
      <p class="card-text">Harga : Rp. {{ harga }}</p>
      <p class="card-text">Rating : {{ rating }}</p>
      <router-link :to="`/food/${id}`" class="btn btn-success">
        <b-icon icon="cart"></b-icon> Pesan
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ["id", "nama", "harga", "rating", "gambar"],
};
</script>

<style lang="scss" scoped>
.card-img-top {
  width: 100%;
  height: 30vh;
  object-fit: cover;
}
</style>
