<template>
  <div>
    <!-- Main Content-->
    <div class="main-content side-content pt-0">
      <div class="side-app">

        <div class="main-container container-fluid">

          <!-- Page Header -->
          <div class="page-header">
            <div>
              <h2 class="main-content-title tx-24 mg-b-5">Файловый менеджер</h2>
            </div>
          </div>
          <!-- End Page Header -->

          <!-- Row -->

          <div class="row">

            <div class="col-lg-11 col-xl-9">
              <folder-list />

            </div>
            <div class="col-lg-1 col-xl-3">
              <button
                  v-if="can('file.create')"
                  class="btn btn-primary btn-block"
                      :disabled="$route.params.folder==='root'"
                      data-bs-target="#createfile"
                      data-bs-toggle="modal"><i class="fe fe-plus me-1"></i>Добавить новый файл
              </button>
              <button class="btn btn-primary btn-block"
                      v-if="can('folder.create')"
                      @click="show=true"><i class="fe fe-plus me-1"></i>Добавить новую папку</button>
            </div>

          </div>
          <!-- End Row -->
        </div>
        <!-- End Row -->
      </div>
    </div>
    <!-- modal -->
    <form @submit.prevent="uploadF" enctype="multipart/form-data" class="modal" id="createfile" style="display: none;" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content modal-content-demo">
          <div class="modal-header">
            <h5 class="mt-2">Добавьте новый файл</h5>
            <button aria-label="Close" class="btn-close" data-bs-dismiss="modal" type="button"></button>
          </div>
          <div class="ff_fileupload_wrap p-3">
            <div class="ff_fileupload_wrap">
              <div class="ff_fileupload_dropzone_wrap">
                <label for="demo" class="ff_fileupload_dropzone" type="button"
                       aria-label="Browse, drag-and-drop, or paste files to upload"></label>
              </div>
              <table class="ff_fileupload_uploads"></table>
            </div>
          </div>
          <input
              @change="file.file = $event.target.files[0]"
              id="demo" type="file" name="files" accept=".jpg, .png, image/jpeg, image/png, html, .zip, .pdf, .doc,.docx,.xls,.xlsx, .mp4"
                 multiple="" class="ff_fileupload_hidden">
          <div class="modal-footer">
            <button class="btn ripple btn-primary" type="submit" data-bs-dismiss="modal">Add</button>
            <button class="btn ripple btn-danger" data-bs-dismiss="modal" type="button">Отмена</button>
          </div>
        </div>
      </div>
    </form>
    <Transition name="fade">
      <form @submit.prevent="addFolder" action="#"  class="modal" v-if="show" >
        <div @click.stop class="modal__content">
          <button @click="show=!show" class="modal__icon btn__reset">
            <span class="modal-icon__span"></span>
          </button>
          <h3 class="admin-log__title">Создайте новую папку</h3>
          <div class="admin-log__content">
            <label class="admin-log__label">
              <span class="admin-log__span">Название папки</span>
              <input-reg
                  v-model="folder.name"
                  type="text"
                  placeholder="Название папки"
              ></input-reg>
            </label>

            <main-btn  type="submit">Создать</main-btn>
          </div>
        </div>
      </form>
    </Transition>

  </div>
</template>

<script>
import FolderList from "@/components/admin/Files/FolderList.vue";
import {mapActions, mapGetters} from "vuex";

export default {
  components: {FolderList},
  computed:{...mapGetters(['getCurrentUser'])},
  data(){
    return{
      file:{
        file:'',
        folder_id:""
      },
      folder:{
        name:'',
        id:''
      },
      show:false,
      showEdit:false,
      folderEdit:{
        name:'',
        id:''
      }
    }
  },
  methods:{
    ...mapActions(['uploadFile', 'addNewFolder']),
    uploadF(){
      this.file.folder_id = this.$route.params.folder
      if (this.file.folder_id === 'root')
        this.file.folder_id = 0
      let fd = new FormData();
        fd.append('file', this.file.file);
        fd.append('folder_id', this.file.folder_id)
        this.uploadFile(fd)
    },
    addFolder(){
      let p = this.$route.params.folder;
      if(p==='root')
        p=0
      p = Number(p)
      this.addNewFolder({name:this.folder.name, parent:p})
      this.show = false;
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

  }
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