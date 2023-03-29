<template>
    <section class="info__section" id="info">
        <div class="container">
            <h3 class="info__title">О нашей компании</h3>
            <div class="info__inner"  data-aos="zoom-in">
                <img class="info__img" src="/info.jpg" alt="">
                <div class="info__content">
                    <h3 class="info-content__title">COMFORT MIKRO DRIVE SERVICE</h3>
                    <p class="info-content__descr">

                      Пассажирские перевозки в Ташкентской области важно доверять профессионалам. Специализированная компания несет расходы на наем, обучение водителей и механиков. Организация вкладывает средства в покупку и техническое оснащение транспорта, обеспечивает комплектацию складов и ремонтной базы, чтобы держать автопарк в полностью исправном состоянии.

                      Пассажирские перевозки на микроавтобусах в Ташкенте требуют соблюдения жестких требований. Необходим полный контроль в осуществлении безопасности во время поездки, четкое следование инструкции водителем. Поэтому перевозка пассажиров силами профессиональной компании становится выгодным и экономически оправданным решением.

                      Предлагаем выбор автобусов для пассажирских перевозок. Мы доставляем людей на промышленные объекты, в торговые и производственные комплексы, бизнес-центры, логистические компании.
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    
}
</script>
<style>
.info__section {
    padding: 100px 0;
    background-color: #F7F9FC;
    background-image: url('/dotsback.png');
    background-position: bottom left;
    background-repeat: no-repeat;
    background-size: 400px;
}

.info__title {
    text-align: center;
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 120%;
    letter-spacing: 0.005em;
    color: #1E212C;
    margin-bottom: 32px;
}

.info__inner {
    position: relative;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    align-items: flex-start;
    overflow: hidden; 

    background: #FFFFFF;
    box-shadow: 0px 24px 24px rgba(52, 52, 147, 0.32);
    border-radius: 8px;
}

.info__inner:before {
    position: absolute;
    content: "";
    top: 20%;
    height: 60%;
    width: 4px;
    background-color: #5C5CFF;
}

.info__img {
    order: 2;
    display: block;
    grid-column: 5 span;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.info__content {
    order: 1;
    grid-column: 7 span;
    padding: 60px 40px;
}

.info-content__title {
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 120%;
    letter-spacing: 0.005em;
    color: #5C5CFF;
    margin-bottom: 30px;
}

.info-content__descr {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 19px;
    line-height: 30px;
    color: #413E52;
}

@media (max-width: 1024px){
.info__img {
    order: 1;
    grid-column: 12 span;
}

.info__content {
    order: 2;
    grid-column: 12 span;
}
}

@media (max-width: 768px){
.info__title {
    font-size: 34px;
}
}

@media (max-width: 568px){
.info__inner:before {
    top: 10%;
    height: 70%;
}

.info__content {
    padding: 50px 30px;
}

.info-content__descr {
    font-size: 16px;
}
}
</style>