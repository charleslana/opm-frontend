<template>
  <nav-bar-component/>
  <no-bg-component/>
  <div class="container">
    <featured-content-component description="Veja os melhores jogadores atuais no game" icon="trophy"
                                title="Hall da Fama"/>
    <h1 class="is-size-3 mt-2 mb-2">Filtros do Ranking</h1>
    <form>
      <div class="field is-grouped">
        <div class="control">
          <div class="select">
            <select id="selectFilter" required>
              <option disabled selected>Selecione o tipo</option>
              <option value="1">Mecânico</option>
              <option value="2">Armado</option>
              <option value="3">Desarmado</option>
              <option value="4">Psíquico</option>
            </select>
          </div>
        </div>
        <p class="control">
          <a id="filterButton" class="button is-info">
            Filtrar
          </a>
        </p>
      </div>
    </form>
    <div class="table-responsive">
      <table aria-describedby="hall-of-fame" class="table is-fullwidth is-striped mt-5 mb-5">
        <thead>
        <tr>
          <th id="pos">Posição</th>
          <th id="name">Nome</th>
          <th id="level">Nível</th>
          <th id="score">Pontos</th>
          <th id="character">Personagem</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="number of numbers" :key="number">
          <td class="is-size-4">{{ number }}º</td>
          <td>Charles</td>
          <td>1</td>
          <td>1.000</td>
          <td>
            <div class="character-bg">
              <div class="character-portrait-1"></div>
            </div>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
  <footer-component/>
</template>
<script>
import NavBarComponent from "@/components/NavBarComponent";
import FooterComponent from "@/components/FooterComponent";
import NoBgComponent from "@/components/NoBgComponent";
import FeaturedContentComponent from "@/components/FeaturedContentComponent";

export default {
  components: {FeaturedContentComponent, NoBgComponent, FooterComponent, NavBarComponent},
  data() {
    return {
      numbers: [1, 2, 3, 4, 5]
    }
  }
}
</script>