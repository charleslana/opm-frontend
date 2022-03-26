<template>
  <nav-bar-component/>
  <div class="home-bg"></div>
  <div class="has-text-centered register-button">
    <button class="button is-light is-large is-uppercase js-modal-trigger" data-target="modal-js-example">
      Cadastre-se
    </button>
  </div>
  <div class="container">
    <h1 class="is-size-3 is-uppercase">Últimas Notícias</h1>
    <div class="columns is-flex-wrap-wrap">
      <div v-for="number of numbers" :key="number" class="column is-half">
        <div class="card">
          <div class="card-image">
            <div class="news-1"></div>
          </div>
          <div class="card-content">
            <div class="content">
              <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
              <br>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. {{ number }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="home-section">
    <div class="container">
      <div class="columns">
        <div class="column is-uppercase has-text-white has-text-centered is-align-self-center">
          <h1 class="is-size-1">Bem vindo ao One Punch Man Game</h1>
          <h2 class="is-size-4">Aventure-se no mundo de One Punch Man</h2>
          <p>One Punch Man Game é um dos mais populares "Browser Games" de One Punch Man.</p>
          <p>No jogo você irá realizar missões, treinar habilidades, equipar itens, batalhar e muito mais.</p>
          <button class="button is-large home-button mt-2 is-uppercase has-text-weight-bold js-modal-trigger"
                  data-target="modal-js-example">Crie sua Conta
          </button>
        </div>
        <div class="column home-register is-hidden-mobile">
        </div>
      </div>
    </div>
  </div>
  <div class="home-section-two">
    <div class="container">
      <div class="columns">
        <div class="column home-character is-hidden-mobile"></div>
        <div class="column is-uppercase has-text-white has-text-centered is-align-self-center">
          <h1 class="is-size-1">Escolha seu Personagem</h1>
          <p>Você é livre para personalizar seu personagem e criar suas próprias combinações de Habilidades, Treinos
            entre outros.</p>
          <button class="button is-large home-button-two mt-2 is-uppercase has-text-weight-bold">Ver todos os
            personagens
          </button>
        </div>
      </div>
    </div>
  </div>
  <div id="modal-js-example" class="modal">
    <div class="modal-background"></div>
    <div class="modal-content">
      <div class="box">
        <h1 class="has-text-centered is-size-3">Inicie sua Aventura</h1>
        <form>
          <div class="field">
            <label class="label">E-mail</label>
            <div class="control">
              <input id="email" class="input" placeholder="Digite um e-mail válido, exemplo: seunome@gmail.com"
                     required type="email">
            </div>
          </div>
          <div class="field">
            <label class="label">Confirmar E-mail</label>
            <div class="control">
              <input id="emailConfirmation" class="input" placeholder="Confirme o e-mail" required type="email">
            </div>
          </div>
          <div class="field">
            <label class="label">Senha</label>
            <div class="control">
              <input id="password" class="input" minlength="6" placeholder="A senha deve conter no mínimo 6 caracteres"
                     required type="password">
            </div>
          </div>
          <div class="field">
            <label class="label">Confirmar Senha</label>
            <div class="control">
              <input id="passwordConfirmation" class="input" minlength="6" placeholder="Confirme a senha"
                     required type="password">
            </div>
          </div>
          <div class="field">
            <div class="control">
              <label class="checkbox">
                <input required type="checkbox">
                Declaro que li e concordo com os <a href="#" target="_blank">termos de uso</a>
              </label>
            </div>
          </div>
          <div class="field">
            <div class="control">
              <button class="button is-info" type="submit">Concluir Cadastro</button>
            </div>
          </div>
        </form>
      </div>
    </div>
    <button aria-label="close" class="modal-close is-large"></button>
  </div>
  <footer-component/>
</template>

<script>
import NavBarComponent from "@/components/NavBarComponent";
import {mountModal} from "@/utils/utils";
import FooterComponent from "@/components/FooterComponent";

export default {
  components: {FooterComponent, NavBarComponent},
  mounted() {
    mountModal();
  },
  data() {
    return {
      numbers: [1, 2, 3, 4, 5]
    }
  },
}
</script>

<style>
.home-bg {
  background-image: url("../assets/images/home/home_bg.jpg");
  background-repeat: no-repeat;
  background-position: right;
  background-size: cover;
  width: 100%;
  height: 95vh;
}

.register-button {
  margin-top: -2rem;
}

.register-button button {
  letter-spacing: 0.2rem;
}

.home-register {
  background-image: url("../assets/images/home/register.png");
  background-repeat: no-repeat;
  background-position: left;
  background-size: cover;
  width: 100%;
  height: 95vh;
}

.home-button {
  color: var(--main-bg-color) !important;
}

.home-section-two {
  background-color: var(--home-bg-section-two);
}

.home-character {
  background-image: url("../assets/images/home/character.png");
  background-repeat: no-repeat;
  background-position: right;
  background-size: cover;
  width: 100%;
  height: 95vh;
}

.home-button-two {
  color: var(--home-bg-section-two) !important;
}
</style>