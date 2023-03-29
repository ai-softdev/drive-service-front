<template>
    <section class="experience__section" id="experience">
        <div class="container">
            <div class="experience__inner">
                <div class="experience__left" data-aos="fade-right">
                    <img src="/experience.png" alt="">
                </div>
                <div class="experience__right" data-aos="fade-left">
                    <h3 class="experience__title">Более 10 лет опыта в перевозке пассажиров</h3>
                    <p class="experience__subtitle">Пассажирские перевозки в городе Ташкенте - по городам Узбекистан. Транспортные услуги в автомобилях VIP класса всегда к Вашим услугам! В автопарке находятся надежные микроавтобусы, внедорожники и седаны бизнес класса с професиональными водителями, отлично знающие центральные города Узбекистана, областные центры и горные места страны. Организуем также авто путешествия по достопримечательным местам страны, по городам, в горные места.</p>
                    <ul class="numbers__list list__reset">
                        <li class="numbers-list__item">
                            <div class="numbers-item__content">
                                <number
                                    class="experience__number"
                                    ref="number2"
                                    :from="100"
                                    :to="2494"
                                    :duration="2"
                                    :delay="0"
                                    easing="Power1.easeOut"
                                />
                                <span class="experience__span">+</span>
                            </div>
                            <p class="experience__descr">Перевезённых пассажиров</p>
                        </li>
                        <li class="numbers-list__item">
                            <div class="numbers-item__content">
                                <number
                                    class="experience__number"
                                    ref="number2"
                                    :from="100"
                                    :to="500"
                                    :duration="2"
                                    :delay="0"
                                    easing="Power1.easeOut"
                                />
                              <span class="experience__span">+</span>

                            </div>
                            <p class="experience__descr">Машин</p>
                        </li>
                        <li class="numbers-list__item">
                            <div class="numbers-item__content">
                                <number
                                    class="experience__number"
                                    ref="number2"
                                    :from="100"
                                    :to="300"
                                    :duration="2"
                                    :delay="0"
                                    easing="Power1.easeOut"
                                />
                                <span class="experience__span">+</span>
                            </div>
                            <p class="experience__descr">Отзывов</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    // Sets the format of the number
    methods: {
        theFormat(number) {
            return number.toFixed(2);
        },
        completed() {
        },
        playAnimation() {
            this.$refs.number2.play()
        }
    }
}
</script>
<style>
.experience__section {
    padding: 100px 0;
    background: url('/dotsback.png');
    background-position: top right;
    background-repeat: no-repeat;
    background-size: 400px;
}

.experience__inner {
    display: flex;
    align-items: center;
    gap: 48px;
}

.experience__left {
    max-width: 50%;
    width: 100%;
    border-radius: 14px;
    box-shadow: 0px 4px 10px rgba(20, 20, 43, 0.04);
    overflow: hidden;
}

.experience__left  img {
    display: block;
    width: 100%;
    object-fit: cover;
}

.experience__right {
    max-width: 60%;
    padding: 50px;
    border: 1px solid #EFF0F6;
    box-shadow: 0px 4px 10px rgba(20, 20, 43, 0.04);
    background-color: #FFFFFF;
    border-radius: 14px;
}

.experience__title {
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 120%;
    letter-spacing: 0.005em;
    color: #1E212C;
    margin-bottom: 32px;
}

.experience__subtitle {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 30px;
    color: #6E7191;
    margin-bottom: 30px;
}

.numbers__list {
    display: flex;
    align-items: flex-start;
    gap: 80px;
}

.numbers-list__item {
    max-width: 200px;
}

.numbers-item__content {
    margin-bottom: 16px;
}

.experience__number {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 54px;
    line-height: 66px;
    color: #211F54;
}

.experience__span {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 54px;
    line-height: 66px;
    color: #004583;
    margin-left: 10px;
}

.experience__descr {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
    color: #6E7191;
}

@media (max-width: 1230px){
.experience__inner {
    flex-direction: column;
}

.experience__left {
    order: 2;
}

.experience__right {
    order: 1;
    max-width: 100%;
}

.numbers__list {
    justify-content: center;
}
}

@media (max-width: 1024px) {
.experience__left {
    order: 2;
    max-width: 80%;
}
}
@media (max-width:768px) {
.numbers__list {
    flex-direction: column;
    align-items: center;
}

.experience__descr {
    text-align: center;
}
}

@media (max-width: 568px){
.experience__title {
    font-size: 35px;
}

.experience__subtitle {
    font-size: 16px;
}

.experience__left {
    display: none;
}

.experience__right {
    padding: 35px;
}
}

</style>