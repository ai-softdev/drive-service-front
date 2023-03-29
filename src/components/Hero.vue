<template>
  <section class="hero" id="hero">
    <div class="container">
      <div class="hero__inner">
        <div class="hero__content" style="max-width: 64% !important;" data-aos="fade-right">
          <h1 class="hero__title">
            Идеальный способ перевезти вас и ваши товары
          </h1>
          <p class="hero__subtitle">
            Компания "COMFORT MIKRO DRIVE SERVICE" специализируется на перевозке пассажиров. Мы заботимся о безопасности клиентов, строго соблюдаем нормативно-правовые акты и скоростной режим. </p>
          <p class="hero__subtitle">
            Для этого пришлите ваши пожелания и контактную информацию нам на почту или позвоните
          </p>
          <div class="hero__socials" style="">
            <a class="hero-social__item mail " style="max-width: 100% !important; width: 100%;" href="mailto:drive.service.uz@gmail.com">
              <img src="/mailhero.svg" alt="">
              drive.service.uz@gmail.com
            </a>
            <a class="hero-social__item phone"  style="max-width: 320px !important;" href="tel:933960004">
              <img src="/phonehero.svg" alt="">
              +998 93 396 00 04
            </a>
            <a class="hero-social__item phone"  style="max-width: 320px !important;" href="tel:933960004">
              <img src="/phonehero.svg" alt="">
              +998 99 396 00 04
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {};
</script>
<style>

.hero {
  padding: 150px 0;
  background: linear-gradient(84.62deg, rgba(0, 69, 131, 0.7) 0.29%, rgba(0, 69, 131, 0.7) 46.08%, rgba(0, 0, 0, 0) 84.81%),
  url('/hero.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

}
.hero__inner {
  display: flex;
  align-items: center;
  gap: 10px;
}

.hero__content {
  max-width: 50%;
  width: 100%;
}

.hero__title {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 38px;
  line-height: 127.47%;
  letter-spacing: -0.5px;
  text-transform: uppercase;
  color: #FFFFFF;
  margin-bottom: 22px;
}

.hero__subtitle {
  max-width: 450px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 127.47%;
  letter-spacing: -0.5px;
  color: #FFFFFF;
}

.hero__subtitle:not(:last-child) {
  margin-bottom: 20px;
}

.hero__subtitle:last-child {
  font-weight: 400;
}

.hero__socials {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 30px;
}

.hero-social__item {
  max-width: 270px;
  width: 100%;
  padding-right: 20px;
  display: flex;
  align-items: center;
  gap: 9px;
  border-radius: 36px;
  border: 1px solid #FFFFFF;

  font-family: "Roboto";
  font-style: normal;
  font-weight: 600;
  font-size: 21px;
  line-height: 127.47%;
  letter-spacing: -0.5px;
  color: #FFFFFF;
  transition: 0.3s ease-in-out;
}

.hero-social__item:hover {
  background-color: #FFFFFF;
  color: #0075FF;
}

.hero-social__item img {
  width: 70px;
  height: 70px;
}

.hero__img {
  max-height: 645px;
  height: 100%;
  overflow: hidden;
  z-index: -1;
}

.hero__img img {
  width: 100%;
  object-fit: cover;
}

@media (max-width: 1024px){
.hero__content {
  max-width: 80%;
}
}

@media (max-width: 586px){
.hero__content {
  max-width: 100%;
}
}

@media (max-width: 586px){
.hero__title {
  font-size: 34px;
}

.hero-social__item {
  font-size: 18px;
}
}
</style>
