<template>
    <v-container>
        <v-layout row wrap>
            <v-flex xs12>
                <v-card>
                    <v-card-title>
                        <h2 class="primary--text">{{ carouselItem.title }}</h2>
                    </v-card-title>
                    <v-card-media
                            :src="carouselItem.src"
                            height="400px"
                    ></v-card-media>
                    <v-card-text>
                        <div class="info--text">{{ carouselItem.date }}</div>
                        <div>{{ carouselItem.text }}</div>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn class="primary">Register</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        props: ['id'],
        computed: {
            carouselItem () {
                return this.$store.getters.carouselItem(this.id)
            }
        }
    }
</script>