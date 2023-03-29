<template>
    <div class="modal" v-if="show" @click.stop="hideDialog">
        <div @click.stop class="modal__content">
            <button @click="hideDialog" class="modal__icon btn__reset">
                <span class="modal-icon__span"></span>
            </button>
            <slot></slot>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        show: {
            type: Boolean,
            default: false
        }
    },

    methods: {
        hideDialog(){
            this.$emit('update:show', false)
        }
    },
}
</script>
<style>
.modal {
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 20px;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 999;
}

.modal__content {
    position: relative;
    max-width: 486px;
    width: 100%;
    margin: auto;
    padding: 48px;

    border-radius: 4px;
    background: #FFFFFF;
    z-index: 1000;
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

@media (max-width: 700px){
.modal__content {
    padding: 30px;
}

.admin-log__title {
    font-size: 23px;
}

.admin-log__subtitle {
    font-size: 12px;
}
}
</style>