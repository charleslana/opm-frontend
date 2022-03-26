<template>
  <footer class="footer">
    <div class="content has-text-centered is-uppercase">
      <p>Fique conectado</p>
      <div class="columns">
        <div class="column">
          <a class="has-text-white-bis" href="#" target="_blank">
            <font-awesome-icon :icon="['fab', 'github']" size="2x"/>
          </a>
        </div>
      </div>
      <p>
        © {{ new Date().getFullYear() }} One Punch Game - Todos os direitos reservados
      </p>
      <p>One Punch Man by One and Yusuke Murata, All Rights Reserved.</p>
      <a class="has-text-white" href="#" target="_blank">Termos de Uso</a>
    </div>
  </footer>
</template>