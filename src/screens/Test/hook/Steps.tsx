import React, { ReactNode, useContext, useEffect, createContext, FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {  compareStep, goNextStep, updateStep } from '../../../redux/slices/stepSlice';
import { fetchResultDataAfterTest, fetchSteps } from '../../../redux/actions/stepAction';
import { StoreState, MapDispatch } from '../../../redux/store';

interface StepProps {
    children: ReactNode;
}

export const StepContext = createContext<any>(null);

export const StepProvider: FC<StepProps> = ({ children }) => {
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
    
    useEffect(()=> {
        console.log("Current step:", currentStep);
        console.log("Steps:", steps);
        const checkResult = async () => {
            if (currentStep === steps.length - 1 && steps[currentStep] !== null) {
                dispatch(compareStep());
            }
        };
        checkResult();
    },[currentStep, steps, dispatch]); 

    // dùng để chuyển sang bước tiếp theo
    const handleNextStep = (value: boolean) => {

        dispatch(updateStep({ index: currentStep, value }));
        if (currentStep < steps.length - 1) {
            setTimeout(() => {
                dispatch(goNextStep());
            }, 1000);
        } else console.log("End of steps. Submitting or showing the result.");
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