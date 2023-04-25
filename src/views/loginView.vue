<template>
    <div class="mt-8">
        <div class="container mx-auto px-8">
            <form class="justify-start space-y-6" @submit.prevent="onSubmit">
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
                        Sign In
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
                <span class="font-semibold"> I'm a new member.</span>
                <span class="ml-1">
                    <router-link
                        :to="{ name: 'Register', param: {} }"
                        class="text-[#0012FF] font-bold"
                        >Sign Up</router-link
                    >
                </span>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from "vue";
import { useSignIn } from "@/composables/useSignIn";
import { useRouter } from "vue-router";

export default {
    setup() {
        const router = useRouter();

        const { error, isPending, signin } = useSignIn();

        const email = ref("");
        const password = ref("");
        async function onSubmit() {
            await signin(email.value, password.value);
            if (!error.value) {
                router.push({ name: "Profile", params: {} });
            }
        }
        return { onSubmit, email, password, error, isPending };
    },
};
</script>

<style></style>