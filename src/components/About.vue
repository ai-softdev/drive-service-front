<template>
    <section id="about" class="about__section">
        <div class="container">
            <h1 class="about__title">Почему выбирают нас</h1>
            <about-block></about-block>
        </div>
    </section>
</template>
<script>
export default {
    
}
</script>
<style>
.about__section {
    padding: 100px 0;
    background-color: #F7F9FC;
}

.about__title {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 600;
    font-size: 45px;
    line-height: 126%;
    text-align: center;
    color: #1E212C;
    margin-bottom: 60px;
}

@media (max-width: 768px){
.about__title {
    font-size: 34px;
}
}
</style>