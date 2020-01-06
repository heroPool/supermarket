import Vue from 'vue';
import VueRouter from 'vue-router';


const Home = () => import('../views/home/Home')
const Cart = () => import('../views/cart/Cart')
const Category = () => import('../views/category/Category')
const Profile = () => import('../views/profile/Profile')


// 安装插件
// 创建对象
// 导出
Vue.use(VueRouter);

const routes = [
    //默认打开的
    {
        path: '',
        redirect: '/home'
    },
    {
        path: '/home',
        name: '首页',
        // 元数据
        meta: {
            title: 'home'
        },
        component: Home
    },
    {
        path: '/category',
        name: '购物车',
        component: Category
    }
    ,
    {
        path: '/cart',
        name: '分类',
        component: Cart
    }
    ,
    {
        path: '/profile',
        name: '我的',
        component: Profile
    }
]
const router = new VueRouter({
    routes,
    mode: 'history'
})

// 前置钩子（守卫）
// router.beforeEach(function (to, from, next) {
//     // 修改网页标题
//     // document.title = to.matched[0].meta.title
//     document.title = to.name;
//     // 必须调用next
//     next()
// })

export default router
