import { createAsyncThunk } from "@reduxjs/toolkit";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../../db/db";
import { StoreState } from "../store";

export interface UserState {
    fullName: string;
    phone: string;
    email: string;
    isChecked: boolean;
}

export const addUser = createAsyncThunk(
    'users/addUser',
    async (user: UserState, { getState }) => {
        const state = getState() as StoreState;
        const { steps, result } = state.steps;

        // Thêm người dùng vào Firestore
        await addDoc(collection(db, 'users'), {
            ...user,
            resultStep: steps,
            result: result,
        });
        return user;
    }
);

export const checkPhoneExist = createAsyncThunk(
    'users/checkPhoneExist',
    async (phone: string) => {
        const q = query(collection(db, 'users'), where('phone', '==', phone));
        const querySnapshot = await getDocs(q);
        return !querySnapshot.empty;
    }
);