<template>
    <div class="accordion__item">
        <div :class="['accordion__block', {'accordion__block--active': isOpen}]" @click="openAccordion">
            <h1 :class="['accordion__num', {'accordion__num--active': isOpen}]">{{ num }}</h1>
            <h1 :class="['accordion__title', {'accordion__title--active': isOpen}]">{{ title }}</h1>
            <div :class="['accordion__icon', {'accordion__icon--active': isOpen}]"></div>
        </div>
        <div :class="['accordion__content', {
            'accordion__content--active': isOpen
        }]">
            <p 
                :class="['accordion__body', {
                    'accordion__body--active': isOpen
            }]">
            {{ body }}
        </p>
        </div>
    </div>
</template>
  
<script setup>
import {ref} from 'vue'
const isOpen = ref(false)

const props = defineProps({
    num: {
        type: Number,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },

})

function openAccordion(){
    isOpen.value = !isOpen.value
}
</script>

<style scoped>

.accordion__item {
    overflow: hidden;
    background: #FFFFFF;
    border: 1px solid #EFF0F6;
    box-shadow: 0px 4px 10px rgba(20, 20, 43, 0.04);
    border-radius: 14px;
}
.accordion__block {
    position: relative;
    padding: 20px;
    display: flex;
    align-items: center;
    background-color: #FFFFFF;

    border-radius: 4px;
    cursor: pointer;
    z-index: 1;
    transition: 0.3s ease-in-out;
}

.accordion__block:hover {
    background-color: #5C5CFF;
}

.accordion__block--active {
    border-radius: 4px 4px 0 0;
    background-color: #5C5CFF;
}

.accordion__content {
    max-height: 0;
    opacity: 0;
    overflow: hidden;
    background-color: #eff1f9;

    border-top: 0;

    padding-left: 20px;
    transform: translateY(-100px);
    transition: 0.3s ease-in-out;
}

.accordion__content--active {
    max-height: 100vh;
    padding: 20px;
    opacity: 1;
    transform: translateY(0px);
}

.accordion__num, .accordion__title {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 20px;
    color: #211F54;
    transition: 0.3s ease-in-out;
}

.accordion__num--active, .accordion__title--active {
    color: #FFFFFF;
}

.accordion__num {
    margin-right: 10px;
}

.accordion__icon {
    position: relative;
    display: block;
    margin-left: auto;
    height: 100%;
    background-color: #242424;
}

.accordion__icon::before {
    content: "";
    position: absolute;
    top: 50%;
    right: 33px;
    width: 21px;
    height: 2px;
    transform: rotate(45deg);
    background-color: #242424;
    transition: 0.3s ease-in-out;
}

.accordion__icon::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 20px;
    width: 21px;
    height: 2px;
    background-color: #242424;
    z-index: 1;
    transform: rotate(-45deg);
    transition: 0.3s ease-in-out;
}

.accordion__icon--active::before {
    transform: rotate(312deg);
    background-color: #FFFFFF;
}

.accordion__icon--active::after {
    transform: rotate(-312deg);
    background-color: #FFFFFF;
}

.accordion__body {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 21px;
    line-height: 30px;
    color: #6E7191;
}

</style>
  