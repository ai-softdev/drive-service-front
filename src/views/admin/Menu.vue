<template>
  <div class="menu">
    <div class="main-header side-header sticky">
			<div class="container-fluid main-container">
				<div class="main-header-left sidemenu">
					<a class="main-header-menu-icon" href="" id="mainSidebarToggle"><span></span></a>
				</div>
				<a class="main-header-menu-icon  horizontal  d-lg-none" href="" id="mainNavShow"><span></span></a>
<!--				<div class="main-header-left horizontal">-->
<!--					<a class="main-logo">-->
<!--            COMFORT MIKRO DRIVE SERVICE-->
<!--					</a>-->
<!--				</div>-->
				<div class="main-header-right">
					<button class="navbar-toggler navresponsive-toggler d-lg-none ms-auto collapsed" type="button"
						data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent-4"
						aria-controls="navbarSupportedContent-4" aria-expanded="false"
						aria-label="Toggle navigation"> <span
							class="navbar-toggler-icon fe fe-more-vertical "></span>
					</button>
					<div class="navbar navbar-expand-lg navbar-collapse responsive-navbar p-0">
						<div class="collapse navbar-collapse" id="navbarSupportedContent-4">
							<ul class="nav nav-item header-icons navbar-nav-right ms-auto">
								<li class="dropdown">
									<a class="nav-link icon full-screen-link">
										<i class="fe fe-maximize fullscreen-button"></i>
                  </a>
								</li>
<!--                <li class="dropdown main-header-notification">-->
<!--									<a class="nav-link icon" href="">-->
<!--										<i class="fe fe-bell"></i>-->
<!--										<span class="pulse bg-danger"></span>-->
<!--									</a>-->
<!--									<div class="dropdown-menu">-->
<!--										<div class="header-navheading">-->
<!--											<p class="main-notification-text">You have 1 unread notification<span class="badge bg-pill badge-primary ms-3">View all</span></p>-->
<!--										</div>-->
<!--										<div class="main-notification-list">-->
<!--											<a href="view-mail.html" class="media new">-->
<!--												<div class="main-img-user online"><img alt="avatar" src="/1.png"></div>-->
<!--												<div class="media-body">-->
<!--													<p>Congratulate <strong>Olivia James</strong> for New template-->
<!--														start</p>-->
<!--													<span>Oct 15 12:32pm</span>-->
<!--												</div>-->
<!--											</a>-->
<!--											<a href="view-mail.html" class="media">-->
<!--												<div class="main-img-user"><img alt="avatar" src="/1.png">-->
<!--												</div>-->
<!--												<div class="media-body">-->
<!--													<p><strong>Joshua Gray</strong> New Message Received</p>-->
<!--													<span>Oct 13-->
<!--														02:56am</span>-->
<!--												</div>-->
<!--											</a>-->
<!--											<a href="view-mail.html" class="media">-->
<!--												<div class="main-img-user online"><img alt="avatar" src="/1.png"></div>-->
<!--												<div class="media-body">-->
<!--													<p><strong>Elizabeth Lewis</strong> added new schedule realease-->
<!--													</p><span>Oct-->
<!--														12 10:40pm</span>-->
<!--												</div>-->
<!--											</a>-->
<!--										</div>-->
<!--									</div>-->
<!--								</li>-->
								<li class="dropdown main-profile-menu">
									<a class="main-img-user" href=""><img alt="avatar" :src="getServerDomain+getCurrentUser.photo"></a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>

    <div class="main-sidebar main-sidemenu main-sidebar-sticky side-menu">
      <div class="main-sidebar-body">
        <div class="slide-left disabled" id="slide-left">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#7b8191"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"
            />
          </svg>
        </div>
        <ul class="nav hor-menu">
          <li class="nav-item">
            <router-link :to="{name:'admin-dashboard'}" class="nav-link" style="cursor: pointer">
              <i class="fe fe-airplay"></i>
              <span class="sidemenu-label">Dashboard</span>
            </router-link>
          </li>
<!--          <li class="nav-item">-->
<!--            <router-link :to="{name:'admin-chat'}" class="nav-link with-sub" href="">-->
<!--              <i class="fa fa-comment-o"></i>-->
<!--              <span class="sidemenu-label">Чат</span>-->
<!--            </router-link>-->
<!--          </li>-->
          <li class="nav-item">
            <router-link :to="{name:'admin-filemanager', params:{folder:'root'}}" v-if="can('file.read')" class="nav-link with-sub" href="">
              <i class="fa fa-folder-open-o"></i>
              <span class="sidemenu-label">Менеджер файлов</span>
            </router-link>
          </li>
<!--          <li class="nav-item">-->
<!--            <router-link :to="{name:'admin-filemanagerlist'}" class="nav-link with-sub" href="">-->
<!--              <i class="fa fa-files-o"></i>-->
<!--              <span class="sidemenu-label">Список файлов</span>-->
<!--            </router-link>-->
<!--          </li>-->
          <!-- <li class="nav-item">
            <router-link :to="{name:'admin-filedetails'}" class="nav-link with-sub" href="">
              <i class="fa fa-file-text-o"></i>
              <span class="sidemenu-label">File details</span>
            </router-link>
          </li> -->
          <li class="nav-item">
            <router-link :to="{name:'admin-persons'}" v-if="can('users')" class="nav-link with-sub" href="">
              <i class="fa fa-address-book-o"></i>
              <span class="sidemenu-label">Пользователи</span>
            </router-link>
          </li>
          <li class="nav-item" v-if="can('role.read')">
            <router-link :to="{name:'admin-roles'}" class="nav-link with-sub" href="">
              <i class="fa fa-briefcase"></i>
              <span class="sidemenu-label">Роли</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{name:'admin-tasks'}" class="nav-link with-sub">
              <i class="fa fa-calendar-check-o"></i>
              <span class="sidemenu-label">Задачи</span>
            </router-link>
          </li>
          <li class="nav-item " style="cursor: pointer" @click="logout">
            <div class="nav-link with-sub">
              <i class="fa fa-sign-out link-danger bd-danger"></i>
              <span class="sidemenu-label link-danger">Выйти</span>
            </div>
          </li>
        </ul>
        <div class="slide-right" id="slide-right">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#7b8191"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"
            />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
import {mapGetters} from "vuex";

export default {
  computed: {
    ...mapGetters(['getCurrentUser', 'getServerDomain'])
  },
  methods:{
    logout(){
      localStorage.removeItem('token');
      this.$router.push('/')
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
    }
  }
};
</script>

<style>
.router-link-active{
  color: #8760fb !important;
}
</style>
  