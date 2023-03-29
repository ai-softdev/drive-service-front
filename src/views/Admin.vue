<template>
  <link rel="stylesheet" href="/main.css"/>
  <Menu></Menu>
  <router-view></router-view>
</template>
<script>
import {mapActions, mapGetters} from "vuex";
import Menu from "@/views/admin/Menu.vue";
import router from "@/router";
export default {
  components: {
    Menu,
  },
  computed:{
    ...mapGetters(['isAuth'])
  },
  methods: {
    ...mapActions(['loadCurrentUser'])
  },
  mounted(){
    // this.$router.push('/admin/dashboard')
    this.loadCurrentUser();
  },
  watch:{
    isAuth(val){
      if(val === false)
        router.push('/')
    }
  }
};</script>
<style>

.page-header{
  margin-top: 0 !important;
}
</style>
