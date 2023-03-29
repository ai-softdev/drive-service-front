<template>
  <div class="media" :class="{'selected' : active}">
    <div class="main-img-user online">
      <img alt="avatar" :src="item.user.photo">
    </div>
    <div class="media-body">
      <div class="media-contact-name ">
        <span>{{ item.user.name }}</span> <span>2 hours</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserItem",
  props:{
    active:Boolean,
    item:Object,
  },
  mounted() {
  }
}
</script>

<style scoped>
</style>