import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchResultDataAfterTest, fetchSteps } from '../actions/stepAction'; 

interface Step {
    steps: any[];
    currentStep: number;
    stepData: any[];
    assessmentData: any[];
    result: string;
}

const initialState: Step = {
    steps: [],
    currentStep: 0,
    stepData: [],
    assessmentData: [],
    result: ''
};

const stepSlice = createSlice({
    name: 'steps',
    initialState,
    reducers: {
        goBackStep(state) {
            state.currentStep = Math.max(state.currentStep - 1, 0);
        },
        goNextStep(state) {
            state.currentStep = Math.min(state.currentStep + 1, state.steps.length - 1);
        },
        updateStep(state, action: PayloadAction<{ index: number, value: boolean | null }>) {
            const { index, value } = action.payload;
            if (index >= 0 && index < state.steps.length) {
                state.steps[index] = value;
            }
        },
        resetSteps(state) {
            state.currentStep = 0;
            state.steps = Array(state.stepData.length).fill(null);
            state.result = '';
        },
        compareStepsWithFirebase(state) {
            for (const assessment of state.assessmentData) {
                if (JSON.stringify(state.steps) === JSON.stringify(assessment.steps)) {
                    state.result = assessment.result;
                    return;
                }
            }
            state.result = "No matching result";
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchResultDataAfterTest.fulfilled, (state, action: PayloadAction<any[]>) => {
                state.assessmentData = action.payload;
            })
            .addCase(fetchSteps.fulfilled, (state, action: PayloadAction<any[]>) => {
                state.stepData = action.payload;
                state.steps = Array(action.payload.length).fill(null);
                console.log('steps', state.steps);
            });
    }
});

export const { goBackStep, goNextStep, resetSteps, updateStep, compareStepsWithFirebase } = stepSlice.actions;
export default stepSlice.reducer;