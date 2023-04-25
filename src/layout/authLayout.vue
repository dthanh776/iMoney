<template>
    <h1>Auth layous</h1>
    <navigation-brand></navigation-brand>
    <slot></slot>
</template>

<script>
import NavigationBrand from "@/components/NavigationBrand.vue";
export default {
    components: {
        NavigationBrand,
    },
};
</script>

<style></style>