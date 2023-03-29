<template>
  <div class="main-content side-content pt-0">
    <div class="side-app">

      <div class="main-container container-fluid">

        <!-- Page Header -->
        <div class="page-header">
          <div>
            <h2 class="main-content-title tx-24 mg-b-5">Список задач</h2>
            <div class="tasks__btns">
              <label class="rdiobox" @click="showAll" v-if="can('task.read')">
                <input name="rdio" type="radio" checked>
                <span>Все</span>
              </label>
              <label class="rdiobox" @click="showToMe">
                <input name="rdio" type="radio">
                <span>Для меня</span>
              </label>
              <label class="rdiobox" @click="showFromMe">
                <input name="rdio" type="radio">
                <span>Мои</span>
              </label>
            </div>
          </div>
        </div>
        <!-- End Page Header -->

        <!-- Row -->
        <div class="row">
          <div class="col-lg-12">
            <div class="card custom-card">
              <div class="card-body">
                <div class="table-responsive">
                  <table class="table table-bordered border text-nowrap mb-0" id="new-edit">
                    <thead>
                    <tr>
                      <th>Кто выдал</th>
                      <th>Название</th>
                      <th>Описание</th>
                      <th>Файл</th>
                      <th>Статус</th>
                      <th>Выдано</th>
                      <th>Дедлайн</th>
                    </tr>
                    </thead>
                    <tbody>

                      <task-item v-if="showTasksAll" v-for="item in getTasksAll.data" :key="item.id" :item="item"/>
                      <task-item v-if="showTasksToMe" v-for="item in getTasksToMe.data" :key="item.id" :item="item"/>
                      <task-item v-if="showTasksFromMe" v-for="item in getTasksFromMe.data" :key="item.id" :item="item">
                        <button @click="deleteTask2(item.id)" id="bDel" type="button" class="btn task__btn btn-sm btn-danger">
                          <span class="fe fe-trash-2"></span>
                        </button>
                      </task-item>
                    </tbody>
                  </table>
                  <div class="tasks-table__btns" v-if="showTasksAll">
                    <button class="btn btn-primary mt-4 prev__btn" @click="loadAllPrev"  :disabled="disableAllPrev">Назад</button>
                    <button class="btn btn-primary mt-4" @click="loadAllNext" :disabled="disableAllButton">Вперед</button>
                  </div>
                  <div class="tasks-table__btns" v-if="showTasksToMe">
                    <button class="btn btn-primary mt-4 prev__btn" @click="loadPrev"  :disabled="disablePrev">Назад</button>
                    <button class="btn btn-primary mt-4" @click="loadNext" :disabled="disableButton">Вперед</button>
                  </div>
                  <div class="tasks-table__btns" v-if="showTasksFromMe">
                    <button class="btn btn-primary mt-4 prev__btn" @click="loadFromPrev"  :disabled="disableFromPrev">Назад</button>
                    <button class="btn btn-primary mt-4" @click="loadFromNext" :disabled="disableFromButton">Вперед</button>
                  </div>
                  <div class="tasks__btns" v-if="can('task.create')">
                    <button v-if="showTasksFromMe" @click="openAddModal" class="btn btn-success mg-t-5">Добавить задачу</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <form @submit.prevent="addMyTask" action="#" enctype="multipart/form-data" class="modal" v-if="showAddModal" @click.stop="closeAddModal">
        <div @click.stop class="modal__content">
          <button @click="closeAddModal" class="modal__icon btn__reset">
            <span class="modal-icon__span"></span>
          </button>
          <h3 class="admin-log__title">Создайте новую задачу</h3>
          <div class="admin-log__content">
            <label class="admin-log__label">
              <span class="admin-log__span">Название</span>
              <input-reg
                  v-model="task_form.title"
                  type="text"
                  placeholder="Название новой задачи"
              ></input-reg>
            </label>
            <label class="admin-log__label">
              <span class="admin-log__span">Описание</span>
              <input-reg
                  v-model="task_form.description"
                  type="text"
                  placeholder="Описание новой задачи"
              ></input-reg>
            </label>
            <label class="admin-log__label">
              <span class="admin-log__span">Прикрепите файл</span>
                 <input
                     @change="task_form.file = $event.target.files[0]"
                     type="file"
                 >
            </label>
            <label class="admin-log__label">
              <span class="admin-log__span">Дедлайн</span>
              <input-reg
                  v-model="task_form.deadline"
                  type="date"
                  placeholder="Выберите дедлайн"
              ></input-reg>
            </label>
            <label class="admin-log__label">
              <span class="admin-log__span">Для кого</span>
              <select class="admin-log__select" name="roles" id="roles" v-model="task_form.to_user">
                <option v-for="item in getUserList2.data" :key="item.id" :value="item.id">
                  {{item.name}}
                </option>
              </select>
            </label>
            <main-btn @click="addMyTask" type="submit">Создать</main-btn>
          </div>
        </div>
      </form>

    </div>
    <!-- End Main Content-->

  </div>
</template>

<script>
import TaskItem from "@/views/admin/TaskItem.vue";
import {mapGetters, mapActions} from "vuex";
import axios from "@/axios";

export default {
  name: "Tasks",
  data(){
    return {
      task_form: {
        title:"",
        description: "",
        file: "",
        deadline: "",
        to_user: "",
      },
      disableAllPrev: false,
      disableAllButton: false,
      disablePrev: false,
      disableButton: false,
      disableFromPrev: false,
      disableFromButton: false,
      params:{
        page:1,
        limit:10,
      },
      pages: "",
      active: false,
      showTasksAll: true,
      showTasksToMe: false,
      showTasksFromMe: false,
      showAddModal: false,
    }
  },
  components: {TaskItem},
  computed: {
    ...mapGetters(['getTasksAll', 'getTasksToMe', 'getTasksFromMe', 'getTasksFromMe', 'getUserList2', 'getCurrentUser']),
    // this.pages = Meth.ceil()
  },
  methods: {
    ...mapActions(['loadTasksAll', 'loadTasksToMe', 'loadTasksFromMe', 'loadTasksFromMe', 'addNewTask', 'loadUserList2', 'deleteTask']),
    showAll(){
      this.showTasksAll = true;
      this.showTasksToMe = false;
      this.showTasksFromMe = false;
    },
    showToMe(){
      this.showTasksToMe = true;
      this.showTasksFromMe = false;
      this.showTasksAll = false;
    },
    showFromMe(){
      this.showTasksFromMe = true;
      this.showTasksToMe = false;
      this.showTasksAll = false;
    },
    openAddModal() {
      this.showAddModal = true;
    },
    closeAddModal(){
      this.showAddModal = false;
    },
    addMyTask(){
      let fd = new FormData();
      fd.append('title', this.task_form.title);
      fd.append('description', this.task_form.description);
      fd.append('file', this.task_form.file);
      fd.append('deadline', this.task_form.deadline);
      fd.append('to_user', this.task_form.to_user);
      this.showAddModal = false;
      this.addNewTask(fd);
    },
    deleteTask2(id){
      this.deleteTask(id);
    },
    loadAllNext(){
      if(this.params.page === this.getTasksAll.meta.last_page){
        this.disableAllButton = true
        return
      }else{
        this.disableAllButton = false
      }
      this.params.page +=1;
      this.loadTasksAll(this.params)
    },
    loadAllPrev(){
      if(this.params.page === 1){
        this.disableAllPrev = true
        return
      }else{
        this.disableAllPrev = false
      }
      this.params.page -=1;
      this.loadTasksAll(this.params)
    },
    loadNext(){
      if(this.params.page === this.getTasksToMe.meta.last_page){
        this.disableButton = true
        return
      }else{
        this.disableButton = false
      }
      this.params.page +=1;
      this.loadTasksToMe(this.params)
    },
    loadPrev(){
      if(this.params.page === 1){
        this.disablePrev = true
        return
      }else{
        this.disablePrev = false
      }
      this.params.page -=1;
      this.loadTasksToMe(this.params)
    },
    loadFromNext(){
      if(this.params.page === this.getTasksFromMe.meta.last_page){
        this.disableFromButton = true
        return
      }else{
        this.disableFromButton = false
      }
      this.params.page +=1;
      this.loadTasksFromMe(this.params)
    },
    loadFromPrev(){
      if(this.params.page === 1){
        this.disableFromPrev = true
        return
      }else{
        this.disableFromPrev = false
      }
      this.params.page -=1;
      this.loadTasksFromMe(this.params)
    },
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
  },
  mounted() {
    this.loadUserList2(this.params)
    this.loadTasksAll(this.params)
    this.loadTasksToMe(this.params)
    this.loadTasksFromMe()
  },
  watch:{
    params(val){
      if(val.page === this.getTasksToMe.meta.last_page){
        this.disableButton = true
      }else{
        this.disableButton = false
      }
      if(val.page === 1){
        this.disablePrev = true
      }else{
        this.disablePrev = false
      }

    }
  }
}
</script>

<style scoped>
.tasks__btns {
  margin-top: 30px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.tasks-table__btns {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}

.task__btn {
  margin-left: 10px;
  background-color: #ff473d;
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

@media (max-width: 700px) {
  .modal__content {
    padding: 30px;
  }
}
</style>