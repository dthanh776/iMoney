import { ref } from "vue";
import { db, collection, addDoc } from "@/configs/firebase";

const userCollection = (name) => {
    const error = ref(null);

    async function addRecord(record) {
        error.value = null;
        try {
            const response = await addDoc(collection(db, name), record);
            return response;
        } catch (err) {
            console.log(err);
            error.value = err.message;
        }
    }
    return { addRecord, error };
};

export default userCollection;
