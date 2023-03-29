<template>
    <section class="faq__section" id="faq">
        <div class="container">
            <h1 class="faq__title">Часто задаваемые вопросы</h1>
            <div class="accordion__inner" data-aos="fade-up">
                <accordion-item
                    v-for="element of accordionList"
                    :num="element.num"
                    :title="element.title"
                    :body="element.body"
                />
            </div>
        </div>
    </section>
</template>
<script setup>
import {ref} from 'vue'
    const accordionList = ref([
        {
            num: 1,
            title: "Почему " +
                "выбирают нас",
            body: "Мы предлагаем множество вариантов для своих заказчиков – это может быть, как корпоративный транспорт от метро, который регулярно будет подвозить персонал в офис, так и аренда большого пассажирского автобуса, периодически доставляющего наших клиентов на различные мероприятия.",
        },
        {
            num: 2,
            title: "На какое количество людей расчитан транспорт?",
            body: "Транспорты нашей компании расчитаны на любое количетво людей",
        },
        {
            num: 3,
            title: "Что будет при поломке транспорта",
            body: "При поломке автобуса — замена на дежурный в течение 30 минут",
        },
      ])

</script>
<style>
.faq__section {
    padding: 100px 0;
}

.faq__title {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 58px;
    color: #211F54;
    margin-bottom: 60px;
}

.accordion__inner {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

@media (max-width: 768px){
.faq__title {
    font-size: 34px;
}
}
</style>