<template>
  <div class="media"
    :class="{'flex-row-reverse':fromUser}"
  >
    <div class="main-img-user online"><img alt="avatar"
                                           src="/1.png"></div>
    <div class="media-body">
      <div class="main-msg-wrapper" v-if="item.type==='text'">
        {{
          item.message
        }}
      </div>
      <div class="main-msg-wrapper" v-else-if="item.type==='image'" >
        <img :src="getUrl(item.message)" alt="" @click="showImage">
      </div>
      <div>
        <span>9:48 am</span> <a href=""><i
          class="icon ion-android-more-horizontal"></i></a>
      </div>
    </div>
    <div class="modal" v-if="show" @click.stop="closeModal">
      <div @click.stop class="modal__content">
        <button @click="closeModal" class="modal__icon btn__reset">
          <span class="modal-icon__span"></span>
        </button>
        <img class="modal__img" :src="getUrl(item.message)" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters } from "vuex";

export default {
  data(){
    return {
      show: false,
    }
  },
  name: "messageFromUser",
  props:{
    fromUser:Boolean,
    item:Object
  },
  computed:{
    ...mapGetters(['getServerDomain'])
  },
  methods:{
    getUrl(url){
      return this.getServerDomain + url;
    },
    closeModal(){
      this.show = false;
    },
    showImage() {
      this.show = true;
    },
  },

}
</script>

<style scoped>
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
  max-width: 90vw;
  width: 100%;
  max-height: 90vh;
  height: 100%;
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

.modal__img {
  display: block;
  margin: 0 auto;
  padding-top: 20px;
  max-width: 100%;
  max-height: 100%;
}

@media (max-width: 700px) {
  .modal__content {
    padding: 30px;
  }
}
</style>