import { ref } from "vue";
import { auth, signInWithEmailAndPassword } from "@/configs/firebase";

async function signin(email, password) {
    error.value = null;
    isPending.value = true;

    try {
        const response = await signInWithEmailAndPassword(
            auth,
            email,
            password
        );
        return response;
    } catch (err) {
        console.log(err);
        error.value = err.message;
    } finally {
        isPending.value = false;
    }
}

const error = ref(null);
const isPending = ref(false);

export function useSignIn() {
    return { error, isPending, signin };
}
