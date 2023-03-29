<template>
  <div class="col-xl-3 col-lg-4 col-md-4 col-sm-4">
    <div class="card overflow-hidden custom-card">
    <a href="file-details.html"><img src="/1.png" alt="img"
                                     class="w-100 files"></a>
    <div class="card-footer py-2 px-3">
      <div class="d-flex">
        <div class="d-flex text-break" style="align-items: center">
          <i class="mdi  tx-20  me-1"
          :class="getClass(item.name)"
          ></i>
          <h6 class="mb-0 mt-2 text-muted">{{ item.name }}</h6>
        </div>
        <div class="ms-auto mt-1 file-dropdown">
          <a href="#" class="text-muted" data-bs-toggle="dropdown"
             aria-haspopup="true" aria-expanded="false"><i
              class="fe fe-more-vertical fs-18"></i></a>
          <div class="dropdown-menu dropdown-menu-start">
            <span
                v-if="can('file.delete')"
                class="dropdown-item" href="#" @click="removeFile({id:item.id, parent:$route.params.folder})"><i class="fe fe-trash me-2"></i>
                Delete</span>
          </div>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "FileItem",
  props:{
    item:Object
  },
  computed:{...mapGetters(['getCurrentUser'])},
  methods:{
    ...mapActions(['removeFile']),
    can(item){
      let temp = false;
      this.getCurrentUser?.permissions?.forEach(e=>{
        if(e.name === 'all')
          temp=true
        if(e.name === item)
          temp = true
      });
      return true;
    },
    getClass(name){
      let temp = name.split('.')[1]
      if(temp === 'doc' || temp === 'docx')
        return 'mdi-file-word text-primary'
      if (temp ==='jpeg' || temp === 'png' || temp==='webp')
        return 'mdi-file-image text-primary'
      if(temp ==='ppt' || temp === 'pptx')
        return 'mdi-file-powerpoint text-danger'
      if(temp === 'xls' || temp === 'xlsx')
        return 'mdi-file-excel text-success'
      if(temp==='mp4' || temp==='avi')
        return 'mdi-file-video text-primary'
      if(temp === 'rar' || temp === 'zip')
        return 'mdi-zip-box text-secondary'
      if(temp === 'pdf')
        return 'mdi-file-pdf text-danger'
    }

  }
}
</script>

<style scoped>

</style>