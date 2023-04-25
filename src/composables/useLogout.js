import { ref } from "vue";
import { auth, signOut } from "@/configs/firebase";

async function logout() {
    error.value = null;

    try {
        const response = await signOut(auth);
        return response;
    } catch (err) {
        console.log(err);
        error.value = err.message;
    }
}

const error = ref(null);

export function useLogout() {
    return { error, logout };
}
