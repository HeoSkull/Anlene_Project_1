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
    useEffect(() => {
        setFull(!!(user.fullName && user.phone));
    }, [user.fullName, user.phone]);

    useEffect(()=> {
        dispatch(fetchDataSubmit());
    },[dispatch])
    
    const handleSubmit = async () => {
        try {
            const phoneExisted = await dispatch(checkPhoneExist(user.phone)).unwrap();
            if (phoneExisted) {
                alert('Số điện thoại đã được sử dụng!');
                return;
            }

            await dispatch(addUser(user)).unwrap();
            navigation.navigate('Trang 4');
            setUser({ fullName: '', phone: '', email: '', isChecked: false });
        } catch (error) {
            console.error('Error when adding user:', error);
            alert('Đã xảy ra lỗi, vui lòng thử lại sau!');
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
