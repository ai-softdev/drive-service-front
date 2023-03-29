<template>
  <tr>
    <td>{{item.id}}</td>
    <td>{{item.name}}</td>
    <td class="admin-log__photo">
      <img :src="getServerDomain+item.photo" alt="Изображение пользователя">
    </td>
    <td>{{item.email}}</td>
    <td>{{formatData(item.created_at || '')}}</td>
    <slot></slot>
  </tr>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "UserItem",
  props:{item:Object},

  computed:{
    ...mapGetters(['getServerDomain'])
  },
  methods:{
    formatData(data){
      if(data.length < 5)
        return '-'
      let date = new Date(data);
      return `${date.getDay()}-${date.getMonth()}-${date.getFullYear()}год`;
    }
  }
}
</script>

<style scoped>
.admin-log__photo {
  text-align: center;
}

.admin-log__photo img {
  width: 100px;
  height: 100px;
  border-radius: 100%;
  border: 1px solid rgba(0, 69, 131);
}

</style>