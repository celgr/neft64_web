<template>
    <div>
        <div class="header">
            <ul>
                <li><nuxt-link v-scroll-to="'#top'" to>Neft64</nuxt-link></li>
                <li><nuxt-link v-scroll-to="'#release'" to>Release</nuxt-link></li>
                <!--<li><nuxt-link v-scroll-to="'#artist'" to>Artist</nuxt-link></li>-->
                <li><nuxt-link class="submit-link" v-scroll-to="'#contact'" to>CONTACT / SUBMIT DEMO</nuxt-link></li>
            </ul>
        </div>

        <div>
            <div class="a2"></div>
            <div class="loading-logo"><img src="https://images.microcms-assets.io/assets/41e28d6a63a641ada3a04f0904512c63/e059d4a1852143e0aecbf40ca3b7af8d/neft_logo.svg" alt="logo"></div>
        </div>

        <div id="luxy" class="main">
            <div id="top" class="main__top">
                <div class="side">
                    <div class="side__logo">
                        <img src="https://images.microcms-assets.io/assets/41e28d6a63a641ada3a04f0904512c63/e059d4a1852143e0aecbf40ca3b7af8d/neft_logo.svg" alt="logo">
                    </div>
                    <div class="side__scroll">
                        <p>SCROLL</p>
                        <div class="side__scroll__icon">
                            <img src="https://images.microcms-assets.io/assets/41e28d6a63a641ada3a04f0904512c63/f08058a8a15a486d9f66e12639c54056/scroll.svg" alt="scroll">
                        </div>
                    </div>
                </div>

                <div class="top">
                    <div class="top__logo">
                        <img src="https://images.microcms-assets.io/assets/41e28d6a63a641ada3a04f0904512c63/e4384bd9f201497887ab8cfee4114204/neft_logo_black.svg" alt="logo">
                    </div>
                    <div class="top__title">
                        <h1>Neft64 is japanese internet video label.</h1>
                        <h3>Neft64は日本のインターネットビデオレーベルです。</h3>
                        <div class="top__submit-link">
                            <nuxt-link v-scroll-to="'#contact'" to>SUBMIT DEMO</nuxt-link>
                        </div>
                    </div>

                    <div class="top__bg">
                        <div class="luxy-el" data-horizontal="1" data-speed-x="10">
                            <p>Neft64 is japanese</p> 
                        </div>
                        <div 
                            class="luxy-el"
                            data-horizontal="1"
                            data-speed-x="-10"
                            style=
                            "
                                padding-left: 25vw;
                            "  
                        >
                            <p>internet</p> 
                        </div>
                        <div
                            class="luxy-el"
                            data-horizontal="1"
                            data-speed-x="5"
                            style=
                            "
                                padding-left: -10vw;
                            "
                        >
                            <p>video label.</p> 
                        </div>
                    </div>
                </div>
            </div>

            <div id="release" class="main__release">
                <div class="neft64">
                    <p>Neft64</p>
                </div>
                <div class="release__bg">
                    <div class="luxy-el" data-horizontal="1" data-speed-x="-5">
                        <p>Release</p> 
                    </div>
                </div>
                
                <div class="main__release__title">
                    <h2>Release</h2>
                    <h3>Recent</h3>
                </div>
                <div class="main__release__posts">
                    <div v-for="post in posts" :key="post.id">
                        <a :href="`${ post.youtube_url }`">
                            <div class="main__release__post">
                                <div class="thumbnail" :style="`background-image: url(${ post.thumbnail.url });`"></div>
                                <div class="post__title">
                                    <h2> {{ post.title }} </h2>
                                    <h3> {{ post.artist.name }} </h3>
                                </div>
                            </div>                 
                        </a>
                    </div>
                </div>

                <!--
                <div class="release__view-all">
                    <nuxt-link to="/release">View All</nuxt-link>
                </div>
                -->
            </div>

            <!--
            <div id="artist" class="main__artists">
                <div class="artists__bg">
                    <div class="luxy-el" data-horizontal="1"  data-speed-x="-5">
                        <p>Artist</p> 
                    </div>
                </div>
                <div class="main__artists__title">
                    <h2>Artist</h2>
                    <h3>Recent</h3>

                </div> 
                <div class="main__artists__flex">
                    <div v-for="artist in artists" :key="artist.id">
                        <div class="artist__margin">
                            <a :href="`https://twitter.com/${artist.twi_id}`">
                                <div class="main__artist">
                                    <div class="artist__icon">
                                        <img :src="`${ artist.icon.url }`" alt="artist">
                                    </div>
                                    <div class="artist__name">
                                        <h2> {{ artist.name }} </h2>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                
                <div class="artists__view-all">
                    <nuxt-link to="/artist">View All</nuxt-link>
                </div>
            </div>
            
            -->

            <div id="contact" class="main__contact">
                <div class="main__contact__title">
                    <h2>Contact</h2>
                </div>
                <div class="contact__detail">
                    <div class="contact__submit-video">
                        <div class="submit-video__title">
                            <h2>Submit video</h2>
                            <h3>Have a demo to submit?</h3>
                        </div>
                        <div class="submit-video__detail">
                            <p>こちらの応募フォームから作品を提出してください</p>
                            <div class="submit-video__detail__submit-link">
                                <a href="https://docs.google.com/forms/d/e/1FAIpQLSdhByOJh6Qb9HDxaXnMIZ2muTLvZOTZ_VgLFiCW7Ypx6w7hfA/viewform">SUBMIT DEMO</a>
                            </div>
                        </div>
                    </div>

                    <div class="contact__other-inquiries">
                        <div class="other-inquiries__title">
                            <h2>Other inquiries</h2>
                        </div>
                        <div class="other-inquiries__detail">
                            <p>その他のお問い合わせはこちらからお願い致します<br>(作品の提出は受け付けておりません)</p>
                        </div>
                        <a class="other-inquiries__mail" href="mailto:neft64.official@gmail.com">
                            <div class="other-inquiries__mail__detail">
                                <div class="mail__icon">
                                    <img src="https://images.microcms-assets.io/assets/41e28d6a63a641ada3a04f0904512c63/0085b008e1394d3e86d1fcfdc0c11419/mail_icon.svg" alt="mail">
                                </div>                           
                                <p>neft64.official@gmail.com</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <div class="footer">
                <div class="footer__logo">
                    <img src="https://images.microcms-assets.io/assets/41e28d6a63a641ada3a04f0904512c63/e059d4a1852143e0aecbf40ca3b7af8d/neft_logo.svg" alt="logo">
                </div>   
                <p>2022 © Neft64 All Rights Reserved</p>
            </div>
        </div>  
    </div>
</template>

<script>
import { gql } from 'graphql-request';

export default {
    async asyncData({ $graphcms }) {
        const { posts } = await $graphcms.request(
            gql`
                {
                    posts (orderBy: id_DESC) {
                        id
                        title
                        youtube_url
                        inline_url
                        use_inline

                        artist {
                            id
                            name
                            twi_id
                        }

                        music {
                            id
                            music_title
                            music_artist
                            music_url
                        }

                        thumbnail {
                            url
                        }
                    }
                }
            `
        );

        const { artists } = await $graphcms.request(
            gql`
                {
                    artists (orderBy: id_DESC) {
                        id
                        name
                        twi_id

                        icon {
                            url
                        }
                    }
                }
            `
        );

        return { posts, artists };        

    },

    mounted(){
        luxy.init();
    }
}

</script>
