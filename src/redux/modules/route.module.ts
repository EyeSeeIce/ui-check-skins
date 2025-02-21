import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store.ts';

export type TStep = 'gloves' | 'knifes' | 'pistols' | 'rifles' | 'snipers'

type InitialStateType = {
  currentStep: TStep
}

const initialState: InitialStateType = {
  currentStep: 'gloves'
}

const name = 'route'

export const routeModule = createSlice({
  name,
  initialState: initialState,
  reducers: {
    setCurrentStep: (state, action: PayloadAction<TStep>) => {
      state.currentStep = action.payload
    }
  },
})

export const { setCurrentStep } = routeModule.actions

export const getCurrentStep = (state: RootState) => state.route.currentStep

export default routeModule.reducer