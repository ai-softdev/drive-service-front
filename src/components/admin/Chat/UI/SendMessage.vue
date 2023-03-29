<template>
  <form  @submit.prevent="send" action="##!" class="main-chat-footer rounded-top-0" enctype="multipart/form-data">
    <nav class="nav">
      <label for="file" class="nav-link" style="width: 16px;height: 16px;cursor: pointer" data-bs-toggle="tooltip" href=""
             title="Attach a File"><i class="fe fe-paperclip"></i>
        <input type="file" @change="sendData.file = $event.target.files[0]"  id="file" name="file" style="visibility: hidden;opacity: 0;user-select: none;height: 0;overflow: hidden">
      </label>
    </nav>
    <input class="form-control" v-model="sendData.message" placeholder="Type your message here..." type="text">
    <button type="submit" class="main-msg-send" href=""><i class="fa fa-paper-plane"></i></button>
  </form>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import axios from "@/axios";
export default {
  name: "SendMessage",
  data(){
    return{
      sendData:{
        file:'',
        message:''
      }
    }
  },
  computed:{
    ...mapGetters(['getServerDomain'])
  },
  methods:{
    ...mapActions(['sendMessage', 'reciveMessage']),
    send(){
      let fd = new FormData()
      if(this.sendData.file !=='')
        fd.append('file', this.sendData.file)
      else fd.append('message', this.sendData.message)

      this.sendData.file = ''
      this.sendData.message = ''
      axios.post(`chat/${this.reciver}`, fd).then(res=>{
      })
    }
  },
  props:{
    reciver:Number
  }
}
</script>

<style scoped>

</style>