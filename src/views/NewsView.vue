<template>
  <nav-bar-component/>
  <no-bg-component/>
  <footer-component/>
</template>
<script>
import NavBarComponent from "@/components/NavBarComponent";
import NoBgComponent from "@/components/NoBgComponent";
import FooterComponent from "@/components/FooterComponent";

export default {
  components: {FooterComponent, NoBgComponent, NavBarComponent}
}
</script>