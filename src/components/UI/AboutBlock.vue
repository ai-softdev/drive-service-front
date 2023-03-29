<template>
    <div class="about__block" data-aos="zoom-in">
        <div class="about-block__item" v-for="(element, i) of aboutCards" :key="i">
            <div class="about-block__img">
                <img :src="element.img" alt="search">
            </div>
            <h3 class="about-block__title">{{element.title}}</h3>
            <p class="about-block__descr">{{element.subtitle}}</p>
        </div>
    </div>
</template>
<script setup>
    const aboutCards = [
        {
            img: "search.svg",
            title: 'Легко найти',
            subtitle: 'Можно выбрать транспорт из нашего автопарка на необходимое количество мест'
        },
        {
            img: "price.svg",
            title: 'Комфорт',
            subtitle: 'Все автобусы современные, чистые и высококомфортабельные'
        },
        {
            img: "quick.svg",
            title: 'Быстрый сервис',
            subtitle: 'За 30 минут до посадки подается автобус, чтобы люди не ждали на улице'
        },
    ]
</script>
<style>
.about__block {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    gap: 100px;
}

.about-block__item {
    padding: 30px 40px;
    max-width: 378px;
    display: flex;
    align-items: center;
    flex-direction: column;

    border: 1px solid #EFF0F6;
    box-shadow: 0px 2px 6px rgba(20, 20, 43, 0.04);
    border-radius: 16px;
}

.about-block__img {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 180px;
    height: 180px;
    background: #FFFFFF;
    border-radius: 470px;
    margin-bottom: 36px;
    box-shadow: 0px 22px 52px rgb(0 0 0 / 13%);
}

.about-block__img img {
    width: 72px;
    height: 72px;
}

.about-block__title {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 34px;
    text-align: center;
    color: #211F54;
    margin-bottom: 13px;
}

.about-block__descr {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 21px;
    line-height: 30px;
    text-align: center;
    color: #6E7191;
}

@media (max-width: 1230px) {
.about__block {
    gap: 60px;
}
}

@media (max-width: 1000px) {
.about__block {
    grid-template-columns: repeat(1, 1fr);
}

.about-block__item {
    margin: 0 auto;
}
}

@media (max-width: 768px){
.about-block__descr {
    font-size: 17px;
}
}
</style>