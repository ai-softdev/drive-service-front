<template>
  <header class="header">
    <div class="container">
      <div class="header__inner">
        <a class="logo" href="#hero">COMFORT MIKRO DRIVE SERVICE</a>
        <nav :class="['header__nav', {
'header__nav--active': isActive
}]">
          <a
              class="header-nav__item"
              v-for="(element, i) of menu"
              :key="i"
              :href="element.path"
              @click="menuClose"
          >
            <i :class="['header-nav__icon', element.icon]"></i>
            <span class="header-nav__span">
{{ element.name }}
</span>
          </a>
          <button class="header-admin__login btn__reset main__btn btn__reset main-btn__second" @click="showLogin">
            Вход
          </button>
        </nav>
        <div
            :class="['header__overlay', {
'header__overlay--active': isActive
}]"
            @click="menuClose"
        ></div>
        <button
            v-if="isAuth2()"
            class="header-admin__login btn__reset main__btn main-btn__first"
            @click="router().push({name:'admin-dashboard'})">
          Админ
        </button>

        <button
            v-else
            class="header-admin__login btn__reset main__btn main-btn__first" @click="showLogin">
          Вход
        </button>
        <button
            :class="['burger', 'btn__reset', {
'burger--active': isActive
}]"
            @click="openMenu"
        >
          <span class="burger__line"></span>
        </button>
        <!-- <div class="header__admin">
        <main-btn @click="showSign">Регистрация</main-btn>
        </div> -->
        <Transition name="fade">
          <Modal v-model:show="loginVisible">
            <h3 class="admin-log__title">Вход</h3>
            <p class="admin-log__subtitle">
              Войдите в свою учетную запись, используя адрес электронной почты и
              пароль, указанные при регистрации.
            </p>
            <div class="admin-log__content">
              <label class="admin-log__label">
                <span class="admin-log__span">Email</span>
                <input-reg
                    v-model="autoriz_form.email"
                    type="email"
                    placeholder="Ваш рабочий адрес электронной почты"
                ></input-reg>
              </label>
              <label class="admin-log__label">
                <span class="admin-log__span">Пароль</span>
                <input-reg
                    v-model="autoriz_form.password"
                    type="password"
                    placeholder="Ваш пароль"
                ></input-reg>
              </label>

              <main-btn @click="autorization">Войти</main-btn>
            </div>
          </Modal>
        </Transition>

        <!-- <Modal v-model:show="signVisible">
        <h3 class="admin-log__title">Регистрация</h3>
        <p class="admin-log__subtitle">Регистрация занимает меньше минуты.</p>
        <div class="admin-log__content">
        <label class="admin-log__label">
        <span class="admin-log__span">ФИО</span>
        <input-reg
        v-model="register_form.name"
        type="text"
        placeholder="Ваше полное имя"
        ></input-reg>
        </label>
        <label class="admin-log__label">
        <span class="admin-log__span">Email</span>
        <input-reg
        type="email"
        v-model="register_form.email"
        placeholder="Ваш рабочий адрес электронной почты"
        ></input-reg>
        </label>
        <label class="admin-log__label">
        <span class="admin-log__span">Пароль</span>
        <input-reg
        type="password"
        v-model="register_form.password"
        placeholder="Ваш пароль"
        ></input-reg>
        </label>
        <label class="admin-log__label">
        <span class="admin-log__span">Повторите пароль</span>
        <input-reg
        v-model="register_form.password_confirm"
        type="password"
        placeholder="Повторите ваш пароль"
        ></input-reg>
        </label>
        <main-btn @click="register">Зарегистрироваться</main-btn>
        </div>
        </Modal> -->
      </div>
    </div>
  </header>
</template>
<script>
import query from "../axios";
import router from "@/router";
import {mapGetters, mapActions} from "vuex";

export default {
  data() {
    return {
      register_form: {
        email: "",
        name: "",
        password: "",
        password_confirm: "",
      },
      autoriz_form: {
        email: "",
        password: "",
      },
      loginVisible: false,
      signVisible: false,
      isActive: false,
      menu: [
        {
          name: "Главная",
          path: "#hero",
          icon: "fa fa-desktop"
        },
        {
          name: "О нас",
          path: "#about",
          icon: "fa fa-drivers-license-o"
        },
        {
          name: "Опыт",
          path: "#experience",
          icon: "fa fa-taxi"
        },
        {
          name: "Инфо",
          path: "#info",
          icon: "fa fa-eye"
        },
        {
          name: "FAQ",
          path: "#faq",
          icon: "fa fa-cogs"
        },
        {
          name: "Связь",
          path: "#contact",
          icon: "fa fa-comments-o"
        },
      ],
    };
  },
  computed: {
    ...mapGetters(['isAuth'])
  },
  methods: {
    ...mapActions(['loadCurrentUser', 'logIn']),
    router() {
      return router
    },
    showLogin() {
      this.loginVisible = true;
      if (this.isActive) {
        this.isActive = !this.isActive;
        document.body.classList.remove("body__fixed");
      }
    },
    isAuth2() {
      return !(localStorage.getItem('token') === null) && this.isAuth
    },
// showSign() {
//   this.signVisible = true;
// },
    openMenu() {
      this.isActive = !this.isActive;
      document.body.classList.toggle("body__fixed");
    },
// register() {
//   query.post("auth/register", this.register_form).then((res) => {
//     console.log(res.data);
//   });
// },
    menuClose() {
      if (this.isActive) {
        this.isActive = !this.isActive;
      }
      document.body.classList.remove("body__fixed");
    },
    autorization() {
      this.logIn(this.autoriz_form);
    },
  },
};
</script>
<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.body__fixed {
  position: fixed;
}

.header {
  padding: 20px 0;
}

.header__inner {
  position: relative;
  display: flex;
  align-items: center;
}

.logo {
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 47px;
  text-transform: capitalize;
  color: #334151;
}

.header__nav {
  display: flex;
  align-items: center;
  gap: 40px;
  margin-left: auto;
}

.header-nav__item {
  position: relative;
  display: flex;
  align-items: center;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  text-transform: capitalize;
  color: #334151;
  transition: 0.3s ease-in-out;
}


.header-nav__item::after {
  content: "";
  position: absolute;
  bottom: 0;
  display: block;
  width: 0;
  height: 2px;
  background-color: #8760fb;
  transition: 0.3s ease-in-out;
}

.header-nav__icon {
  display: none;
  margin-right: 10px;
  color: #334151;
  transition: 0.3s ease-in-out;
}

.header-nav__span {
  transition: 0.3s ease-in-out;
}

.header-nav__item:hover .header-nav__span {
  color: #8760fb;
}

.header-nav__item:hover .header-nav__icon {
  color: #8760fb;
}

.header-nav__item:hover::after {
  width: 100%;
}

/* .header__admin {
display: flex;
align-items: center;
gap: 34px;
margin-left: 100px;
} */

.header-admin__login {
  display: block;
  margin-left: 100px;
  max-width: 100px;
  width: 100%;
}

.header-admin__login:hover {
  color: #FFFFFF;
}

.admin-log__title {
  text-align: center;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 150%;
  color: #1e212c;
  margin-bottom: 24px;
}

.admin-log__subtitle {
  text-align: center;
  max-width: 390px;
  margin: 0 auto;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  margin-bottom: 24px;
  color: #787a80;
}

.admin-log__content {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.admin-log__label {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.admin-log__span {
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  color: #424551;
}

.main__btn {
  padding: 10px;
  border: 2px solid #004583;
  border-radius: 3px;

  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  color: #004583;

  transition: 0.3s ease-in;
}

.main__btn:hover {
  background-color: #004583;
  color: #FFFFFF;
}

.main-btn__second {
  display: none;
}

@media (max-width: 1024px) {
  .header__inner {
    justify-content: space-between;
  }

  .main-btn__first {
    display: none;
  }

  .main-btn__second {
    display: block;
    margin-left: initial;
  }

  /* burger */
  .burger {
    --burger-width: 30px;
    --burger-height: 20px;
    --burger-line-height: 2px;
    width: var(--burger-width);
    height: var(--burger-height);
    position: relative;
    color: #2A254B;
    transition: 0.3s ease-in-out;
    z-index: 101;
  }

  .burger:hover {
    --burger-width: 35px;
  }

  .burger__line {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
    height: var(--burger-line-height);
    background-color: currentColor;
    transition: transform 0.3s ease-in-out;
  }

  .burger::before,
  .burger::after {
    content: "";
    position: absolute;
    left: 0;
    width: 100%;
    height: var(--burger-line-height);
    background-color: currentColor;
    transition: transform 0.3s ease-in-out, top 0.3s ease-in-out;
  }

  .burger::before {
    top: 0;
  }

  .burger::after {
    top: calc(100% - var(--burger-line-height));
  }

  .burger--active .burger__line {
    transform: scale(0);
  }

  .burger--active::before {
    transform: rotate(45deg);
    top: 50%;
  }

  .burger--active::after {
    transform: rotate(-45deg);
    top: 50%;
  }

  .burger:hover {
    color: #22202E;
  }

  .header__nav {
    position: fixed;
    display: block;
    overflow: auto;
    width: 80%;
    padding: 60px 40px 0 20px;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: #FFFFFF;
    transform: translateX(200%);
    transition: 0.3s ease-in-out;
    z-index: 100;
  }

  .header__nav--active {
    transform: translateX(0);
  }

  .header-nav__item {
    margin-bottom: 30px;
  }

  .header-nav__item:hover .header-nav__span {
    padding-left: 10px;
  }

  .header-nav__item::after {
    display: none;
  }

  .header-nav__icon {
    display: block;
  }

  .header__overlay {
    position: fixed;
    background-color: rgba(0, 0, 0, 0);
    transition: 0.3s ease-in-out;
    z-index: 99;
  }

  .header__overlay--active {
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
  }

}

@media (max-width: 568px) {
  .logo {
    font-size: 15px;
  }
}
</style>