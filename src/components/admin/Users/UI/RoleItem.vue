<template>
  <div class="role__item">
      {{item.name}}
   <slot></slot>
  </div>
</template>

<script>
export default {
  name: "RoleItem",
  props:{item:Object},
}
</script>

<style scoped>
.role__item{
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid #e1e6f1;
  padding: 9px 15px;
  line-height: 1.462;
  color: #334151;
  cursor: pointer;
}
</style>