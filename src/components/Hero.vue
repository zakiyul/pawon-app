<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <div class="d-flex h-100">
          <div class="justify-content-center align-self-center">
            <h1>
              <strong>{{ strongTitle }}</strong> <br />
              {{ title }}
            </h1>
            <p>{{ note }}</p>
            <router-link to="/favorite" class="btn btn-success shadow-sm"
              ><b-icon icon="arrow-right"></b-icon> {{ btnTitle }}</router-link
            >
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <img class="img-fluid" :src="img" alt="hero gambar" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["strongTitle", "title", "note", "btnTitle", "img"],
};
</script>

<style></style>
