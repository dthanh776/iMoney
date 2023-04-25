<template>
    <header id="header" class="py-8">
        <div class="container mx-auto px-8">
            <div class="flex justify-between items-center">
                <div class="flex items-center">
                    <div
                        v-if="meta.leading"
                        class="w-10 h-10 overflow-hidden rounded-full mr-2"
                    >
                        <img
                            src="https://yt3.googleusercontent.com/-CFTJHU7fEWb7BYEb6Jh9gm1EpetvVGQqtof0Rbh-VQRIznYYKJxCaqv_9HeBcmJmIsp2vOO9JU=s900-c-k-c0x00ffffff-no-rj"
                            alt="IMG"
                            class="w-full h-auto object-cover"
                            size="sm"
                        />
                    </div>
                    <h1 class="text-xl font-bold text-[black]">
                        {{ meta.text }}
                    </h1>
                </div>
                <div class="flex">
                    <ul>
                        <li>
                            <i class="t2ico t2ico-notification text-2xl"></i>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
import { computed } from "vue";
import { useRoute } from "vue-router";

export default {
    setup() {
        const route = useRoute();

        return {
            meta: computed(() => route.meta),
        };
    },
};
</script>

<style>
</style>