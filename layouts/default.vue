<template>
    <div>
        <Nuxt />
    </div>
</template>

<style lang="scss">

:root {
    --color-black: #0d0d0d;
    --color-gray: #999999;
    --color-gray2: #e6e6e6;
    --color-white: #f2f2f2;
    --color-white2: #fafafa;
    --color-blue: #2828fa;
}


//@media (prefers-color-scheme: dark) {
    //:root {
        //--color-black: #fafafa;
        //--color-gray: #f2f2f2;
        //--color-gray2: #e6e6e6;
        //--color-white: #999999;
        //--color-white2: #0d0d0d;
        //--color-blue: #2828fa;
    //}
//}


body {
    position: relative;
    margin: 0 auto;

    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    background-color: var(--color-white2);
}

h1, h2, h3, h4, h5, h6, a, p, span {
    font-family: "Montserrat", "Noto Sans JP", sans-serif;
    font-weight: 500;
    font-style: normal;
    letter-spacing: -0.03em;

    color: var(--color-black);
}

a {
    text-decoration: none;
}

img {
    width: 100%;
    display: block;
}

li {
    text-decoration: none;
    list-style: none;
}

span {
    margin-left: auto;
    display: inline;

    font-size: 18px;
    line-height: 2;
    font-weight: 600;

    padding: .5vh 2vw;

     background-color: var(--color-blue);
    color: var(--color-white);
}

.header {
    position: fixed;
    z-index: 1000;

    ul {
        position: fixed;
        top: 5vh;
        right: 3.125vw;

        li {
            margin-left: 10vw;
            display: inline-block;

            font-size: 18px;
            line-height: 2;

            &:nth-child(1) {
                margin-left: 0;
            }

            a {
                color: var(--color-black);
                
                transition: all .3s ease;

                &:hover {
                    opacity: .5;
                } 
            }

            .submit-link {
                padding: 2vh;

                background-color: var(--color-black);
                color: var(--color-white2);
                border: 1px solid var(--color-black);

                transition: all .3s ease;

                &:hover {
                    background-color: transparent;
                    color: var(--color-black);
                    opacity: 1;
                } 
            }
        }

    }
}

.a2 {
    position: fixed;
    width: 100%;
    height: 100vh;
    pointer-events: none;
    background: var(--color-black);
    z-index: 9999;
    transform: scaleY(1);
    transform-origin: top;

    animation-name: out;
    animation-duration: 1s;
    animation-delay: 2s;
    animation-timing-function: cubic-bezier(.42,.02,.04,1);
    animation-fill-mode: forwards;

    @keyframes out {
        from {
            transform: scaleY(1);
        }
        to {
            transform: scaleY(0);
        }
    }
}

.loading-logo {
    position: fixed;
    width: 60px;
    z-index: 10000;

    top: calc(50% - 30px);
    left: calc(50% - 30px);

    opacity: 1;

    animation-name: fadeout;
    animation-duration: .5s;
    animation-delay: 2s;
    animation-timing-function: ease;
    animation-fill-mode: forwards;

    @keyframes fadeout {
        from {
            opacity: 1;
        }
        to {
            opacity: 0;
        }
    }
}


.main__top {
    display: flex;
}

.side {
    flex-shrink: 1;
    width: 12.5vw;
    height: 100vh;
    
    background: var(--color-black);

    display: flex;
    flex-direction: column;
    align-items: center;

    .side__logo {
        width: 60px;
        margin: 0 auto;
        padding-top: 90px;
    }

    .side__scroll {
        padding-top: 45vh;
        margin: 0 auto;

        p {
            transform: rotate(90deg);
            font-size: 19px;
            font-weight: 300;

            color: var(--color-white);
        }

        .side__scroll__icon {
            padding-top: 10vh;
            width: 7.5px;
            margin: 0 auto;
        }
    }
}

.top {
    flex-shrink: 2;
    margin: 25vh 0;
    padding-left: 12.5vw;

    display: flex;

    .top__logo {
        flex-shrink: 1;
        width: 360px;
    }

    .top__title {
        flex-shrink: 2;
        position: relative;
        top: -5px;
  
        padding-left: 6.25vw;
        padding-right: 12.5vw;

        h1 {
            font-size: 78px;
            font-weight: 600;
        }

        h3 {
            margin-top: 2.5vh;
        }

        .top__submit-link {      
            margin-top: 5vh;

            a {
                display: inline-block;

                padding: 2vh;
                background-color: var(--color-black);
                color: var(--color-white2);
                border: 1px solid var(--color-black);

                transition: all .3s ease;

                &:hover {
                    background-color: transparent;
                    color: var(--color-black);
                } 
            }
            
        }
    }

    .top__bg {
        position: absolute;
        display: block;
        z-index: -2;

        top: 15vh;
        left: 7.5vw;

        div {
            white-space: nowrap;
            display: block;
        }

        p {
            font-size: 250px;
            font-weight: 600;
            font-style: italic;
            line-height: 1;

            color: var(--color-gray2);
        }   
    }
}



.main__release {
    position: relative;
    padding: 25vh 25vh;
    z-index: -2;

    background-color: var(--color-white);

    .neft64 {
        position: absolute;

        top: -1vh;
        right: 6.25vw;
        z-index: 100;

        transform: rotate(90deg);

        p {
            font-size: 21px;
        }
    }

    .release__bg {
        position: absolute;
        display: block;
        z-index: -1;

        top: 10vh;
        left: 5vw;

        div {
            white-space: nowrap;
            display: block;
        }

        p {
            font-size: 250px;
            font-weight: 300;
            font-style: italic;
            line-height: 1;

            color: var(--color-gray2);
        }   
    }

    .main__release__title {
        display: flex;
        align-items: center;

        h2 {
            font-size: 78px;
            font-weight: 600;
        }

        h3 {
            margin-left: auto;
            display: inline;

            font-size: 18px;
            line-height: 2;
            font-weight: 600;

            padding: .5vh 2vw;

            background-color: var(--color-black);
            color: var(--color-white2);
        }
    }

    .main__release__posts {
        padding: 6.25vh 0;

        .main__release__post {
            position: relative;
            
            margin-top: 6.25vh;
            display: flex;

            transition: all 0.3s ease;

            &:hover {
                opacity: .5;
            }

            .thumbnail {
                flex-shrink: 2;

                width: 100%;
                height: 25vh;

                background-size:cover;
                background-position: center;
            }

            .post__title {
                flex-shrink: 1;
                
                text-align: right;
                white-space: nowrap;
                margin-left: 7.5vw;
                right: .5vw;

                h2 {
                    font-size: 48px;
                    font-weight: 600;                   
                }

                h3 {
                    font-size: 24px;
                    font-weight: 600;
                }
            }

        }

        
    }

    .release__view-all {
        position: relative;
        margin-top: 6.25vh;

        text-align: center;

        a {
            display: inline-block;

            padding: 2vh 3vw;
            background-color: var(--color-black);
            color: var(--color-white2);
            border: 1px solid var(--color-black);

            transition: all .3s ease;

            &:hover {
                background-color: transparent;
                color: var(--color-black);
            } 
        }
            
    }
}

.main__artists {
    position: relative;
    padding: 25vh 25vh;
    z-index: -2;

    background-color: var(--color-black);

    

    .artists__bg {
        position: absolute;
        display: block;
        z-index: -1;

        top: 10vh;
        left: 15vw;

        div {
            white-space: nowrap;
            display: block;
        }

        p {
            font-size: 250px;
            font-weight: 300;
            font-style: italic;
            line-height: 1;

            color: #333333;
        }   
    }

    .main__artists__title {
        display: flex;
        align-items: center;

        h2 {
            font-size: 78px;
            font-weight: 600;

            color: var(--color-white);
        }

        h3 {
            margin-left: auto;
            display: inline;

            font-size: 18px;
            line-height: 2;
            font-weight: 600;

            padding: .5vh 2vw;

            background-color: var(--color-white);
            color: var(--color-black);
        }
    }

    .main__artists__flex {
        display: flex;
        flex-wrap: wrap;

        padding: 6.25vh 0;
    }

    .artist__margin {
        margin-top: 6.25vh;
        margin-right: 6.25vw;
    }

    .main__artist {
        position: relative;

        display: flex;
        align-items: center;

        transition: all 0.3s ease;

        

        &:hover {
            opacity: .5;
        }

        .artist__icon {
            display: block;
            overflow: hidden;
            width: 120px;
            border-radius: 60px;
        }

        .artist__name {
            padding-left: 6.25vh;
            h2 {
                font-size: 48px;
                font-weight: 600;

                color: var(--color-white);
            }
        }
    }

    .artists__view-all {
        position: relative;
        margin-top: 6.25vh;

        text-align: center;

        a {
            display: inline-block;

            padding: 2vh 3vw;
            background-color: var(--color-white);
            color: var(--color-black);
            border: 1px solid var(--color-white);

            transition: all .3s ease;

            &:hover {
                background-color: transparent;
                color: var(--color-white);
            } 
        }
            
    }
}

.main__contact {
    padding: 25vh 25vh;
    background-image: url(https://images.microcms-assets.io/assets/41e28d6a63a641ada3a04f0904512c63/9da95c00b2ee49b483c62e73af8f4d83/videoedit_image.jpg);
    background-position: center;
    background-size: cover;

    .main__contact__title {
        align-items: center;

        h2 {
            font-size: 78px;
            font-weight: 600;

            color: var(--color-white);
        }
    }

    .contact__detail {
        display: flex;
        justify-content: space-between;
    }

    .contact__submit-video, .contact__other-inquiries {
        margin-top: 10vh;

        .submit-video__title, .other-inquiries__title {

            h2 {
                font-size: 70px;
                font-weight: 600;

                color: var(--color-white);
            }

            h3 {
                font-size: 34px;
                font-weight: 600;

                color: var(--color-white);
            }
        }

        .submit-video__detail, .other-inquiries__detail {
            margin-top: 5vh;

            p {
                font-size: 19px;
                font-weight: 400;
                color: var(--color-white);
            }

            .submit-video__detail__submit-link {     
                margin-top: 7.5vh;

                a {
                    display: inline-block;

                    padding: 2vh;
                    background-color: transparent;
                    color: var(--color-white);
                    border: 1px solid var(--color-white);

                    transition: all .3s ease;

                    &:hover {
                        background-color: var(--color-white);
                        color: var(--color-black);
                    } 
                }
            
            }
        }

        .other-inquiries__title h2, .other-inquiries__detail, .other-inquiries__mail {
            text-align: right;

            p {
                line-height: 2;
            }
        }

        .other-inquiries__mail {
            display: block;

            transition: all 0.3s ease;

            &:hover {
                opacity: .5;
            }
        }

        .other-inquiries__mail__detail {
            margin-top: 5vh;
            display: flex;
            align-content: center;
            align-items: center;
            justify-content: flex-end;

            .mail__icon {
                width: 32px;
                margin-right: 16px;
            }

            p {
                font-size: 24px;
                color: var(--color-white);
            }
        }
    }
}

.footer {
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 10vh 0;
    background-color: var(--color-gray);
    
    .footer__logo {
        width: 60px;
    }

    p {
        padding-left: 2.5vw;
        font-size: 16px;
        font-weight: 400;
        color: var(--color-white);
    }
}

@media screen and (max-width: 1440px) {

    .side {
        display: none;
    }

    .main__release {
        .main__release__posts {
            .main__release__post {           
                display: block;

                .post__title {
                    margin-left: 0;
                    margin-top: 1vh;
                }
            }
        }
    }

    .main__contact {
        .contact__detail {
            display: block;
        }

        .contact__submit-video, .contact__other-inquiries {
            .other-inquiries__title h2, .other-inquiries__detail, .other-inquiries__mail {
                text-align: left;
            }

            .other-inquiries__mail__detail {
                justify-content: flex-start;
            }
        }
    }
}

@media screen and (max-width: 1024px) {
    .header {
        ul {
            right: 5vh;
        }
    }
    

    .top {
        display: block;
        padding: 0 12.5vw;

        .top__logo {
            margin: 0 auto;
            text-align: center;

            width: 30vw;
        }

        .top__title {
            top: 0;

            padding-top: 10vh;
            padding-left: 0;
            padding-right: 0;

            text-align: center;
        }
    }

    .main__release, .main__artists, .main__contact {
        padding: 10vh 10vh;
    }

}

@media screen and (max-width: 768px) {
    .header {
        ul {
            li {
                margin-left: 5vw;

                &:nth-child(-n+3) {
                    display: none;
                }
            }
        }
    }

    .top {
        .top__title {
            h1 {
                font-size: 54px;
            }
        }

        .top__logo {
            width: 40vw;
        }
    }

    .main__release {
        .neft64 {
            right: 2.5vw;
        }

        .main__release__title {
            display: block;

            h3 {
                padding: 1vh 4vw;

                line-height: 3;
            }
        }

        .release__view-all {
            margin-top: 0;

            a {
                padding: 2vh 4vh;
            }
        }

        
    } 
    
    .main__artists {
        .main__artists__title {
            display: block;

            h3 {
                padding: 1vh 4vw;

                line-height: 3;
            }
        }

        .artists__view-all {
            margin-top: 0;

            a {
                padding: 2vh 4vh;
            }
        }

    }

    .footer {
        padding: 5vh 0;

        .footer__logo {
            width: 40px;
        }

        p {
            font-size: 12px;
        }
    }
}

@media screen and (max-width: 600px) {

    .header ul li .submit-link {
        padding: 0 ;
        background-color: transparent;
        color: var(--color-black);
        border: 0;
    }

    .top {
        .top__logo {
            width: 30vw;
        }
        .top__title {
            padding-top: 5vh;

            h1 {
                font-size: 48px;
            }
        }
    }

    .main__release {
        .neft64 {
            display: none;
        }

        .main__release__title {
            h2 {
                font-size: 54px;
            }   
        }

        .main__release__posts {
            .main__release__post {
                .post__title {
                    h2 {
                        font-size: 36px;
                    }

                    h3 {
                        font-size: 16px;
                    }
                }
            }
        }
    }

    .main__artists {
        .main__artists__title {
            h2 {
                font-size: 54px;
            } 
        }

        .main__artists__flex {
            padding: initial;
            padding-top: 2.5vh;
            padding-bottom: 6vh;
        }

        .main__artist {
            .artist__icon {
                width: 90px;
            }
            .artist__name {
                h2 {
                    font-size: 36px;
                }
            }
        }
    }

    .main__contact {
        .main__contact__title {
            h2 {
                font-size: 54px;
            } 
        }
    }

    .main__release, .main__artists, .main__contact {
        padding: 6vh 6vh;
    }

    .main__contact .contact__submit-video .submit-video__title h2, .main__contact .contact__submit-video .other-inquiries__title h2, .main__contact .contact__other-inquiries .submit-video__title h2, .main__contact .contact__other-inquiries .other-inquiries__title h2 {
        font-size: 54px;
    }

    .main__contact .contact__submit-video .other-inquiries__mail__detail p, .main__contact .contact__other-inquiries .other-inquiries__mail__detail p {
        font-size: 16px;
    }

    .main__contact .contact__submit-video .submit-video__title h3, .main__contact .contact__submit-video .other-inquiries__title h3, .main__contact .contact__other-inquiries .submit-video__title h3, .main__contact .contact__other-inquiries .other-inquiries__title h3 {
        font-size: 24px;
    }

    .main__contact .contact__submit-video .other-inquiries__mail__detail .mail__icon, .main__contact .contact__other-inquiries .other-inquiries__mail__detail .mail__icon {
        width: 24px;
    }

    .main__contact .contact__submit-video .submit-video__detail p, .main__contact .contact__submit-video .other-inquiries__detail p, .main__contact .contact__other-inquiries .submit-video__detail p, .main__contact .contact__other-inquiries .other-inquiries__detail p {
        font-size: 16px;
    }
}

@media screen and (max-width: 600px) {
    .top {
        margin: 20vh 0;
        padding: 0 6vw;
    }
}

@media screen and (max-width: 425px) {
    .main__release, .main__artists, .main__contact {
        padding: 6vh 3vh;
    }

    .main__artists .artist__margin {
        margin-top: 3vh;
    }

    .main__contact .contact__submit-video, .main__contact .contact__other-inquiries {
        margin-top: 5vh;
    }

    .main__contact .contact__submit-video .submit-video__title h2, .main__contact .contact__submit-video .other-inquiries__title h2, .main__contact .contact__other-inquiries .submit-video__title h2, .main__contact .contact__other-inquiries .other-inquiries__title h2 {
        font-size: 48px;
    }
}

</style>