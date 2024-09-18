import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchDataSubmit, fetchResultDataAfterTest, fetchSteps } from '../actions/stepAction'; 
import { Step } from '../actions/stepAction';
const initialState: Step = {
    steps: [],
    currentStep: 0,
    stepData: [],
    assessmentData: [],
    result: '',
    dataSubmit: [],
};

const stepSlice = createSlice({
    name: 'steps',
    initialState,
    reducers: {
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
        questionSelect(state, action) {
            state.currentStep = action.payload;
        },
        compareStep(state) {
            for (const assessment of state.assessmentData) {
                if (JSON.stringify(assessment.steps) === JSON.stringify(state.steps)) {
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
            })
            .addCase(fetchDataSubmit.fulfilled, (state, action: PayloadAction<any[]>) => {
                state.dataSubmit = action.payload;
            });
    }
});

export const { goNextStep, resetSteps, updateStep, compareStep } = stepSlice.actions;
export default stepSlice.reducer;