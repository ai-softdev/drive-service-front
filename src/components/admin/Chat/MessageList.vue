<template>
  <div class="main-chat-body" id="ChatBody" @scroll="onScroll">

    <div class="content-inner" id="message_list">
      <message-item
          v-for="item in messages" :key="item.id"
          :item="item" :from-user="item.reciver_id === reciver"
      />
    </div>
  </div>
</template>

<script>
import MessageItem from "@/components/admin/Chat/UI/messageItem.vue";
import {mapActions, mapGetters} from "vuex";

export default {
  data() {
    return {
      page: 1,

    }
  },
  props: {
    reciver: Number
  },
  name: "MessageList",
  components: {MessageItem},
  computed: {
    ...mapGetters(['getMessages', 'getUser']),
    messages(){
      return this.getMessages.sort((a,b)=>{
        return new Date(a.created_at) - new Date(b.created_at)
      })
    }
  },
  methods: {
    ...mapActions(['loadMessages', 'reciveMessage']),
    onScroll({target: {scrollTop, clientHeight, scrollHeight}}) {
      console.log(1)
      if (scrollTop + clientHeight >= scrollHeight) {
        console.log(1)
      }
    }
  },
  mounted() {

  },

  watch: {
    reciver(val) {
      if (this.reciver != undefined) {

        this.loadMessages({reciver: val, page: this.page})

      }
    },
    getUser(val) {
      this.$pusher.subscribe(`private-chat.${this.reciver}.${this.getUser.id}`).bind('MessageSent', message => {
        this.reciveMessage(message.message)
      })
      this.$pusher.subscribe(`private-chat.${this.getUser.id}.${this.reciver}`).bind('MessageSent', message => {
        this.reciveMessage(message.message)
      })
    }
  }
}
</script>

<style scoped>
#ChatBody {
  overflow-y: auto;
}
</style>