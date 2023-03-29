<template>
  <div>
    <div class="main-content side-content pt-0">
      <div class="side-app">

        <div class="main-container container-fluid">

          <!-- Page Header -->
          <div class="page-header">
            <div>
              <h2 class="main-content-title tx-24 mg-b-5">Список пользователей</h2>
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
                        <th name="bstable-actions">Actions</th>
                      </tr>
                      </thead>
                      <tbody>
                      <user-item v-for="item in getUserList2.data" :key="item.id" :item="item">
                        <td name="bstable-actions">
                          <div class="btn-list">
                            <button id="bEdit" type="button" class="btn btn-sm btn-primary" @click="openChange(item.id)">
                              <span class="fe fe-edit"> </span>
                            </button>
                            <button id="bDel" type="button" class="btn  btn-sm btn-danger"  @click="deleteUser2(item.id)">
                              <span class="fe fe-trash-2"> </span>
                            </button>
                            <button id="bAcep" type="button" class="btn  btn-sm btn-primary" style="display:none;">
                              <span class="fe fe-check-circle"> </span>
                            </button>
                            <button id="bCanc" type="button" class="btn  btn-sm btn-danger" style="display:none;">
                              <span class="fe fe-x-circle"> </span>
                            </button>
                          </div>
                        </td>
                      </user-item>

                      </tbody>
                    </table>
                    <button class="btn btn-primary mt-4" @click="loadNext" :disabled="disableButton">Next</button>
                    <button :class="['btn btn-primary', 'mt-4', 'prev__btn',{
                                    'btn__show': prevBtn
                                    }
                                  ]"
                            @click="loadPrev">
                      Prev</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Transition name="fade">
          <form @submit.prevent="addNewUser" action="#" enctype="multipart/form-data" class="modal" v-if="show" @click.stop="closeModal">
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
                <label class="admin-log__label">
                  <span class="admin-log__span">Загрузите фото</span>
                  <input
                      @change="register_form.photo = $event.target.files[0]"
                      type="file"
                  >
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
                <label class="admin-log__label">
                  <span class="admin-log__span">Добавить роль</span>
                  <select name="roles" id="roles" v-model="register_form.role_id">
                    <option v-for="item in getRoles" :key="item.id" :value="item.id">
                      {{item.name}}
                    </option>
                  </select>
                </label>
                <main-btn @click="addNewUser" type="submit">Создать</main-btn>
              </div>
            </div>
          </form>
          </Transition>
          <form @submit.prevent="changeNewUser" action="#" enctype="multipart/form-data" class="modal" v-if="showChange" @click.stop="closeChange">
            <div @click.stop class="modal__content">
              <button @click="closeChange" class="modal__icon btn__reset">
                <span class="modal-icon__span"></span>
              </button>
              <h3 class="admin-log__title">Изменение пользователя</h3>
              <div class="admin-log__content">
                <label class="admin-log__label">
                  <span class="admin-log__span">Измените ФИО</span>
                  <input-reg
                      v-model="targetUser.name"
                      :value="targetUser.name"
                      type="text"
                      placeholder="Ваше полное имя"
                  ></input-reg>
                </label>
                <label class="admin-log__label">
                  <span class="admin-log__span">Измените фото</span>
                  <input
                      @change="targetUser.photo = $event.target.files[0]"
                      type="file"
                  >
                </label>
                <label class="admin-log__label">
                  <span class="admin-log__span">Измените email</span>
                  <input-reg
                      type="email"
                      disabled="disabled"
                      v-model="targetUser.email"
                      :value="targetUser.email"
                      placeholder="Ваш рабочий адрес электронной почты"
                  ></input-reg>
                </label>
                <label class="admin-log__label">
                  <span class="admin-log__span">Оставьте поле пустым если не нужно менять пароль</span>
                  <input-reg
                      type="password"
                      v-model="targetUser.password"
                      :value="targetUser.password"
                      placeholder="Ваш новый пароль"
                  ></input-reg>
                </label>
                <label class="admin-log__label">
                  <span class="admin-log__span">Повторите пароль</span>
                  <input-reg
                      v-model="targetUser.password_confirm"
                      :value="targetUser.password_confirm"
                      type="password"
                      placeholder="Повторите ваш новый пароль"
                  ></input-reg>
                </label>
                <label class="admin-log__label">
                  <span class="admin-log__span">Измените роль</span>
                  <select class="admin-log__select" name="roles" id="roles" v-model="targetUser.role.id" :value="targetUser.role.id">
                    <option v-for="item in getRoles" :key="item.id" :value="item.id">
                      {{item.name}}
                    </option>
                  </select>
                </label>
                <main-btn @click="changeNewUser" type="submit">Редактировать</main-btn>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    </div>
</template>

<script>
import UserItem from "@/components/admin/Users/UI/UserItem.vue";
import {mapActions, mapGetters} from "vuex";
import MainBtn from "@/components/UI/MainBtn.vue";
import axios from "@/axios";
export default {
  components: {MainBtn, UserItem},
  data(){
    return {
      targetUser:{},
      targetUserid: -1,

      params:{
        page:1
      },
      disableButton: false,
      show: false,
      showChange: false,
      register_form: {
        photo:"",
        email: "",
        name: "",
        password: "",
        password_confirm: "",
        role_id: ""
      },
      prevBtn: false,
    }
  },
  computed:{
    ...mapGetters(['getUserList2', 'getRoles', 'getChangeUsers'])
  },
  methods: {
    ...mapActions(['loadUserList2', 'loadRoles', 'changeUserList', 'deleteUser']),
    loadNext(){
      if(this.params.page === this.getUserList2.meta.last_page){
        this.disableButton = true
        return
      }
      if(this.params.page >= 1){
        this.prevBtn = true;
      }
      this.params.page +=1;
      this.loadUserList2(this.params)
    },
    loadPrev(){
      if (this.params.page !== 1){
        this.params.page -=1;
        this.loadUserList2(this.params)
      }
      if (this.params.page == 1){
        this.prevBtn = false
      }
    },
    showModal() {
      this.show = true;
    },
    closeModal(){
      this.show = false;
    },
    addNewUser(){
      let fd = new FormData();
      fd.append('photo', this.register_form.photo);
      fd.append('name', this.register_form.name);
      fd.append('email', this.register_form.email);
      fd.append('password', this.register_form.password);
      fd.append('password_confirm', this.register_form.password_confirm);
      fd.append('role', this.register_form.role_id);
      this.show = false;
      axios.post("auth/register", fd, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        }
      }).then((res) => {
        this.loadUserList2({page:1})
      });
    },
    openChange(id){
      this.targetUserid = id;
      console.log(this.getUserList2)
      this.targetUser = this.getUserList2.data.filter(e=> {
        return e.id=== id;
      })[0]
      this.showChange = true;
    },
    closeChange(){
      this.showChange = false;
    },
    changeNewUser() {
      let fd = new FormData();
      fd.append('id', this.targetUser.id);
      fd.append('photo', this.targetUser.photo);
      fd.append('email', this.targetUser.email);
      fd.append('name', this.targetUser.name);
      if(this.targetUser.password){
        fd.append('password', this.targetUser.password);
        fd.append('password_confirm', this.targetUser.password_confirm);
      }
      fd.append('role', this.targetUser.role.id);
      this.showChange = false;
      axios.post("change-user", fd, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        }
      }).then((res) => {
        console.log(res.data);
      });
    },
    deleteUser2(id){
      this.deleteUser(id);
    },
  },
  mounted() {
    this.loadUserList2(this.params);
    this.loadRoles();
  },

}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
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

.prev__btn{
  display: none;
}

.admin-log__select {
  padding: 11px 16px;
  background: #ffffff;
  border: 1px solid #d7dadd;
  border-radius: 4px;

  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  color: #424551;
}

.admin-log__select:focus {
  border: 1px solid rgba(0, 69, 131);
  outline: 0;
}

.btn__show {
  display: block;
}

@media (max-width: 700px) {
  .modal__content {
    padding: 30px;
  }
}
</style>