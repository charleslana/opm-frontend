import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import 'bulma/css/bulma.css';
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faUser} from '@fortawesome/free-regular-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faTrophy} from '@fortawesome/free-solid-svg-icons';

library.add(faUser, faGithub, faTrophy);

createApp(App).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app');
