<template>
  <tr>
    <td>{{item.from.name}}</td>
    <td>{{item.title}}</td>
    <td>{{item.description}}</td>
    <td class="admin-log__file">
      <a class="fa fa-file admin-log__link" :href="getServerDomain+item.file"></a>
    </td>
    <td>{{item.status}}</td>
    <td>{{formatData(item.created_at || '')}}</td>
    <td>{{item.deadline}}</td>
    <slot></slot>
  </tr>
</template>

<script>
import {mapGetters} from "vuex";
export default {
  name: "TaskItem",
  props:{item:Object},
  methods:{
    formatData(data){
      if(data.length < 5)
        return '-'
      let date = new Date(data);
      return `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}год`;
    }
  },
  computed:{
    ...mapGetters(['getServerDomain'])
  },
}
</script>

<style scoped>
.admin-log__link {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #8760fb;
}

.center {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>