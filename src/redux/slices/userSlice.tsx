import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserState, addUser } from "../actions/userAction"; 
import { Alert } from "react-native";

const initialState: UserState = {
    fullName: '',
    phone: '',
    email: '',
    isChecked: false
};

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        resetUser: (state) => {
            Object.assign(state, initialState);
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(addUser.pending, () => console.log('Đang thêm người dùng...'))
            .addCase(addUser.fulfilled, (state, action: PayloadAction<UserState>) => {
                Object.assign(state, action.payload);
                console.log('Thêm người dùng thành công');
            })
            .addCase(addUser.rejected, (state, action) => {
                console.error('Thêm người dùng thất bại:', action.error.message);
            });
    },
});


export const { resetUser } = userSlice.actions;

export default userSlice.reducer;
