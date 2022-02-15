import { writeUserData } from "../services/firebaseDB"

export const useDatabase = () => {
    const setupUserEntry = (userId: string) => writeUserData({ userData: { onboarded: false }, userId })

    return {
        setupUserEntry
    }
}