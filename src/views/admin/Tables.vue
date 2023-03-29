<template>
  <div>
    <div class="main-content side-content pt-0">
      <div class="side-app">

        <div class="main-container container-fluid">

          <!-- Page Header -->
          <div class="page-header">
            <div>
              <h2 class="main-content-title tx-24 mg-b-5">Edit Tables</h2>
            </div>
          </div>
          <!-- End Page Header -->


          <!-- Row -->
          <div class="row">
            <div class="col-lg-12">
              <div class="card custom-card">
                <div class="card-body">
                  <button class="btn btn-primary mb-4" @click="showModal">Добавить пользователя</button>
                  <div class="table-responsive">
                    <table class="table table-bordered border text-nowrap mb-0" id="new-edit">
                      <thead>
                      <tr>
                        <th>ID</th>
                        <th>Имя</th>
                        <th>Фотография</th>
                        <th>E-mail</th>
                        <th>Дата регистрации</th>
                      </tr>
                      </thead>
                      <tbody>
                        <user-item v-for="item in getUserList2.data" :key="item.id" :item="item"/>
                      </tbody>
                    </table>
                    <button class="btn btn-primary mt-4" @click="loadNext" :disabled="disableButton">Next</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Transition name="fade">
          <div class="modal" v-if="show" @click.stop="closeModal">
            <div @click.stop class="modal__content">
              <button @click="closeModal" class="modal__icon btn__reset">
                <span class="modal-icon__span"></span>
              </button>
             <h3 class="admin-log__title">Создайте нового пользователя</h3>
             <div class="admin-log__content">
               <label class="admin-log__label">
                 <span class="admin-log__span">ФИО</span>
                 <input-reg
                   v-model="register_form.name"
                   type="text"
                   placeholder="Ваше полное имя"
                 ></input-reg>
               </label>
               <main-btn>Загрузите фотографию</main-btn>
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
               <main-btn @click="addNewUser">Создать</main-btn>
             </div>
            </div>
            </div>
          </Transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UserItem from "@/components/admin/Users/UI/UserItem.vue";
import {mapActions, mapGetters} from "vuex";
import MainBtn from "@/components/UI/MainBtn.vue";
export default {
  components: {MainBtn, UserItem},
  data(){
    return {
      params:{
        page:1
      },
      disableButton: false,
      show: false,
      register_form: {
        email: "",
        name: "",
        password: "",
        password_confirm: "",
      },
    }
  },
  computed:{
    ...mapGetters(['getUserList2'])
  },
  methods: {
    ...mapActions(['loadUserList2']),
    loadNext(){
      if(this.params.page === this.getUserList2.meta.last_page){
        this.disableButton = true
        return
      }
      this.params.page +=1;
      this.loadUserList2(this.params)
    },
    showModal() {
      this.show = true;
    },
    closeModal(){
      this.show = false;
    },
    addNewUser() {
      query.post("auth/register", this.register_form, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        }
      }).then((res) => {
        console.log(res.data);
      });
    },
  },
  mounted() {
    this.loadUserList2(this.params)
  },

}
</script>

<style scoped>
.modal {
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
}

.modal__content {
  position: relative;
  margin: auto;
  padding: 30px;
  overflow: auto;
  border-radius: 4px;
  background: #FFFFFF;
  z-index: 1001;
}

.modal__icon {
  position: relative;
  display: block;
  padding-bottom: 30px;
  margin-left: auto;
  --icon-width: 30px;
  --icon-height: 20px;
  --icon-line-height: 2px;
  width: var(--icon-width);
  height: var(--icon-height);
  color: #2A254B;
  transition: 0.3s ease-in-out;
  z-index: 101;
}

.modal__icon:hover {
  --icon-width: 35px;
}

.modal__icon::before,
.modal__icon::after {
  content: "";
  position: absolute;
  left: 0;
  width: 100%;
  height: var(--icon-line-height);
  background-color: currentColor;
  transition: transform 0.3s ease-in-out, top 0.3s ease-in-out;
}

.modal__icon::before {
  transform: rotate(45deg);
  top: 50%;
}

.modal__icon::after {
  transform: rotate(-45deg);
  top: 50%;
}

.modal-icon__span {
  position: absolute;
  right: 0;
  top: 50%;
  transform: scale(0);
  width: 100%;
  height: var(--icon-line-height);
  background-color: currentColor;
  transition: transform 0.3s ease-in-out;
}

@media (max-width: 700px) {
  .modal__content {
    padding: 30px;
  }
}
</style>