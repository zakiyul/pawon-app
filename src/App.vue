<template>
  <div id="app">
    <!-- <vue-page-transition name="fade"> -->
    <Navbar />
    <!-- </vue-page-transition> -->
    <div class="container">
      <vue-page-transition name="fade-in-up">
        <router-view />
      </vue-page-transition>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style lang="scss"></style>
