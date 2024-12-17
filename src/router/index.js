//用于构建路由器
import Vue from 'vue'
import VueRouter from "vue-router";

Vue.use(VueRouter);

import HelloWorld from "../components/HelloWorld";
import Game from "../components/Game";
import Game1 from "../components/Game1";


const router = new VueRouter({
    routes:[
        {
            path:'/',
            component: Game,
            meta: { title: 'huanying'}
        },
        {
            path:'/home',
            component: Game1,
            meta: { title: 'welcome'}
        },
        {
            path:'/hh',
            component:HelloWorld,
            meta: { title: 'huanying'}
        }
    ]
});

export default router;