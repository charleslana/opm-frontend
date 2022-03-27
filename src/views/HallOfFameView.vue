<template>
  <nav-bar-component/>
  <no-bg-component/>
  <div class="container">
    <featured-content-component description="Veja os melhores jogadores atuais no game" icon="trophy"
                                title="Hall da Fama"/>
    <h1 class="is-size-3">Filtros do Ranking</h1>
  </div>
  <footer-component/>
</template>
<script>
import NavBarComponent from "@/components/NavBarComponent";
import FooterComponent from "@/components/FooterComponent";
import NoBgComponent from "@/components/NoBgComponent";
import FeaturedContentComponent from "@/components/FeaturedContentComponent";

export default {
  components: {FeaturedContentComponent, NoBgComponent, FooterComponent, NavBarComponent}
}
</script>