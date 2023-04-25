<template>
    <navigation-header></navigation-header>
    <navigation-bottom v-if="meta.isShowFooter"></navigation-bottom>
    <slot></slot>
</template>

<script>
import { useRoute } from "vue-router";
import { computed } from "vue";
import NavigationBottom from "@/components/NavigationBottom.vue";
import NavigationHeader from "@/components/NavigationHeader.vue";

export default {
    components: {
        NavigationBottom,
        NavigationHeader,
    },

    setup() {
        const route = useRoute();

        return { meta: computed(() => route.meta) };
    },
};
</script>

<style></style>
