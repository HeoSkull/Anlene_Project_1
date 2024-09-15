import { createAsyncThunk } from '@reduxjs/toolkit';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../db/db';

export const fetchResultDataAfterTest = createAsyncThunk(
    'steps/fetchResultDataAfterTest',
    async () => {
        const querySnapshot = await getDocs(collection(db, 'result_after_test'));
        const resultData = querySnapshot.docs.map(doc => doc.data());
        return resultData;
    }
);

export const fetchSteps = createAsyncThunk(
    'steps/fetchSteps',
    async () => {
        const querySnapshot = await getDocs(collection(db, 'steps'));
        const stepData = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
        return stepData;
    }
);