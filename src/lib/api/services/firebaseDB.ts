import { getDatabase, ref, set } from "firebase/database";

import { firebase } from "lib/shared";
import { UserData } from "./firebaseDB.types";

const firebaseDatabase = getDatabase(firebase)

export const writeUserData = ({ userData, userId }: { userData: UserData, userId: string }) => {
    set(ref(firebaseDatabase, 'users/' + userId), userData);
}