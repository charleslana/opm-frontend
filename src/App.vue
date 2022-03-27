<template>
  <router-view/>
</template>

<style>
@import "assets/css/characters.css";

:root {
  --main-bg-color: #fc8834;
  --home-bg-section-two: #5b8c79;
}

@font-face {
  font-family: "Phagspab";
  src: local("Phagspab"),
  url("./assets/fonts/phagspab.ttf") format("truetype");
}

@font-face {
  font-family: "Tahoama";
  src: local("Tahoama"),
  url("./assets/fonts/tahoma_regular.ttf") format("truetype");
}

#app {
  font-family: "Phagspab", sans-serif;
  overflow-wrap: break-word;
  -webkit-tap-highlight-color: transparent;
}

.button.is-light {
  background-color: var(--main-bg-color) !important;
  color: white !important;
}

.button.is-light:hover {
  filter: brightness(90%) !important;
  background-color: var(--main-bg-color) !important;
  color: white !important;
}

.news-1 {
  background-image: url("./assets/images/news/1.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 200px;
}

.columns {
  margin: 0 !important;
}

.home-section {
  background-color: var(--main-bg-color);
}

.footer {
  background-color: #0d0f1d !important;
  color: white !important;
}

.button {
  white-space: break-spaces !important;
}

.table-responsive {
  overflow-x: auto;
}

td {
  vertical-align: middle !important;
}
</style>
