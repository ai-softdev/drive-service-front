import { createApp } from "vue";
import App from "./App.vue";
import AOS from 'aos';
import VueNumber from "vue-number-animation";
import router from "./router";
// import './style.css';
import 'aos/dist/aos.css';
import Header from "@/components/Header.vue";
import Modal from "@/components/UI/Modal.vue";
import InputReg from "@/components/UI/InputRegular.vue";
import MainBtn from "@/components/UI/MainBtn.vue";
import AboutBlock from "@/components/UI/AboutBlock.vue";
import AccordionItem from "@/components/UI/AccordionItem.vue";
import pusher from "@/pusher/pusher";
import store from './store'



const app = createApp(App);

app
  .component("Header", Header)
  .component("Modal", Modal)
  .component("input-reg", InputReg)
  .component("main-btn", MainBtn)
  .component("about-block", AboutBlock)
  .component("accordion-item", AccordionItem);

app.use(VueNumber);
app.use(router);
app.use(store);
app.use(pusher, { apiKey: '2f59a44c3bc2b39ac98a',    forceTLS: false,
    wsPort: 6001,
    cluster: "eu",
    wsHost: "213.230.127.93",
    authEndpoint: "http://213.230.127.93:9988/broadcasting/auth",
    auth: {
        headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
        },
    },
    userAuthentication: {
        endpoint: "http://213.230.127.93:9988/api/v1/current-user",
        headers: {
            Accept: "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
        },
    },
})
AOS.init()
app.mount("#app");
