import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store(
    {
        state: {
            carouselItems: [{
                src: 'http://lorempixel.com/600/400/fashion',
                id: '111',
                title: 'New York',
                date: '2017-07-17',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
            }, {
                src: 'http://lorempixel.com/600/400/animals',
                id: '222',
                title: 'Paris',
                date: '2017-03-12',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
            }, {
                src: 'http://lorempixel.com/600/400/sports/',
                id: '333',
                title: 'Berlin',
                date: '2017-01-17',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
            }],
            user: {
                id: 1,
                boards: ['asdasd']
            }
        },
        getters: {
            carouselItems(state) {
                // nach irgendwas sortieren
                return state.carouselItems.sort((itemA, itemB) => {
                    return itemA.date < itemB.date;
                });
            },
            carouselItem(state) {
                return (itemId) => {
                    return state.carouselItems.find((item) => {
                        return item.id === itemId
                    })
                }
            }

        },
        mutations: {},
        actions: {}
    });