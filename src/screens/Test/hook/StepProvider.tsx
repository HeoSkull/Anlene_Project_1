import React, { ReactNode, useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {  goBackStep, goNextStep, resetSteps, updateStep } from '../../../redux/slices/stepSlice';
import { fetchResultDataAfterTest, fetchSteps } from '../../../redux/actions/stepAction';
import { StoreState, MapDispatch } from '../../../redux/store';
import { resetUser } from '../../../redux/slices/userSlice';

interface StepProviderProps {
    children: ReactNode;
}

export const StepContext = React.createContext<any>(null);

export const StepProvider: React.FC<StepProviderProps> = ({ children }) => {
    const dispatch = useDispatch<MapDispatch>();
    const { currentStep, steps } = useSelector((state: StoreState) => state.steps);

    // fetch dữ liệu bước kiểm tra và dữ liệu đánh giá từ firebase khi component được render lần đầu 
    useEffect(() => {
        const fetchData = async () => {
            try {
                await dispatch(fetchSteps()).unwrap();
                await dispatch(fetchResultDataAfterTest()).unwrap();
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    // dùng để chuyển sang bước tiếp theo
    const handleNextStep = (value: boolean) => {
        dispatch(updateStep({ index: currentStep, value }));

        if (currentStep < steps.length - 1) {
            setTimeout(() => {
                dispatch(goNextStep());
            }, 1000);
        } else {
            console.log("End of steps. Submitting or showing the result.");
        }
    };
    
    const handleBackStep = (value: boolean) => {
        dispatch(updateStep({ index: currentStep, value }));

        if (currentStep > 0 ) {
            dispatch(resetSteps())
            dispatch(resetUser())
            dispatch(goBackStep());
        } else console.log('Arealdy at first step');
    }

    return (
        <StepContext.Provider value={{ handleNextStep, handleBackStep }}>
            {children}
        </StepContext.Provider>
    );
};

export const useSteps = () => {
    const context = useContext(StepContext);
    if (!context) {
        throw new Error('useSteps must be used within a UserProvider');
    }
    return context;
};