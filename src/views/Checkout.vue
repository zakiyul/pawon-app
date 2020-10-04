<template>
  <div>
    <h1 class="my-3">Checkout page</h1>
    <hr />
    <ul>
      <li v-for="keranjang in keranjangs" :key="keranjang.id" class="my-3">
        Jumlah Pesanan = {{ keranjang.jumlah_pesanana }} <br />
        Keterangan = {{ keranjang.keterangan }}
      </li>
    </ul>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      keranjangs: [],
    };
  },
  mounted() {
    axios
      .get(`http://localhost:8000/keranjang/`)
      .then((res) => (this.keranjangs = res.data));
    // .then((res) => console.log(res.data));
  },
};
</script>