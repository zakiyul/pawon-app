<template>
  <div>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb bg-white">
        <li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
        <li class="breadcrumb-item">
          <router-link to="/foods">Foods</router-link>
        </li>
        <li class="breadcrumb-item active" aria-current="page">
          {{ product.nama }}
        </li>
      </ol>
    </nav>
    <div class="row my-5">
      <div class="col-md-6">
        <img :src="product.gambar" alt="" class="img-fluid" />
      </div>
      <div class="col-md-6">
        <p class="h2">{{ product.nama }}</p>
        <hr />
        <p class="lead">Harga : Rp. {{ product.harga }}</p>
        <p class="lead">Rating : {{ product.rating }}</p>
        <form @submit.prevent="toKeranjang">
          <div class="form-group">
            <label for="jumlah">Jumlah Pesanan</label>
            <input
              type="number"
              id="jumlah"
              class="form-control"
              v-model="keranjang.jumlah_pesanana"
            />
          </div>
          <div class="form-group">
            <label for="keterangan">Keterangan</label>
            <textarea
              id="keterangan"
              class="form-control"
              placeholder="Ket: Pedas, Nasi Setengah .."
              v-model="keranjang.keterangan"
            ></textarea>
          </div>
          <button class="btn btn-warning text-white">
            <b-icon icon="cart"></b-icon>
            Pesan
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  components: {},
  data() {
    return {
      id: this.$route.params.id,
      product: {},
      keranjang: {
        jumlah_pesanana: 0,
        keterangan: "",
        makanan: 0,
      },
    };
  },
  methods: {
    toKeranjang() {
      this.keranjang.makanan = this.product.id;
      axios
        .post(`http://localhost:8000/keranjang/`, this.keranjang)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
      // console.log(this.keranjang);
    },
  },
  mounted() {
    axios
      .get(`http://localhost:8000/makanan/${this.id}`)
      .then((res) => (this.product = res.data))
      .catch((err) => console.log(err));
  },
};
</script>

<style lang="scss" scoped>
.breadcrumb {
  a {
    color: black;
    transition: all 0.3s;
    &:hover {
      color: gray;
      text-decoration: none;
    }
  }
}
img {
  border-radius: 16px;
}
</style>
