<template>
    <v-container>
        <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
                <v-card>
                    <v-toolbar color="primary" dark>
                        <v-toolbar-side-icon></v-toolbar-side-icon>
                        <v-toolbar-title>My Boards</v-toolbar-title>
                        <v-spacer></v-spacer>
                        <v-btn icon>
                            <v-icon>search</v-icon>
                        </v-btn>
                    </v-toolbar>
                    <v-list two-line>
                        <template v-for="(board, index) in boards">
                            <v-list-tile :key="board.id" @click="">
                                <v-list-tile-content>
                                    <v-list-tile-title v-html="board.description"></v-list-tile-title>
                                    <v-list-tile-sub-title v-html="board.date"></v-list-tile-sub-title>
                                </v-list-tile-content>
                            </v-list-tile>
                        </template>
                    </v-list>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
    export default {
        computed: {
            boards () {
                return this.$store.getters.boards
            }
        }
    }
</script>