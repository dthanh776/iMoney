<template>
    <footer id="footer" class="fixed w-full bottom-0 bg-slate-400 py-4">
        <div class="container mx-auto px-8 h-full">
            <ul class="flex justify-between h-full items-center">
                <li v-for="navItem in navItems" :key="navItem.name">
                    <router-link :to="{ name: navItem.name, params: {} }"
                        ><i class="t2ico text-2xl" :class="navItem.icon"></i
                    ></router-link>
                </li>
            </ul>
        </div>

        <div
            data-circle
            class="absolute left-1/2 top-0 transform -translate-x-1/2"
        ></div>
        <div
            data-circle-inset
            class="flex -top-6 left-1/2 transform absolute -translate-x-1/2 items-center cursor-pointer justify-center bg-[#0012ff] text-white w-12 h-12 rounded-full"
            @click="gotoRouter"
        >
            <i class="t2ico t2ico-plus"></i>
        </div>
    </footer>
</template>
<script>
import { reactive } from "vue";
import { NAV_BOTTOM_ITEMS } from "@/constants/index";
import { useRouter } from "vue-router";

export default {
    setup() {
        const router = useRouter();

        const navItems = reactive(NAV_BOTTOM_ITEMS);

        function gotoRouter() {
            router.push({ name: "NewTransaction", params: {} });
        }
        return { navItems, gotoRouter };
    },
};
</script>

<style scoped>
footer#footer > div[data-circle] {
    background-color: #f8fafb;
    width: 60px;
    height: 30px;
    border-bottom-left-radius: 60px;
    border-bottom-right-radius: 60px;
}

footer#footer ul li:nth-child(2) {
    margin-right: 14%;
}
</style>