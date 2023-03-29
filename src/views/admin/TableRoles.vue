<template>
  <div>
    <div class="main-content side-content pt-0">
      <div class="side-app">

        <div class="main-container container-fluid">

          <!-- Page Header -->
          <div class="page-header">
            <div>
              <h2 class="main-content-title tx-24 mg-b-5">Список ролей</h2>
            </div>
          </div>
          <!-- End Page Header -->


          <!-- Row -->
          <div class="row">
            <div class="col-lg-12">
              <div class="card custom-card">
                <div class="card-body">
                  <button class="btn btn-primary mb-4" @click="showModal">Добавить роль</button>
                  <div class="table-responsive">
                      <p class="table__name">Название</p>
                    <role-item @click="openRoleInfo(item.id); currentRole = item.id" v-for="item in getRoles" :key="item.id" :item="item">
                      <button v-if="can('role.edit')" @click="openNameRole(item.id); targetRole = item" @click.stop="closeRoleInfo" id="bEdit" type="button" class="btn__role btn btn-sm btn-primary"><span class="fe fe-edit"></span></button>
                      <button v-if="can('role.delete')"  @click="deleteRole2(item.id)" @click.stop="closeRoleInfo" id="bDel" type="button" class="btn__role btn btn-sm btn-danger"><span class="fe fe-trash-2"></span></button>
                    </role-item>
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
              <h3 class="admin-log__title">Добавьте роль</h3>
              <div class="admin-log__content">
                <label class="admin-log__label">
                  <span class="admin-log__span">Название роли</span>
                  <input-reg
                      v-model="name"
                      type="text"
                      placeholder="Напишите название новой роли"
                  ></input-reg>
                </label>
                <main-btn @click="addRole">Создать</main-btn>
              </div>
            </div>
          </div>
          </Transition>
          <Transition name="fade">
          <div class="modal" v-if="showNameRole" @click.stop="showNameRole = false">
            <div @click.stop class="modal__content">
              <button @click="showNameRole = false" class="modal__icon btn__reset">
                <span class="modal-icon__span"></span>
              </button>
              <h3 class="admin-log__title">Изменение роли</h3>
              <div class="admin-log__content">
                <label class="admin-log__label">
                  <span class="admin-log__span">Название роли</span>
                  <input-reg
                      v-model="targetRole.name"
                      type="text"
                      placeholder="Напишите название новой роли"
                  ></input-reg>
                </label>
                <main-btn @click="changeRole">Сохранить изменения</main-btn>
              </div>
            </div>
          </div>
          </Transition>
          <Transition name="fade">
          <div class="modal" v-if="showRoleInfo" @click.stop="closeRoleInfo">
            <div @click.stop class="modal__content">
              <button @click="closeRoleInfo" class="modal__icon btn__reset">
                <span class="modal-icon__span"></span>
              </button>
              <h3 class="admin-log__title">Изменить разрешения роли</h3>
              <div class="admin-log__content">
                <checkbox v-for="item in getRolePermis" :key="item.id" :item="item"/>
                <main-btn @click="addRoleIfo">Сохранить изменения</main-btn>
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
import RoleItem from "@/components/admin/Users/UI/RoleItem.vue";
import {mapActions, mapGetters} from "vuex";
import MainBtn from "@/components/UI/MainBtn.vue";
import Checkbox from "@/components/admin/Users/UI/checkbox.vue";
export default {
  components: {Checkbox, MainBtn, RoleItem},
  data(){
    return {
      show: false,
      showRoleInfo: false,
      showNameRole: false,
      name: "",
      currentRole:-1,
      targetRole: {},
    }
  },
  computed:{
    ...mapGetters(['getRoles', 'getPermissions', 'getRolePermis', 'getCurrentUser'])
  },
  methods: {
    ...mapActions(['loadRoles', 'addNewRole', 'loadRolePermis', 'changeRolePermis', 'deleteRole', 'changeRoleName']),
    can(item){
      let temp = false;
      this.getCurrentUser?.permissions?.forEach(e=>{
        if(e.name === 'all')
          temp=true
        if(e.name === item)
          temp = true
      });
      return true;
    },
    showModal() {
      this.show = true;
    },
    closeModal(){
      this.show = false;
    },
    openRoleInfo(id){
      this.showRoleInfo = true;
      this.loadRolePermis({id:id})
    },
    closeRoleInfo(){
      this.showRoleInfo = false;
    },
    openNameRole(){
      this.showNameRole = true;
    },
    closeNameRole(){
      this.showNameRole = false;
    },
    addRole(){
      this.addNewRole(this.name)
      this.show= false;
      },
    addRoleIfo(){
      let params = {
        role_id:this.currentRole,
        permissions:this.getRolePermis
      }
      this.changeRolePermis(params)
      // this.changeRolePermis()
    },
    deleteRole2(id){
      this.deleteRole(id);
    },
    changeRole(id){
      let params = {
        id:this.targetRole.id,
        name:this.targetRole.name,
      }
      this.changeRoleName(params)
      this.showNameRole = false;
    }
  },

  mounted() {
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

.table__name {
  color: #334151;
  font-weight: 700;
  font-size: 16px;
  letter-spacing: 0.5px;
  text-transform: uppercase
}

.btn__role:first-child {
  margin-left: auto;
  margin-right: 10px;
}

@media (max-width: 700px) {
  .modal__content {
    padding: 30px;
  }
}
</style>