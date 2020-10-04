export default {
  computed: {
    filteredProducts() {
      return this.products.filter((product) => {
        return product.nama.match(this.search);
      });
    },
  },
};
