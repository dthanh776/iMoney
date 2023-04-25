<template>
    <!-- Start: Info -->
    <div class="row" v-if="user">
        <div class="container mx-auto mt-8">
            <div class="text-center">
                <div class="w-24 h-24 rounded-full overflow-hidden mx-auto">
                    <img
                        class="w-full h-auto object-cover"
                        src="https://yt3.googleusercontent.com/-CFTJHU7fEWb7BYEb6Jh9gm1EpetvVGQqtof0Rbh-VQRIznYYKJxCaqv_9HeBcmJmIsp2vOO9JU=s900-c-k-c0x00ffffff-no-rj"
                        alt="User profile avatar"
                        size="xs"
                    />
                </div>
                <div class="font-bold text-2xl text-[#0012FF]">
                    {{ user.displayName }}
                </div>
                <p class="font-semibold text-gray-400 mt-1">
                    {{ user.email }}
                </p>
            </div>
        </div>
    </div>

    <!-- Start: Menu -->
    <div class="row">
        <div class="container mx-auto px-8">
            <div class="giid grid-cols-1">
                <div class="col-span-1">
                    <h3 class="font-bold text-xl text-[#0012FF] mb-2">
                        General
                    </h3>
                </div>
                <div class="col-span-1">
                    <ul>
                        <li
                            v-for="(profileOption, index) in profileOptions"
                            :key="index"
                        >
                            <router-link
                                :to="profileOption.route"
                                class="flex justify-between items-center py-3"
                            >
                                <div
                                    class="flex items-center text-left"
                                    :class="{
                                        'text-red-500':
                                            index === profileOptions.length - 1,
                                    }"
                                >
                                    <i
                                        class="t2ico text-2xl"
                                        :class="profileOption.icon"
                                    >
                                    </i>
                                    <h5 class="font-semibold ml-3">
                                        {{ profileOption.name }}
                                    </h5>
                                </div>
                                <div class="text-right">
                                    <i class="t2ico t2ico-arrow-right"></i>
                                </div>
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { reactive } from "vue";
import { PROFILE_OPTIONS } from "@/constants/index";
import { useUser } from "@/composables/useUser";

export default {
    setup() {
        const profileOptions = reactive(PROFILE_OPTIONS);

        const { getUser } = useUser();
        const { user } = getUser();
        return { profileOptions, user };
    },
};
</script>

<style>
</style>