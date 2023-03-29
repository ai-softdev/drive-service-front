<template>
    <div class="card  custom-card " style="cursor: pointer">
<!--      <a href="file-manager-list.html" class="open-file"></a>-->
      <div class="card-body p-3" style="width: 275px">
        <div class="d-flex">
											<span
                          @click="loadFolder(item.id)"
                          class="bg-primary-transparent border border-primary br-3 pd-5">
												<svg style="width:24px;height:24px" viewBox="0 0 24 24">
													<path fill="#645acf"
                                d="M9.3 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4H10L12 6H20C21.1 6 22 6.9 22 8V14.6C20.6 13.6 18.9 13 17 13C13.5 13 10.4 15.1 9.1 18.3L8.8 19L9.1 19.7C9.2 19.8 9.2 19.9 9.3 20M23 19C22.1 21.3 19.7 23 17 23S11.9 21.3 11 19C11.9 16.7 14.3 15 17 15S22.1 16.7 23 19M19.5 19C19.5 17.6 18.4 16.5 17 16.5S14.5 17.6 14.5 19 15.6 21.5 17 21.5 19.5 20.4 19.5 19M17 18C16.4 18 16 18.4 16 19S16.4 20 17 20 18 19.6 18 19 17.6 18 17 18" />
												</svg>
                        {{item.name}}
											</span>
          <div class="ms-auto mt-1 file-dropdown">
            <a href="#" class="text-muted" data-bs-toggle="dropdown"
               aria-haspopup="true" aria-expanded="false"><i
                class="fe fe-more-vertical fs-18"></i></a>
            <div class="dropdown-menu dropdown-menu-start">
              <span
                  v-if="can('folder.edit')"
                  @click="changeFolderName(item.id)" class="dropdown-item" href="#"><i class="fe fe-edit me-2"></i>
                Edit</span>
              <span
                  v-if="can('folder.delete')"
                  class="dropdown-item" href="#" @click="removeFolder({id:item.id, parent:$route.params.folder})"><i class="fe fe-trash me-2"></i>
                Delete</span>
            </div>
          </div>
        </div>
      </div>
  </div>

</template>

<script>
import {mapActions, mapGetters} from "vuex";
export default {
  name: "FolderItem",
  props:{
    item:Object,
      loadFolder:Function,
      changeFolderName:Function
  },
  computed:{...mapGetters(['getCurrentUser'])},
  methods:{
    ...mapActions(['removeFolder']),
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
  }
}
</script>

<style scoped>

</style>