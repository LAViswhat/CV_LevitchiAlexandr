import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import {
  faMapLocationDot,
  faPhoneVolume,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

import {
  faTelegram,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

/* add icons to the library */
library.add(
  faMapLocationDot,
  faPhoneVolume,
  faEnvelope,
  faTelegram,
  faGithub,
  faLinkedin
);

const app = createApp(App);

app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
