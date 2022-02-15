import { User } from "firebase/auth";

export interface UserData extends Partial<User> {
    onboarded?: boolean;
    username?: string;
    avatar_url?: string;
}