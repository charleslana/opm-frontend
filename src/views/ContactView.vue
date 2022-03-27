<template>
  <nav-bar-component/>
  <no-bg-component/>
  <footer-component/>
</template>
<script>
import NavBarComponent from "@/components/NavBarComponent";
import FooterComponent from "@/components/FooterComponent";
import NoBgComponent from "@/components/NoBgComponent";

export default {
  components: {NoBgComponent, FooterComponent, NavBarComponent}
}
</script>