//configure store

import {configureStore} from '@reduxjs/toolkit';
import productreducer from './Reducer';

export const store=configureStore({
    reducer:{
        products:productreducer
    }
})