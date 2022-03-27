<template>
  <section class="featured-section">
    <h1 class="featured-title is-uppercase is-size-3 is-italic">
      <font-awesome-icon :icon="['fas', icon]" class="mr-2"/>
      {{ title }}
    </h1>
    <div class="featured-border">
      <div class="columns">
        <div class="column">
          <p>{{ description }}</p>
        </div>
        <div class="column is-hidden-mobile">
          <div class="featured-bg"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    icon: String,
    title: String,
    description: String,
  },
}
</script>

<style>
.featured-section {
  margin-top: -4rem;
}

.featured-section p {
  font-family: Tahoama, serif !important;
}

.featured-title {
  background-image: linear-gradient(
      90deg, #af4417 0%, #ee7221 63%, rgba(238, 114, 33, 0) 100%);
  padding: calc(8px) calc(8px * 3);
  border-radius: 40px 0 0 0;
  color: white;
}

.featured-border {
  border: solid white;
  border-width: 60px 64px 82px 88px;
  border-image-source: url("../assets/images/featured/border_orange.png");
  border-image-slice: 120 128 164 176 fill;
  border-image-outset: 26px;
  position: relative;
}

.featured-bg {
  background-image: url("../assets/images/featured/bg.png");
  background-repeat: no-repeat;
  background-position: top;
  background-size: cover;
  width: 240px;
  height: 269px;
  position: absolute;
  top: -9rem;
  right: 0;
}
</style>