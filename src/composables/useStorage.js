import { ref } from "vue";
import {
    storage,
    refStore,
    getDownloadURL,
    uploadBytes,
} from "@/configs/firebase";
import { useUser } from "@/composables/useUser";

const { getUser } = useUser();
const { user } = getUser();

const useStorage = (name) => {
    const error = ref(null);
    const filePath = ref(null);
    const url = ref(null);

    async function uploadFile(file) {
        filePath.value = `${name}/${user.value.uid}/${file.name}`;
        console.log("name: " + name);
        console.log("user: " + user.value.uid);
        console.log("file: " + file.name);

        const fileRef = refStore(storage, filePath.value);

        try {
            const response = await uploadBytes(fileRef, file);
            url.value = await getDownloadURL(response.ref);
            return url.value;
        } catch (err) {
            console.log(err);
            error.value = err.message;
        }
    }
    return { uploadFile, filePath, url, error };
};

export default useStorage;
