import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
    routes: [{
            path: '/playing/:id',
            name: 'playing',
            component: require("@/pages/playing")
        },
        {
            path: '/fm',
            name: 'fm'
        },
        {
            path: '/search',
            name: 'search',
            component: require("@/pages/search")
        },
        {
            path: '/sortmv',
            name: 'sortmv'
        }, {
            path: '/playlist/:id',
            name: 'playlist',
            component: require("@/pages/playlist")
        }, {
            path: '/album/:id',
            name: 'album',
            component: require("@/pages/album")
        }, {
            path: '/comment/:id',
            name: 'comment',
            component: require("@/pages/comments")
        }, {
            path: '/artist/:id',
            name: 'artist',
            component: require("@/pages/artist")
        }, {
            path: '/login',
            name: 'login',
            component: require("@/pages/login")
        }, {
            path: '/home',
            name: 'home',
            component: require("@/pages/home/home"),
            children: [{
                path: "index",
                name: 'index',
                component: require("@/pages/home/index/index"),
                children: [{
                    path: 'find',
                    component: require("@/pages/home/index/find")
                }, {
                    path: 'playlist',
                    component: require("@/pages/home/index/playlist")
                }, {
                    path: 'djlist',
                    component: require("@/pages/home/index/djlist")
                }, {
                    path: 'sort',
                    component: require("@/pages/home/index/sort")
                }]
            }, {
                path: 'recsongs',
                name: 'recsongs'
            }]
        }, {
            path: '*',
            redirect: '/home/index/find'
        }
    ]
})