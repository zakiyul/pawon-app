<template>
  <div class="container">
    <nav class="navbar navbar-expand-lg navbar-light">
      <a class="navbar-brand" href="#"><strong>Pawon</strong></a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/foods">Foods</router-link>
          </li>
        </ul>
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/checkout">
              <b-icon icon="cart"></b-icon>
              Checkout
              <span class="badge badge-pill badge-info">0</span>
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>
<style lang="scss" scoped>
nav {
  height: 60px;
  a {
    color: black;
    &:hover {
      text-decoration: none;
    }
    &.router-link-exact-active {
      font-weight: bold;
    }
  }
}
</style>
