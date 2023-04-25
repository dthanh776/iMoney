import { ref } from "vue";
import {
    auth,
    updateProfile,
    createUserWithEmailAndPassword,
} from "@/configs/firebase";

const error = ref(null);
const isPending = ref(false);

async function signup(email, password, fullName) {
    error.value = null;
    isPending.value = true;

    try {
        const response = await createUserWithEmailAndPassword(
            auth,
            email,
            password
        );

        if (!response) throw new Error("Couldn't create user");
        await updateProfile(response.user, { displayName: fullName });
        return response;
    } catch (err) {
        console.log("a", err);
        error.value = err.message;
    } finally {
        isPending.value = false;
    }
}
export function useSignUp() {
    return { error, isPending, signup };
}
