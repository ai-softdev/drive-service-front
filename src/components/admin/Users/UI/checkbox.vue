<template>
  <label class="admin-log__label ckbox">
    <input  type="checkbox" :checked="item.value"  v-model="item.value">
    <span>{{ item.name }}</span>
  </label>
</template>

<script>
export default {
  data(){
    return{
    }
  },
  mounted() {
  },
  name: "checkbox",
  props:{item:Object},

}
</script>

<style scoped>

</style>