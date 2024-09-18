import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserState, addUser } from "../actions/userAction"; 


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
            state.fullName = '';
            state.phone = '';
            state.email = '';
            state.isChecked = false;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(addUser.pending, (state) => {
                // Xử lý trạng thái loading nếu cần
                console.log('Đang thêm người dùng...');
            })
            .addCase(addUser.fulfilled, (state, action: PayloadAction<UserState>) => {
                // Cập nhật state với dữ liệu người dùng sau khi thành công
                state.fullName = action.payload.fullName;
                state.phone = action.payload.phone;
                state.email = action.payload.email;
                state.isChecked = action.payload.isChecked;
                console.log('Thêm người dùng thành công');
            })
            .addCase(addUser.rejected, (state, action) => {
                console.error('Thêm người dùng thất bại:', action.error.message);
            });
    },
});


export const { resetUser } = userSlice.actions;

export default userSlice.reducer;
