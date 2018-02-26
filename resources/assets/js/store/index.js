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
            },
            boards: [{
                title: 'Whatever',
                location: 'https://www.popsugar.com/entertainment/Best-Elvis-Songs-Live-43883018',
                imageUrl: 'https://media1.popsugar-assets.com/files/thumbor/GhQL-KCsBotJ8rUz0ucaQVMrwvE/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2017/08/15/657/n/1922283/tmp_k7ktFt_7049ed242d13fb7f_elvis.jpg',
                description: 'Lorem ipsum dolor set',
                date: new Date(),
                id: 'kfdlsfjslakl12'
            }]
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
            },
            boards(state) {
                return state.boards.sort((itemA, itemB) => {
                    return itemA.title < itemB.title;
                });
            },
            board(state) {
                return (itemId) => {
                    return state.boards.find((item) => {
                        return item.id === itemId
                    })
                }
            }
        },
        mutations: {
            createBoard(state, payload) {
                state.boards.push(payload)
            }
        },
        actions: {
            createBoard ({commit}, payload) {
                const board = {
                    title: payload.title,
                    location: payload.location,
                    imageUrl: payload.imageUrl,
                    description: payload.description,
                    date: payload.date,
                    id: 'kfdlsfjslakl12'
                }
                // Reach out to firebase and store it
                commit('createBoard', board)
            }
        }
    });