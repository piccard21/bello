<template>
    <v-app fixed app>

        <v-navigation-drawer
                fixed
                v-model="drawer"
                app>
            <v-list dense>
                <v-list-tile router :to="item.link" v-for="item in menuItems" :key="item.title">
                    <v-list-tile-action>
                        <v-icon>{{item.icon}}</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>{{item.title}}</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>

        <v-toolbar color="blue darken-3" dark fixed app>
            <v-toolbar-side-icon
                    @click.stop="drawer = !drawer"
                    class="hidden-sm-and-up"></v-toolbar-side-icon>
            <v-btn icon class="hidden-xs-only">
                <v-icon>spa</v-icon>
            </v-btn>
            <v-toolbar-title>
                <router-link to="/" tag="span" style="cursor: pointer;">Bello</router-link>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items class="hidden-xs-only">
                <v-btn flat v-for="item in menuItems" :key="item.title" :to="item.link"><v-icon left>{{item.icon}}</v-icon>{{item.title}}</v-btn>
            </v-toolbar-items>
        </v-toolbar>

        <v-content>
            <router-view/>
        </v-content>

    </v-app>
</template>

<script>
    export default {
        name: 'App',
        data: () => ({
            drawer: null,
            menuItems: [{
                icon: 'accessibility',
                title: 'Welcome',
                link: '/'
            },{
                icon: 'home',
                title: 'Home',
                link: '/home'
            },{
                icon: 'add',
                title: 'Board',
                link: '/board'
            },{
                icon: 'list',
                title: 'Boards',
                link: '/boards'
            },{
                icon: 'lock_open',
                title: 'Login',
                link: '/login'
            },{
                icon: 'mode_edit',
                title: 'Sign Up',
                link: '/signup'
            }]
        })
    }
</script>
