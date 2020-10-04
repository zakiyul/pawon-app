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
          <div class="input-group mb-3">
            <div
              v-show="keranjang.jumlah_pesanana > 0"
              class="input-group-prepend"
            >
              <button
                type="button"
                class="btn btn-primary"
                @click="keranjang.jumlah_pesanana--"
              >
                -
              </button>
            </div>
            <input
              type="number"
              v-model="keranjang.jumlah_pesanana"
              class="form-control text-center jumlah-pesanan"
            />
            <div class="input-group-append">
              <button
                class="btn btn-primary"
                @click="keranjang.jumlah_pesanana++"
                type="button"
                id="button-addon2"
              >
                +
              </button>
            </div>
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
.jumlah-pesanan {
  width: 50%;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
textarea {
  min-height: 180px;
}
</style>
