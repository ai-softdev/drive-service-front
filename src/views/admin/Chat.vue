<template>
    <div class="main-content side-content pt-0">
			<div class="side-app">

			  <div class="main-container container-fluid">

				<!-- Page Header -->
				<div class="page-header">
					<div>
						<h2 class="main-content-title tx-24 mg-b-5">Чат</h2>
					</div>
				</div>
				<!-- End Page Header -->

				<!-- Row -->
				<div class="row">
					<div class="col-sm-12 col-md-12 col-lg-12 col-xl-4  col-xxl-4 ">
						<div class="card custom-card">
							<div class="main-content-app pt-0">
								<div class="main-content-left main-content-left-chat">
									<div class="card-body">
										<div class="input-group">
											<input type="text" class="form-control" placeholder="Search ...">
											<span>
												<button class="btn ripple btn-primary" type="button">Поиск</button>
											</span>
										</div>
									</div>
									<nav class="nav main-nav-line main-nav-line-chat card-body flex-column flex-md-row">
										<p class="nav-link active" data-bs-toggle="tab" href="">Недавние</p>
									</nav>
									<div class="main-chat-list" id="ChatList">
                    <user-item v-for="item in getUserList" :key="item.id" :item="item"
                      :active="item.id === current"
                      @click="current = item.id"
                    />
									</div><!-- main-chat-list -->
								</div>
							</div>
						</div>
					</div>
					<div class="col-sm-12 col-md-12 col-lg-12 col-xl-5  col-xxl-5">
						<div class="card custom-card">
							<div class="main-content-app pt-0">
								<div class="main-content-body main-content-body-chat">
									<div class="main-chat-header pt-3">
										<div class="main-img-user online"><img alt="avatar"
												:src="currentUser?.user?.photo"></div>
										<div class="main-chat-msg-name">
											<h6>{{ currentUser?.user?.name }}</h6>
											<span class="dot-label bg-success"></span><small class="me-3">online</small>
										</div>
										<nav class="nav">
											<a class="nav-link" href="" data-bs-toggle="dropdown" role="button"
												aria-haspopup="true" aria-expanded="false"><i
													class="fe fe-more-horizontal"></i>
											</a>
											<div class="dropdown-menu dropdown-menu-right shadow">

												<a class="dropdown-item" href="#"><i class="fe fe-trash-2 me-1"></i>
													Удалить</a>
											</div>
											<a class="nav-link" data-bs-toggle="tooltip" href="" title="Delete"><i
													class="fe fe-trash-2"></i></a>
										</nav>
									</div><!-- main-chat-header -->
                    <message-list :reciver="current"/>
									<send-message :reciver="current"/>
								</div>
							</div>
						</div>
					</div>
					<div class="col-sm-12 col-md-12  col-lg-12 col-xl-3  col-xxl-3">
						<div class="card custom-card chat-account">
							<div class="main-content-app d-block pt-0">
								<div class="card-body text-center">
									<div class="user-lock text-center">
										<a href="profile.html"><img alt="avatar" class="rounded-circle" src="/1.png"></a>
									</div>
									<a href="profile.html"><h5 class=" mb-1 mt-3">Sonia Taylor</h5></a>
									<span class="dot-label bg-success"></span><small class="me-3 text-muted">Available</small>
									<p class="mb-0 mt-1 text-muted">Web Designer</p>
								</div>
								<div class="card-body">
									<h6 class="mb-3">Детали контакта</h6>
									<div class="d-flex">
										<div>
											<a href="javascript:;"  class="chat-icon bg-primary-transparent rounded-circle m-0"><i class="fe fe-phone text-primary fs-14"></i></a>
										</div>
										<div class="ms-2">
											<p class="tx-13 mb-0">Номер</p>
											<p class="tx-12 text-muted text-break">+123(45)-678-90</p>
										</div>
									</div>
									<div class="d-flex">
										<div >
											<a href="javascript:;" class="chat-icon bg-primary-transparent rounded-circle m-0" ><i class="fe fe-mail text-primary fs-14"></i></a>
										</div>
										<div class="ms-2">
											<p class="tx-13 mb-0">Email</p>
											<p class="tx-12 text-muted text-break">joychua135@gmail.com.</p>
										</div>
									</div>
									<div class="d-flex">
										<div >
											<a href="javascript:;" class="chat-icon bg-primary-transparent rounded-circle m-0" ><i class="fe fe-map-pin text-primary fs-14"  ></i></a>
										</div>
										<div class="ms-2">
											<p class="tx-13 mb-0">Адрес</p>
											<p class="tx-12 text-muted text-wrap">2nd street,houston texas,united states.</p>
										</div>
									</div>
									<div class="d-flex">
										<div >
											<a href="javascript:" class="chat-icon bg-primary-transparent rounded-circle m-0"><i class="fe fe-linkedin text-primary fs-14"  ></i></a>
										</div>
										<div class="ms-2">
											<p class="tx-13 mb-0">Linkdin</p>
											<p class="tx-12 text-muted mb-0 text-break">@895434</p>
										</div>
									</div>
								</div>
								<div class="card-body">
									<h6 class="mb-3">Shared Files</h6>
									<div class="media mb-3 align-items-center">
										<a href="javascript:;" class="chat-icon border border-success bg-success-transparent m-0 br-3"><i class="mdi mdi-file-image fs-18 text-success"></i></a>
										<div class="media-body ms-2 align-items-center d-flex">
											<div class="">
												<p class="tx-13 text-dark mb-0">Image1.jpg</p>
												<span class="tx-12 text-muted">200 KB</span>
											</div>
											<div class="ms-auto">
												<i class="fe fe-download text-muted fs-18"></i>
											</div>
										</div>
									</div>
									<div class="media mb-3 align-items-center">
										<a href="javascript:;" class="chat-icon border border-danger bg-danger-transparent m-0 br-3"><i class="mdi mdi-file-pdf text-danger fs-18"></i></a>
										<div class="media-body ms-2 align-items-center d-flex">
											<div class="">
												<p class="tx-13 text-dark mb-0">Doc1.pdf</p>
												<span class="tx-12 text-muted">48 KB</span>
											</div>
											<div class="ms-auto">
												<i class="fe fe-download text-muted tx-18"></i>
											</div>
										</div>
									</div>
									<div class="media mb-3 align-items-center">
										<a href="javascript:;" class="chat-icon border border-info bg-info-transparent m-0 br-3"><i class="mdi mdi-file-word text-info fs-18"></i></a>
										<div class="media-body ms-2 align-items-center d-flex">
											<div class="">
												<p class="tx-13 text-dark mb-0">Word1.doc</p>
												<span class="tx-12 text-muted">35 KB</span>
											</div>
											<div class="ms-auto">
												<i class="fe fe-download text-muted tx-18"></i>
											</div>
										</div>
									</div>
									<div class="media mb-3 align-items-center">
										<a href="javascript:;" class="chat-icon border border-purple bg-purple-transparent m-0 br-3"><i class="mdi mdi-zip-box text-purple fs-18"></i></a>
										<div class="media-body ms-2 align-items-center d-flex">
											<div class="">
												<p class="tx-13 text-dark mb-0">exa.zip</p>
												<span class="tx-12 text-muted">25 KB</span>
											</div>
											<div class="ms-auto">
												<i class="fe fe-download text-muted tx-18"></i>
											</div>
										</div>
									</div>
									<div class="media align-items-center">
										<a href="javascript:;" class="chat-icon border border-warning bg-warning-transparent m-0 br-3"><i class="mdi mdi-file-powerpoint text-warning fs-18"></i></a>
										<div class="media-body ms-2 align-items-center d-flex">
											<div class="">
												<p class="tx-13 text-dark mb-0">Example1.ppt</p>
												<span class="tx-12 text-muted">54 KB</span>
											</div>
											<div class="ms-auto">
												<i class="fe fe-download text-muted tx-18"></i>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<!-- End Row -->

			</div>
		</div>
	</div>
</template>


<script>
    import userItem from "@/components/admin/Chat/UI/UserItem.vue";
    import { mapGetters, mapActions } from 'vuex'
    import messageFromUser from "@/components/admin/Chat/UI/messageItem.vue";
    import MessageList from "@/components/admin/Chat/MessageList.vue";
    import SendMessage from "@/components/admin/Chat/UI/SendMessage.vue";
    export default {
      data(){
        return{
          current:-1,
          currentUser:{}
        }

      },
      components:{
        SendMessage,
        MessageList,
        userItem,messageFromUser
      },
      computed:{
        ...mapGetters(['getUserList','getUser']),

      },
      methods:{
        ...mapActions(['loadUserList','loadUser'])
      },
      mounted() {
        this.loadUserList();
        this.loadUser();

      },
      watch:{
        getUserList(val){
          this.current = val[0].id
          this.currentUser =  val.filter(el=>{return el.id===this.current})[0]
        }

      }
    }
</script>

<style lang="scss" scoped>

</style>