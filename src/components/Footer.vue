<template>
    <footer id="contact" class="footer">
        <div class="container">
            <div class="footer__inner">
                <p class="copyright">&copy; COMFORT MIKRO DRIVE SERVICE - {{new Date().getFullYear()}}</p>
                <!-- <a href="#" class="footer__logo">AI DEVELOPMENT GENERATION</a>
                <div class="footer__socials">
                    <a class="footer__social phone" href="tel:909999999">+998999999999</a>
                    <a class="footer__social mail" href="mailto:qwerty@gmail.com">qwerty@gmail.com</a>
                </div> -->
            </div>
        </div>
    </footer>
</template>
<script>
export default {
    
}
</script>
<style>
.footer {
    padding: 20px 0;
    background-color: #eff1f9;
}  

.footer__inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.footer__socials {
    display: flex;
    align-items: center;
    gap: 30px;
}

.footer__logo {
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-size: 14px;
    line-height: 150%;
    color: #787A80;
}

.footer__social {
    display: block;
    padding-left: 30px;
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    color: #1E212C;
    transition: 0.3s ease-in-out;

    background-position: left center;
    background-repeat: no-repeat;
    background-size: 24px;
}

.footer__social.phone {
    background-image: url(phone.svg);
}

.footer__social.mail {
    background-image: url(mail.svg);
}

.footer__social:hover {
    color: #8760fb;
}

.copyright {
    text-align: center;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 30px;
    color: #6E7191;
}
</style>