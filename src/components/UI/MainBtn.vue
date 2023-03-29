<template>
    <button
        :type="type"
        :class="['main__btn btn__reset', {
                'main-display__first': mobileDisFirst,
                'main-display__second': mobileDisSecond,
    }]">
        <slot></slot>
    </button>
</template>
<script>
export default {
    props: {
            mobileDisFirst: {
                type: Boolean,
                required: false,
            },mobileDisSecond: {
                type: Boolean,
                required: false,
            },
      type:String
    },
    data(){
        return{
            
        }
    }
}
</script>
<style>
.main__btn {
    padding: 10px;
    border: 2px solid #004583;
    border-radius: 3px;

    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    color: #004583;

    transition: 0.3s ease-in;
}

.main__btn:hover {
    background-color: #004583;
    color: #FFFFFF;
}

.main-display__first {
    display: flex;
    align-items: center;
    justify-content: center;
}

.main-display__second {
    display: none;
}

@media (max-width: 1024px){
.main-display__first {
    display: none;
}

.main-display__second {
    display: block;
    margin-left: initial;
}

}
</style>