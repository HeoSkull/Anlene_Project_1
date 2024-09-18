import { createAsyncThunk } from '@reduxjs/toolkit';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../../db/db';

export interface Step {
    steps: any[];
    currentStep: number;
    stepData: any[];
    assessmentData: any[];
    result: string;
    dataSubmit: any[]
}
export const fetchResultDataAfterTest = createAsyncThunk(
    'steps/fetchResultDataAfterTest',
    async () => {
        const querySnapshot = await getDocs(collection(db, 'result_after_test'));
        const resultData = querySnapshot.docs.map(doc => doc.data());
        console.log('resultData: ', resultData);
        return resultData;
    }
);

export const fetchSteps = createAsyncThunk(
    'steps/fetchSteps',
    async () => {
        const querySnapshot = await getDocs(collection(db, 'steps'));
        const stepData = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
        console.log('steps: ', stepData)
        return stepData;
    }
);

export const fetchDataSubmit = createAsyncThunk(
    'data/fetchDataSubmit',
    async () => {
        const dataSubmitSnapshot = await getDocs(collection(db, 'dataSubmit'));
        const dataSubmit = dataSubmitSnapshot.docs.map(doc => doc.data());
        return dataSubmit;
    }
);