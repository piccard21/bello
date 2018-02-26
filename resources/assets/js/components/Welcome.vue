<template>
    <v-container grid-list-md text-xs-center fluid>
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
                <v-btn large router to="/signup" class="primary">Signup</v-btn>
            </v-flex>
            <v-flex xs12 sm6 class="text-xs-center text-sm-left">
                <v-btn large router to="/login" class="primary">Login</v-btn>
            </v-flex>
        </v-layout>
        <v-layout row wrap>
            <v-flex xs12>
                <v-carousel class="carousel">
                    <v-carousel-item v-for="(item,i) in imgItems" :src="item.src" :key="i">
                        <div class="title">
                            {{ item.title }}
                        </div>
                    </v-carousel-item>
                </v-carousel>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        name: 'App',
        data: () => ({
            imgItems: [{
                src: 'https://www.housingwire.com/ext/resources/images/editorial/A-New-Big-Images/states/New-York-City.jpg?1453402066',
                id: '111',
                title: 'New York'
            },{
                src: 'https://static.pexels.com/photos/338515/pexels-photo-338515.jpeg',
                id: '222',
                title: 'Paris'
            },{
                src: 'https://michaellanglois.fr/medias/berlin_1920x800.jpg',
                id: '333',
                title: 'Berlin'
            }]
        })
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