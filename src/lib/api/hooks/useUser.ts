import { useState } from 'react';

import { firebaseGetUserData } from 'lib/authentication';
import {
  setUserDatabaseEntry as firebaseSetUserDatabaseEntry,
  getUserDatatabaseEntry as firebaseGetUserDatabaseEntry,
} from '../services/firebaseDB';
import { UserData } from '../services/firebaseDB.types';

const useUser = () => {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [isLoadingUserData, setIsLoadingUserData] = useState(true);

  const setupUserEntry = (userId: string) =>
    firebaseSetUserDatabaseEntry({ userData: { onboarded: false }, userId });

  firebaseGetUserData(async (user) => {
    if (user && !userData) {
      const userDatabaseData = await firebaseGetUserDatabaseEntry(user.uid);
      setUserData({ ...user, ...userDatabaseData });
    }

    setIsLoadingUserData(false);
  });

  const isAuthenticated = !!userData;

  return {
    setupUserEntry,
    userData,
    isAuthenticated,
    isLoadingUserData,
  };
};

export default useUser;
