<template>
    <div class="mt-8">
        <div class="container mx-auto px-8">
            <form class="justify-start space-y-6" @submit.prevent="onSubmit">
                <div class="row">
                    <label class="flex flex-col" for="fullName">
                        <span class="font-semibold">Full Name</span>
                        <input
                            id="fullName"
                            class="px-4 py-3 rounded-lg border border-gray-100 mt-1"
                            type="text"
                            placeholder="iMoney"
                            v-model="fullName"
                        />
                    </label>
                </div>

                <div class="row">
                    <label class="flex flex-col" for="email">
                        <span class="font-semibold">Email Address</span>
                        <input
                            id="email"
                            class="px-4 py-3 rounded-lg border border-gray-100 mt-1"
                            type="text"
                            placeholder="email@gmail.com"
                            v-model="email"
                        />
                    </label>
                </div>

                <div class="row">
                    <label class="flex flex-col" for="password">
                        <span class="font-semibold">Password</span>
                        <input
                            id="password"
                            class="px-4 py-3 rounded-lg border border-gray-100 mt-1"
                            type="password"
                            placeholder="password"
                            v-model="password"
                        />
                    </label>
                </div>

                <div class="row">
                    <button
                        v-if="!isPending"
                        type="submit"
                        class="rounded-lg font-bold text-white text-center w-full py-3 bg-[#0012FF]"
                    >
                        Sign Up
                    </button>
                    <button
                        v-else
                        type="button"
                        class="cursor-not-allowed rounded-lg font-bold text-white text-center w-full py-3 bg-[#0012FF]"
                        disabled
                    >
                        Loading...
                    </button>
                </div>
            </form>

            <!-- Error -->
            <div v-if="error" class="text-left mt-4 text-red-500">
                <span>{{ error }}</span>
            </div>
            <div class="w-full text-center mt-6">
                <span class="font-semibold"> I'm already a member.</span>
                <span class="ml-1">
                    <router-link
                        :to="{ name: 'Login', param: {} }"
                        class="text-[#0012FF] font-bold"
                        >Sign In</router-link
                    >
                </span>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from "vue";
import { useSignUp } from "@/composables/useSignUp";
import { useRouter } from "vue-router";

export default {
    setup() {
        const router = useRouter();

        const { error, isPending, signup } = useSignUp();

        const fullName = ref("");
        const email = ref("");
        const password = ref("");

        async function onSubmit() {
            await signup(email.value, password.value, fullName.value);

            if (!error.value) {
                router.push({ name: "Home", params: {} });
            }
        }

        return { onSubmit, fullName, email, password, error, isPending };
    },
};
</script>

<style></style>
