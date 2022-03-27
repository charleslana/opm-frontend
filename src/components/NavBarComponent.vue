<template>
  <nav aria-label="main navigation" class="navbar is-fixed-top" role="navigation">
    <div class="navbar-brand">
      <div class="navbar-item">
        <div class="logo"></div>
      </div>
      <a aria-expanded="false" aria-label="menu" class="navbar-burger" data-target="navbarBasicExample" role="button">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <router-link class="navbar-item navbar-item-custom" to="/">Home</router-link>
        <router-link class="navbar-item navbar-item-custom" to="/news">Notícias</router-link>
        <router-link class="navbar-item navbar-item-custom" to="/hall-of-fame">Hall Da Fama</router-link>
        <router-link class="navbar-item navbar-item-custom" to="/contact">Contato</router-link>
      </div>
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <a class="button is-light is-uppercase is-medium js-modal-trigger" data-target="modal-js-example-two">
              <font-awesome-icon :icon="['far', 'user']" class="mr-2"/>
              Login</a>
          </div>
        </div>
      </div>
    </div>
  </nav>
  <div id="modal-js-example-two" class="modal">
    <div class="modal-background"></div>
    <div class="modal-content">
      <div class="box">
        <h1 class="has-text-centered is-size-3">Acessar a conta</h1>
        <form>
          <div class="field">
            <label class="label">E-mail</label>
            <div class="control">
              <input id="login" class="input" placeholder="Digite seu e-mail" required type="email">
            </div>
          </div>
          <div class="field">
            <label class="label">Senha</label>
            <div class="control">
              <input id="loginPassword" class="input" placeholder="Digite sua senha" required type="password">
            </div>
          </div>
          <div class="field">
            <div class="control">
              <button class="button is-info" type="submit">Acessar</button>
            </div>
          </div>
        </form>
      </div>
    </div>
    <button aria-label="close" class="modal-close is-large"></button>
  </div>
</template>

<script>
import {mountModal} from "@/utils/utils";

export default {
  mounted() {
    mountModal();
    this.showBurger();
  },
  methods: {
    showBurger() {
      // Get all "navbar-burger" elements
      const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

      // Check if there are any navbar burgers
      if ($navbarBurgers.length > 0) {

        // Add a click event on each of them
        $navbarBurgers.forEach(el => {
          el.addEventListener('click', () => {

            // Get the target from the "data-target" attribute
            const target = el.dataset.target;
            const $target = document.getElementById(target);

            // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
            el.classList.toggle('is-active');
            $target.classList.toggle('is-active');

          });
        });
      }
    }
  }
}
</script>

<style scoped>
.navbar {
  background-color: rgb(0, 23, 71, 0.8);
}

.navbar-item-custom {
  color: white;
  border-left: 0.1rem solid rgba(255, 255, 255, 0.3);
  text-transform: uppercase;
  letter-spacing: 0.1rem;
}

.navbar-item-custom:hover, .navbar-item:focus {
  filter: brightness(80%);
  background-color: transparent;
  color: white;
  border-bottom: solid 4px var(--main-bg-color);
}

.navbar-start {
  margin-left: auto;
}

.navbar-brand {
  min-height: 5.25rem;
}

.navbar-burger {
  height: 5.25rem;
  color: white;
  background-color: var(--main-bg-color);
}

.navbar-menu {
  background-color: rgb(0, 23, 71, 0.8);
}

.logo {
  background-image: url("../assets/images/logo.png");
  background-repeat: no-repeat;
  background-position: top;
  background-size: contain;
  width: 14rem;
  height: 4.2rem;
}
</style>