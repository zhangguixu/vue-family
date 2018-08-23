// 挂载router
const routes = require('routes');

const router = new VueRouter({
    routes
})

const App = new Vue({
    router,
    el: "#app",
    mounted() {
        console.log("mounted");
    }
})