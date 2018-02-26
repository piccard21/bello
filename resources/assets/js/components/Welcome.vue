<template>
    <v-container grid-list-md fluid>
        <v-layout row wrap>
            <v-flex xs12>
                    <v-jumbotron color="primary lighten-2" dark>
                        <v-container fill-height>
                            <v-layout align-center>
                                <v-flex>
                                    <h3 class="display-3">Bello</h3>
                                    <span class="subheading">A materialized Trello clone based on Laravel & Vue</span>
                                    <v-divider class="my-3"></v-divider>
                                    <div class="title mb-3">Check out our newest features!</div>
                                    <v-btn large color="primary" class="mx-0">See more</v-btn>
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </v-jumbotron>
            </v-flex>
        </v-layout>
        <v-layout row wrap>
            <v-flex xs12 sm6 class="text-xs-center text-sm-right">
                <v-btn large to="/signup" class="primary">Signup</v-btn>
            </v-flex>
            <v-flex xs12 sm6 class="text-xs-center text-sm-left">
                <v-btn large to="/login" class="primary">Login</v-btn>
            </v-flex>
        </v-layout>
        <v-layout row wrap>
            <v-flex xs12>
                <v-carousel class="carousel">
                    <v-carousel-item v-for="(item,i) in carouselItems" :src="item.src" :key="i">
                        <div class="title"  @click="onLoadCarouselItem(item.id)">
                            {{ item.title }}
                        </div>
                    </v-carousel-item>
                </v-carousel>
            </v-flex>
        </v-layout>
        <v-layout row wrap>
            <v-flex xs12 sm6>
                <v-card>
                    <v-card-media
                            class="white--text"
                            height="200px"
                            src="http://lorempixel.com/400/200/nature"
                    >
                        <v-container fill-height fluid>
                            <v-layout fill-height>
                                <v-flex xs12 align-end flexbox>
                                    <span class="headline">Top 10 Australian beaches</span>
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </v-card-media>
                    <v-card-title>
                        <div>
                            <h3 class="headline mb-0">Lorem ipsum</h3>
                            <span class="grey--text">11.04.2154</span><br>
                            <span>Whitehaven Beach</span><br>
                            <span>Whitsunday Island, Whitsunday Islands</span>
                        </div>
                    </v-card-title>
                    <v-card-actions>
                        <v-btn flat color="info">Share</v-btn>
                        <v-btn flat color="info">Explore</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
            <v-flex xs12 sm6>
                <v-card>
                    <v-card-media src="http://lorempixel.com/400/200/fashion" height="200px">
                    </v-card-media>
                    <v-card-title primary-title>
                        <div>
                            <h3 class="headline mb-0">Kangaroo Valley Safari</h3>
                            <span class="grey--text">21.02.2121</span><br>
                            <div>Located two hours south of Sydney in the <br>Southern Highlands of New South Wales, ...</div>
                        </div>
                    </v-card-title>
                    <v-card-actions>
                        <v-btn flat color="info">Share</v-btn>
                        <v-btn flat color="info">Explore</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        name: 'App',
        computed: {
            carouselItems() {
               return this.$store.getters.carouselItems;
            }
        },
        methods: {
            onLoadCarouselItem(id) {
                this.$router.push('/carousel/' + id)
            }
        }
    }
</script>

<style scope>
    .carousel .title {
        position: absolute;
        bottom: 50px;
        background: rgba(0,0,0,.5);
        color: #fff;
        font-size: 2rem;
        padding: 20px;
    }
</style>