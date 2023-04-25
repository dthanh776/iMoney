<template>
    <component :is="layout">
        <router-view></router-view>
    </component>
</template>


<script>
// import { db } from "./config/firebase";
// import { getDocs, collection } from "firebase/firestore";
import { useRoute } from "vue-router";
import { computed } from "vue";
import { PUBLIC_LAYOUT } from "./constants/index.js";

export default {
    setup() {
        const route = useRoute();

        return {
            layout: computed(
                () => (route.meta.layout || PUBLIC_LAYOUT) + "-layout"
            ),
        };
    },
    // setup() {
    //   async function getTransactions() {
    //     const res = await getDocs(collection(db, 'transaction'))
    //     const data = res.docs.map(doc => doc.data())
    //     return data
    //   }
    //   getTransactions()
    //   return { getTransactions }
    // }
};
</script>