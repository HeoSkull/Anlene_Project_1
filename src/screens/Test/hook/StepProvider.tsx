import React, { ReactNode, useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { compareStepsWithFirebase, goBackStep, goNextStep, updateStep } from '../../../redux/slices/stepSlice';
import { fetchResultDataAfterTest, fetchSteps } from '../../../redux/actions/stepAction';
import { StoreState, MapDispatch } from '../../../redux/store';

interface StepProviderProps {
    children: ReactNode;
}

export const StepContext = React.createContext<any>(null);

export const StepProvider: React.FC<StepProviderProps> = ({ children }) => {
    const dispatch = useDispatch<MapDispatch>();
    const { currentStep, steps, result } = useSelector((state: StoreState) => state.steps);

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

    // // kiểm tra kết quả bài test khi đã chọn hết các bước kiểm tra
    useEffect(() => {
        console.log("Checking result...");
        console.log("Current step:", currentStep);
        console.log("Steps:", steps);
        const checkResult = async () => {
            if (currentStep === steps.length - 1 && steps[currentStep] !== null) {
                dispatch(compareStepsWithFirebase());
            }
        };

        checkResult();
    }, [steps, result, dispatch]);


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


    return (
        <StepContext.Provider value={{ handleNextStep }}>
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