import { createRouter, createWebHashHistory } from "vue-router"

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "HelloWorld",
      component: () => import("@/components/HelloWorld.vue"),
    },
    {
      path: "/some",
      name: "Some",
      component: () => import("@/components/HelloWorld.vue"),
    },
  ],
})
