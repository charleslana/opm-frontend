<template>
  <nav aria-label="main navigation" class="navbar is-fixed-top" role="navigation">
    <div class="navbar-brand">
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
        <a class="navbar-item navbar-item-custom">Hall Da Fama</a>
        <a class="navbar-item navbar-item-custom">Contato</a>
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
  },
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
</style>