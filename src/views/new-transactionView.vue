<template>
    <form @submit.prevent="onSubmit">
        <!-- Start: Main form -->
        <div class="row mt-8">
            <div class="bg-white rounded-lg py-4">
                <div class="container mx-auto px-8">
                    <div class="row">
                        <label for="total" class="flex items-end">
                            <div class="w-10 text-right leading-10 mr-4 pb-1">
                                <span
                                    class="inline-block px-1 text-[black] border border-[black] rounded text-sm font-bold"
                                    >USD</span
                                >
                            </div>
                            <div
                                class="flex flex-col border-b border-gray-100 pb-1"
                            >
                                <span class="font-semibold text-xs text-[black]"
                                    >Total</span
                                >
                                <input
                                    type="text"
                                    id="total"
                                    class="text-4xl text-[black] w-full outline-none mt-1"
                                    placeholder="0"
                                    v-model.number="total"
                                />
                            </div>
                        </label>
                    </div>
                    <div class="row">
                        <label for="category" class="flex items-center">
                            <div
                                class="flex flex-none items-center w-10 text-right leading-10 mr-4"
                            >
                                <span
                                    class="inline-block ml-auto w-8 h-8 rounded-full bg-blue-300"
                                ></span>
                            </div>
                            <div class="flex-1 border-b border-gray-100 py-3">
                                <input
                                    id="category"
                                    type="text"
                                    class="text-xl text-[black] w-full outline-none mt-1"
                                    placeholder="Select a category"
                                    v-model="category"
                                />
                            </div>
                        </label>
                    </div>
                    <div class="row">
                        <label for="note" class="flex items-center">
                            <div
                                class="flex flex-none items-center w-10 text-right leading-10 mr-4"
                            >
                                <span class="flex-none w-10 text-right"
                                    ><i
                                        class="t2ico t2ico-document text-2xl"
                                    ></i
                                ></span>
                            </div>
                            <div class="flex-1 border-b border-gray-100 py-3">
                                <input
                                    id="note"
                                    type="text"
                                    class="text-xl text-[black] w-full outline-none mt-1"
                                    placeholder="Note"
                                    v-model="note"
                                />
                            </div>
                        </label>
                    </div>
                    <div class="row">
                        <label for="time" class="flex items-center">
                            <div class="flex-none w-10 mr-4">
                                <span
                                    class="flex items-center justify-end text-[black]"
                                    ><i
                                        class="t2ico t2ico-calendar text-2xl"
                                    ></i
                                ></span>
                            </div>
                            <div class="flex-1 py-2 border-b border-gray-100">
                                <div class="text-[black] w-full">
                                    {{ new Date() }}
                                </div>
                            </div>
                        </label>
                    </div>
                    <div class="row">
                        <label for="wallet" class="flex items-center">
                            <div class="flex-none w-10 mr-4">
                                <span
                                    class="flex items-center justify-end text-[black]"
                                    ><i class="t2ico t2ico-wallet text-2xl"></i
                                ></span>
                            </div>
                            <div class="flex-1 py-2">
                                <div class="text-[black] w-full">My wallet</div>
                            </div>
                        </label>
                    </div>
                </div>
            </div>
        </div>

        <div class="row mt-8" v-if="!isMoreDetails">
            <button
                @click="isMoreDetails = true"
                class="bg-white rounded-lg py-3 w-full text-[#0012FF] font-semibold"
            >
                More Details
            </button>
        </div>
        <div class="row mt-8" v-if="isMoreDetails">
            <button
                @click="isMoreDetails = false"
                class="bg-white rounded-lg py-3 w-full text-[#0012FF] font-semibold"
            >
                Collapse
            </button>
        </div>
        <template v-if="isMoreDetails">
            <!-- Advanced form -->
            <div class="row mt-8">
                <div class="bg-white rounded-lg py-4">
                    <div class="container mx-auto px-8">
                        <div class="row">
                            <label for="location" class="flex items-center">
                                <div
                                    class="flex flex-none items-center w-10 text-right leading-10 mr-4"
                                >
                                    <span class="flex-none w-10 text-right"
                                        ><i
                                            class="t2ico t2ico-location text-2xl"
                                        ></i
                                    ></span>
                                </div>
                                <div
                                    class="flex-1 border-b border-gray-100 py-3"
                                >
                                    <input
                                        id="location"
                                        type="text"
                                        class="text-xl text-[black] w-full outline-none mt-1"
                                        placeholder="Select a location"
                                        v-model="location"
                                    />
                                </div>
                            </label>
                        </div>
                        <div class="row">
                            <label for="withPerson" class="flex items-center">
                                <div class="flex-none w-10 mr-4">
                                    <span
                                        class="flex items-center justify-end text-[black]"
                                        ><i
                                            class="t2ico t2ico-users text-2xl"
                                        ></i
                                    ></span>
                                </div>
                                <div class="flex-1 py-2">
                                    <input
                                        id="person"
                                        type="text"
                                        class="text-xl text-[black] w-full outline-none mt-1"
                                        placeholder="With person"
                                        v-model="person"
                                    />
                                </div>
                            </label>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Upload photo -->
            <div class="row mt-8">
                <div class="bg-white rounded-lg py-4">
                    <div class="container mx-auto px-8">
                        <div class="row">
                            <label
                                for="file"
                                class="flex items-center text-[#0012FF]"
                            >
                                <div class="flex-none w-10 mr-4">
                                    <span class="flex items-center justify-end"
                                        ><i
                                            class="t2ico t2ico-camera text-2xl"
                                        ></i
                                    ></span>
                                </div>
                                <div class="flex-1 py-2">
                                    <div class="w-full font-semibold">
                                        Upload photos
                                        <input
                                            id="file"
                                            type="file"
                                            class="w-0 h-0 overflow-hidden absolute"
                                            @change="onChangeFile"
                                        />
                                    </div>
                                </div>
                            </label>
                        </div>
                    </div>
                </div>
                <div class="text-red-600 my-3 text-center">{{ errFile }}</div>
            </div>
        </template>

        <button class="bg-[#0012FF]">Test</button>
    </form>
</template>

<script>
import { ref } from "vue";
import { useUser } from "@/composables/useUser";
import userCollection from "@/composables/useCollections";
import useStorage from "@/composables/useStorage";

export default {
    setup() {
        const { getUser } = useUser();
        const { user } = getUser();

        const { error, addRecord } = userCollection("transaction");
        const { uploadFile, url } = useStorage("transaction");

        const isMoreDetails = ref(false);

        const total = ref(0);
        const category = ref("");
        const note = ref("");
        const time = ref(new Date());
        const file = ref(null);
        const errFile = ref(null);

        const location = ref("");
        const person = ref("");

        const onChangeFile = (e) => {
            const selected = e.target.files[0];
            const typeFile = ["image/jpeg", "image/png"];

            if (selected && typeFile.includes(selected.type)) {
                file.value = selected;
            } else {
                file.value = null;
                errFile.value = "Please select a file type png or jpeg";
            }
        };

        const onSubmit = async () => {
            if (file.value) await uploadFile(file.value);

            const transactions = {
                total: total.value,
                category: category.value,
                note: note.value,
                time: time.value,
                location: location.value,
                person: person.value,

                userID: user.value.uid,
                thumbnail: url.value,
            };
            await addRecord(transactions);

            console.log(addRecord);
            console.log(error);
        };

        return {
            isMoreDetails,
            onSubmit,
            total,
            category,
            note,
            time,
            onChangeFile,
            errFile,
            location,
            person,
        };
    },
};
</script>

<style></style>
