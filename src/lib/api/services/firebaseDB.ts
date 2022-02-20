import { getDatabase, ref, set, get } from 'firebase/database';

import { firebase } from 'lib/shared';
import { UserData } from './firebaseDB.types';

const firebaseDatabase = getDatabase(firebase);

export const setUserDatabaseEntry = ({
  userData,
  userId,
}: {
  userData: UserData;
  userId: string;
}) => {
  set(ref(firebaseDatabase, `users/${userId}`), userData);
};

export const getUserDatatabaseEntry = async (
  userId: string
): Promise<UserData> => {
  const snapshot = await get(ref(firebaseDatabase, `users/${userId}`));
  return snapshot.val();
};
