import { createAsyncThunk } from "@reduxjs/toolkit";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../../db";
import { StoreState } from "../store";

export interface UserState {
    fullName: string;
    phone: string;
    email: string;
    checked: boolean;
}

// Async action để thêm người dùng vào Firebase
export const addUser = createAsyncThunk(
    'users/addUser',
    async (user: UserState, { getState }) => {
        const state = getState() as StoreState;
        const { steps, result } = state.steps; // Truy cập vào steps và result từ StepSlice

        // Thêm người dùng vào Firestore
        await addDoc(collection(db, 'users'), {
            fullName: user.fullName,
            phone: user.phone,
            email: user.email,
            resultStep: steps,
            result: result,
            checked: user.checked
        });

        // Trả về dữ liệu người dùng để sử dụng trong fulfilled case
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