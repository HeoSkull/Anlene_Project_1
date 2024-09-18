// context/UserContext.tsx
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { MapDispatch } from '../../../redux/store';
import { addUser, checkPhoneExist } from '../../../redux/actions/userAction';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { fetchDataSubmit } from '../../../redux/actions/stepAction';

type UserProps = {
    user: {
        fullName: string;
        phone: string;
        email: string;
        isChecked: boolean;
    };
    setUser: React.Dispatch<React.SetStateAction<{
        fullName: string;
        phone: string;
        email: string;
        isChecked: boolean;
    }>>;
    handleSubmit: () => Promise<void>;
    full: boolean;
}

const UserContext = createContext<UserProps | undefined>(undefined);

export const UserProvider: React.FC<{children: ReactNode}> = ({ children }) => {
    const navigation = useNavigation<NavigationProp<any>>();
    const dispatch = useDispatch<MapDispatch>();
    const [full, setFull] = useState(false);

    const [user, setUser] = useState({
        fullName: '',
        phone: '',
        email: '',
        isChecked: false,
    });
    
    const resetUser = () => {
        setUser({
            fullName: '',
            phone: '',
            email: '',
            isChecked: false,
        });
    };
    
    useEffect(() => {
        if (user.fullName && user.phone) {
            setFull(true);
        } else {
            setFull(false);
        }
    }, [user.fullName, user.phone]);

    useEffect(()=> {
        dispatch(fetchDataSubmit());
    },[dispatch])
    
    const handleSubmit = async () => {
        try {
            const phoneExisted = await dispatch(checkPhoneExist(user.phone)).unwrap();
            if (phoneExisted) {
                alert('Số điện thoại đã tồn tại!');
                return;
            }

            await dispatch(addUser(user)).unwrap();
            alert('Người dùng đã được thêm thành công!');
            navigation.navigate('Trang 4');
            resetUser();
        } catch (error) {
            console.error('Lỗi khi thêm người dùng:', error);
            alert('Đã xảy ra lỗi, vui lòng thử lại.');
        }
    };



    return (
        <UserContext.Provider value={{ user, setUser, handleSubmit, full }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('useUser must be used within a UserProvider');
    }
    return context;
};
