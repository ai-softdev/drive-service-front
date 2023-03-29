<template>
  <div class="row">
    <div class="text-dark mb-2 ms-1 fs-20 tx-medium">Папки</div>
    <div class="col-xl-12 col-md-12 col-sm-12">
      <button @click="$router.go(-1)" class="btn folder__btn btn-primary mt-4" >Назад</button>
      <div style="display: flex; flex-wrap: wrap;justify-content: space-between;width: 100%">
        <folder-item
            :loadFolder="loadNewFolder"
            :changeFolderName="changeFolderName"
            v-for="item in getFolderList" :key="item.id" :item="item"
        />
      </div>

    </div>
    <!--							<div class="col-xl-3 col-md-6 col-sm-6">-->
    <!--								<div class="card custom-card">-->
    <!--									<a href="file-manager-list.html" class="open-file"></a>-->
    <!--									<div class="card-body p-3">-->
    <!--										<div class="d-flex">-->
    <!--											<span class="bg-danger-transparent border border-danger br-3 pd-5">-->
    <!--												<svg style="width:24px;height:24px" viewBox="0 0 24 24">-->
    <!--													<path fill="#e82646"-->
    <!--														d="M19,20H4C2.89,20 2,19.1 2,18V6C2,4.89 2.89,4 4,4H10L12,6H19A2,2 0 0,1 21,8H21L4,8V18L6.14,10H23.21L20.93,18.5C20.7,19.37 19.92,20 19,20Z" />-->
    <!--												</svg>-->
    <!--											</span>-->
    <!--											<div class="ms-auto mt-1 file-dropdown">-->
    <!--												<a href="#" class="text-muted" data-bs-toggle="dropdown"-->
    <!--													aria-haspopup="true" aria-expanded="false"><i-->
    <!--														class="fe fe-more-vertical fs-18"></i></a>-->
    <!--												<div class="dropdown-menu dropdown-menu-start">-->
    <!--													<a class="dropdown-item" href="#"><i class="fe fe-edit me-2"></i>-->
    <!--														Edit</a>-->
    <!--													<a class="dropdown-item" href="#"><i class="fe fe-share me-2"></i>-->
    <!--														Share</a>-->
    <!--													<a class="dropdown-item" href="#"><i-->
    <!--															class="fe fe-download me-2"></i>-->
    <!--														Download</a>-->
    <!--													<a class="dropdown-item" href="#"><i class="fe fe-trash me-2"></i>-->
    <!--														Delete</a>-->
    <!--												</div>-->
    <!--											</div>-->
    <!--										</div>-->
    <!--									</div>-->
    <!--									<div class="card-footer border-top-0">-->
    <!--										<div class="d-flex">-->
    <!--											<div>-->
    <!--												<h5 class="text-danger">PPT</h5>-->
    <!--												<p class="text-muted fs-13 mb-0">21 Files</p>-->
    <!--											</div>-->
    <!--											<div class="ms-auto">-->
    <!--												<h6 class="fs-11 text-muted">500 MB</h6>-->
    <!--											</div>-->
    <!--										</div>-->
    <!--									</div>-->
    <!--								</div>-->
    <!--							</div>-->
    <!--							<div class="col-xl-3 col-md-6 col-sm-6">-->
    <!--								<div class="card custom-card">-->
    <!--									<a href="file-manager-list.html" class="open-file"></a>-->
    <!--									<div class="card-body p-3">-->
    <!--										<div class="d-flex">-->
    <!--											<span class="bg-success-transparent border border-success br-3 pd-5">-->
    <!--												<svg style="width:24px;height:24px" viewBox="0 0 24 24">-->
    <!--													<path fill="#09ad95"-->
    <!--														d="M10 4L12 6H20C21.1 6 22 6.89 22 8V18C22 19.1 21.1 20 20 20H4C2.89 20 2 19.1 2 18L2 6C2 4.89 2.89 4 4 4H10M19 9H15.5V13.06L15 13C13.9 13 13 13.9 13 15C13 16.11 13.9 17 15 17C16.11 17 17 16.11 17 15V11H19V9Z" />-->
    <!--												</svg>-->
    <!--											</span>-->
    <!--											<div class="ms-auto mt-1 file-dropdown">-->
    <!--												<a href="#" class="text-muted" data-bs-toggle="dropdown"-->
    <!--													aria-haspopup="true" aria-expanded="false"><i-->
    <!--														class="fe fe-more-vertical fs-18"></i></a>-->
    <!--												<div class="dropdown-menu dropdown-menu-start">-->
    <!--													<a class="dropdown-item" href="#"><i class="fe fe-edit me-2"></i>-->
    <!--														Edit</a>-->
    <!--													<a class="dropdown-item" href="#"><i class="fe fe-share me-2"></i>-->
    <!--														Share</a>-->
    <!--													<a class="dropdown-item" href="#"><i-->
    <!--															class="fe fe-download me-2"></i>-->
    <!--														Download</a>-->
    <!--													<a class="dropdown-item" href="#"><i class="fe fe-trash me-2"></i>-->
    <!--														Delete</a>-->
    <!--												</div>-->
    <!--											</div>-->
    <!--										</div>-->
    <!--									</div>-->
    <!--									<div class="card-footer border-top-0">-->
    <!--										<div class="d-flex">-->
    <!--											<div>-->
    <!--												<h5 class="text-success">Music</h5>-->
    <!--												<p class="text-muted fs-13 mb-0">15 Files</p>-->
    <!--											</div>-->
    <!--											<div class="ms-auto">-->
    <!--												<h6 class="fs-11 text-muted">300 MB</h6>-->
    <!--											</div>-->
    <!--										</div>-->
    <!--									</div>-->
    <!--								</div>-->
    <!--							</div>-->
    <!--							<div class="col-xl-3 col-md-6 col-sm-6">-->
    <!--								<div class="card custom-card">-->
    <!--									<a href="file-manager-list.html" class="open-file"></a>-->
    <!--									<div class="card-body p-3">-->
    <!--										<div class="d-flex">-->
    <!--											<span class="bg-pink-transparent border border-pink br-3 pd-5">-->
    <!--												<svg style="width:24px;height:24px" viewBox="0 0 24 24">-->
    <!--													<path fill="#fc5296"-->
    <!--														d="M10,4L12,6H20A2,2 0 0,1 22,8V18A2,2 0 0,1 20,20H4C2.89,20 2,19.1 2,18V6C2,4.89 2.89,4 4,4H10M12.46,10.88L14.59,13L12.46,15.12L13.88,16.54L16,14.41L18.12,16.54L19.54,15.12L17.41,13L19.54,10.88L18.12,9.46L16,11.59L13.88,9.46L12.46,10.88Z" />-->
    <!--												</svg>-->
    <!--											</span>-->
    <!--											<div class="ms-auto mt-1 file-dropdown">-->
    <!--												<a href="#" class="text-muted" data-bs-toggle="dropdown"-->
    <!--													aria-haspopup="true" aria-expanded="false"><i-->
    <!--														class="fe fe-more-vertical fs-18"></i></a>-->
    <!--												<div class="dropdown-menu dropdown-menu-start">-->
    <!--													<a class="dropdown-item" href="#"><i class="fe fe-edit me-2"></i>-->
    <!--														Edit</a>-->
    <!--													<a class="dropdown-item" href="#"><i class="fe fe-share me-2"></i>-->
    <!--														Share</a>-->
    <!--													<a class="dropdown-item" href="#"><i-->
    <!--															class="fe fe-download me-2"></i>-->
    <!--														Download</a>-->
    <!--													<a class="dropdown-item" href="#"><i class="fe fe-trash me-2"></i>-->
    <!--														Delete</a>-->
    <!--												</div>-->
    <!--											</div>-->
    <!--										</div>-->
    <!--									</div>-->
    <!--									<div class="card-footer border-top-0">-->
    <!--										<div class="d-flex">-->
    <!--											<div>-->
    <!--												<h5 class="text-pink">XLS</h5>-->
    <!--												<p class="text-muted fs-13 mb-0">12 Files</p>-->
    <!--											</div>-->
    <!--											<div class="ms-auto">-->
    <!--												<h6 class="fs-11 text-muted">250 MB</h6>-->
    <!--											</div>-->
    <!--										</div>-->
    <!--									</div>-->
    <!--								</div>-->
    <!--							</div>-->
    <!--							<div class="col-xl-3 col-md-6 col-sm-6">-->
    <!--								<div class="card custom-card">-->
    <!--									<a href="file-manager-list.html" class="open-file"></a>-->
    <!--									<div class="card-body p-3">-->
    <!--										<div class="d-flex">-->
    <!--											<span class="bg-warning-transparent border border-warning br-3 pd-5">-->
    <!--												<svg style="width:24px;height:24px" viewBox="0 0 24 24">-->
    <!--													<path fill="#f7b731"-->
    <!--														d="M19,20H4C2.89,20 2,19.1 2,18V6C2,4.89 2.89,4 4,4H10L12,6H19A2,2 0 0,1 21,8H21L4,8V18L6.14,10H23.21L20.93,18.5C20.7,19.37 19.92,20 19,20Z" />-->
    <!--												</svg>-->
    <!--											</span>-->
    <!--											<div class="ms-auto mt-1 file-dropdown">-->
    <!--												<a href="#" class="text-muted" data-bs-toggle="dropdown"-->
    <!--													aria-haspopup="true" aria-expanded="false"><i-->
    <!--														class="fe fe-more-vertical fs-18"></i></a>-->
    <!--												<div class="dropdown-menu dropdown-menu-start">-->
    <!--													<a class="dropdown-item" href="#"><i class="fe fe-edit me-2"></i>-->
    <!--														Edit</a>-->
    <!--													<a class="dropdown-item" href="#"><i class="fe fe-share me-2"></i>-->
    <!--														Share</a>-->
    <!--													<a class="dropdown-item" href="#"><i-->
    <!--															class="fe fe-download me-2"></i>-->
    <!--														Download</a>-->
    <!--													<a class="dropdown-item" href="#"><i class="fe fe-trash me-2"></i>-->
    <!--														Delete</a>-->
    <!--												</div>-->
    <!--											</div>-->
    <!--										</div>-->
    <!--									</div>-->
    <!--									<div class="card-footer border-top-0">-->
    <!--										<div class="d-flex">-->
    <!--											<div>-->
    <!--												<h5 class="text-warning">PDF</h5>-->
    <!--												<p class="text-muted fs-13 mb-0">11 Files</p>-->
    <!--											</div>-->
    <!--											<div class="ms-auto">-->
    <!--												<h6 class="fs-11 text-muted">150 MB</h6>-->
    <!--											</div>-->
    <!--										</div>-->
    <!--									</div>-->
    <!--								</div>-->
    <!--							</div>-->
    <!--							<div class="col-xl-3 col-md-6 col-sm-6">-->
    <!--								<div class="card custom-card">-->
    <!--									<a href="file-manager-list.html" class="open-file"></a>-->
    <!--									<div class="card-body p-3">-->
    <!--										<div class="d-flex">-->
    <!--											<span class="bg-info-transparent border border-info br-3 pd-5">-->
    <!--												<svg style="width:24px;height:24px" viewBox="0 0 24 24">-->
    <!--													<path fill="#01b8ff"-->
    <!--														d="M20,18H4V8H20M20,6H12L10,4H4A2,2 0 0,0 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8A2,2 0 0,0 20,6M15,16H6V14H15V16M18,12H6V10H18V12Z" />-->
    <!--												</svg>-->
    <!--											</span>-->
    <!--											<div class="ms-auto mt-1 file-dropdown">-->
    <!--												<a href="#" class="text-muted" data-bs-toggle="dropdown"-->
    <!--													aria-haspopup="true" aria-expanded="false"><i-->
    <!--														class="fe fe-more-vertical fs-18"></i></a>-->
    <!--												<div class="dropdown-menu dropdown-menu-start">-->
    <!--													<a class="dropdown-item" href="#"><i class="fe fe-edit me-2"></i>-->
    <!--														Edit</a>-->
    <!--													<a class="dropdown-item" href="#"><i class="fe fe-share me-2"></i>-->
    <!--														Share</a>-->
    <!--													<a class="dropdown-item" href="#"><i-->
    <!--															class="fe fe-download me-2"></i>-->
    <!--														Download</a>-->
    <!--													<a class="dropdown-item" href="#"><i class="fe fe-trash me-2"></i>-->
    <!--														Delete</a>-->
    <!--												</div>-->
    <!--											</div>-->
    <!--										</div>-->
    <!--									</div>-->
    <!--									<div class="card-footer border-top-0">-->
    <!--										<div class="d-flex">-->
    <!--											<div>-->
    <!--												<h5 class="text-info">TXT</h5>-->
    <!--												<p class="text-muted fs-13 mb-0">18 Files</p>-->
    <!--											</div>-->
    <!--											<div class="ms-auto">-->
    <!--												<h6 class="fs-11 text-muted">120 MB</h6>-->
    <!--											</div>-->
    <!--										</div>-->
    <!--									</div>-->
    <!--								</div>-->
    <!--							</div>-->
    <!--							<div class="col-xl-3 col-md-6 col-sm-6">-->
    <!--								<div class="card custom-card">-->
    <!--									<a href="file-manager-list.html" class="open-file"></a>-->
    <!--									<div class="card-body p-3">-->
    <!--										<div class="d-flex">-->
    <!--											<span class="bg-secondary-transparent border border-secondary br-3 pd-5">-->
    <!--												<svg style="width:24px;height:24px" viewBox="0 0 24 24">-->
    <!--													<path fill="#fc7303"-->
    <!--														d="M5,17L9.5,11L13,15.5L15.5,12.5L19,17M20,6H12L10,4H4A2,2 0 0,0 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8A2,2 0 0,0 20,6Z" />-->
    <!--												</svg>-->
    <!--											</span>-->
    <!--											<div class="ms-auto mt-1 file-dropdown">-->
    <!--												<a href="#" class="text-muted" data-bs-toggle="dropdown"-->
    <!--													aria-haspopup="true" aria-expanded="false"><i-->
    <!--														class="fe fe-more-vertical fs-18"></i></a>-->
    <!--												<div class="dropdown-menu dropdown-menu-start">-->
    <!--													<a class="dropdown-item" href="#"><i class="fe fe-edit me-2"></i>-->
    <!--														Edit</a>-->
    <!--													<a class="dropdown-item" href="#"><i class="fe fe-share me-2"></i>-->
    <!--														Share</a>-->
    <!--													<a class="dropdown-item" href="#"><i-->
    <!--															class="fe fe-download me-2"></i>-->
    <!--														Download</a>-->
    <!--													<a class="dropdown-item" href="#"><i class="fe fe-trash me-2"></i>-->
    <!--														Delete</a>-->
    <!--												</div>-->
    <!--											</div>-->
    <!--										</div>-->
    <!--									</div>-->
    <!--									<div class="card-footer border-top-0">-->
    <!--										<div class="d-flex">-->
    <!--											<div>-->
    <!--												<h5 class="text-secondary">Images</h5>-->
    <!--												<p class="text-muted fs-13 mb-0">14 Files</p>-->
    <!--											</div>-->
    <!--											<div class="ms-auto">-->
    <!--												<h6 class="fs-11 text-muted">650 MB</h6>-->
    <!--											</div>-->
    <!--										</div>-->
    <!--									</div>-->
    <!--								</div>-->
    <!--							</div>-->
    <!--							<div class="col-xl-3 col-md-6 col-sm-6">-->
    <!--								<div class="card custom-card">-->
    <!--									<a href="file-manager-list.html" class="open-file"></a>-->
    <!--									<div class="card-body p-3">-->
    <!--										<div class="d-flex">-->
    <!--											<span class="bg-purple-transparent border border-purple br-3 pd-5">-->
    <!--												<svg style="width:24px;height:24px" viewBox="0 0 24 24">-->
    <!--													<path fill="#6f42c1"-->
    <!--														d="M20 6H12L10 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V8C22 6.9 21.1 6 20 6M20 18H16V16H14V18H4V8H14V10H16V8H20V18M16 12V10H18V12H16M14 12H16V14H14V12M18 16H16V14H18V16Z" />-->
    <!--												</svg>-->
    <!--											</span>-->
    <!--											<div class="ms-auto mt-1 file-dropdown">-->
    <!--												<a href="#" class="text-muted" data-bs-toggle="dropdown"-->
    <!--													aria-haspopup="true" aria-expanded="false"><i-->
    <!--														class="fe fe-more-vertical fs-18"></i></a>-->
    <!--												<div class="dropdown-menu dropdown-menu-start">-->
    <!--													<a class="dropdown-item" href="#"><i class="fe fe-edit me-2"></i>-->
    <!--														Edit</a>-->
    <!--													<a class="dropdown-item" href="#"><i class="fe fe-share me-2"></i>-->
    <!--														Share</a>-->
    <!--													<a class="dropdown-item" href="#"><i-->
    <!--															class="fe fe-download me-2"></i>-->
    <!--														Download</a>-->
    <!--													<a class="dropdown-item" href="#"><i class="fe fe-trash me-2"></i>-->
    <!--														Delete</a>-->
    <!--												</div>-->
    <!--											</div>-->
    <!--										</div>-->
    <!--									</div>-->
    <!--									<div class="card-footer border-top-0">-->
    <!--										<div class="d-flex">-->
    <!--											<div>-->
    <!--												<h5 class="text-purple">ZIP</h5>-->
    <!--												<p class="text-muted fs-13 mb-0">13 Files</p>-->
    <!--											</div>-->
    <!--											<div class="ms-auto">-->
    <!--												<h6 class="fs-11 text-muted">320 MB</h6>-->
    <!--											</div>-->
    <!--										</div>-->
    <!--									</div>-->
    <!--								</div>-->
    <div>

    </div>
    <div class="text-dark mb-2 ms-1 fs-20 tx-medium">Файлы</div>
    <div class="" style="display: flex;  flex-wrap: wrap;width:100%">
      <file-item v-for="item in getFileList" :ket="item.id" :item="item"/>
    </div>
    <Transition name="fade">
      <form @submit.prevent="editFolder" action="#"  class="modal" v-if="showEdit" >
        <div @click.stop class="modal__content">
          <button @click="showEdit=!showEdit" class="modal__icon btn__reset">
            <span class="modal-icon__span"></span>
          </button>
          <h3 class="admin-log__title">Изменить папку</h3>
          <div class="admin-log__content">
            <label class="admin-log__label">
              <span class="admin-log__span">Новое название папки</span>
              <input-reg
                  v-model="folderEdit.name"
                  type="text"
                  placeholder="Название папки"
              ></input-reg>
            </label>

            <main-btn  type="submit">Изменить</main-btn>
          </div>
        </div>
      </form>
    </Transition>

  </div>

</template>

<script>
import FolderItem from "@/components/admin/Files/UI/FolderItem.vue";
import {mapGetters, mapActions} from "vuex";
import FileItem from "@/components/admin/Files/UI/FileItem.vue";

export default {
  components: {FileItem, FolderItem},

  data(){
    return {
      params:{
        parent:0,
        back:0
      },
      showEdit:false,
      folderEdit:{
        name:'',
        id:''
      }
    }
  },
  name: "FolderList",
  computed:{
    ...mapGetters(['getFolderList', 'getFileList', 'getCurrentUser']),

  },
  methods:{
    ...mapActions(['loadFolder', 'editFolderName']),
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
      loadNewFolder(id){
        this.params.back = this.params.parent
        this.params.parent = id;
        console.log(this.params)
        this.$router.push({name:'admin-filemanager', params:{folder:id}})
        this.loadFolder(this.params)
      },
    changeFolderName(id){
      this.showEdit = true
      this.folderEdit.id = id

    },
    editFolder(){
      this.folderEdit.parent = this.$route.params.folder
      if(this.folderEdit.parent === 'root')
        this.folderEdit.parent = 0
      this.editFolderName(this.folderEdit)
    }
  },
  mounted() {
    let folder = this.$route.params.folder
    if(folder === 'root')
      this.params.parent = 0;
    else this.params.parent = Number(folder)
    this.loadFolder(this.params)
  },
  watch:{
    $route(to, from){
      this.params.parent = to.params.folder
      this.loadFolder(this.params)
    }
  }

}
</script>

<style scoped>
.folder__btn {
  margin-bottom: 20px;
}
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