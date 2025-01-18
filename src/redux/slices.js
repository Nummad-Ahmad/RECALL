import { createSlice } from '@reduxjs/toolkit';

const modeSlice = createSlice({
  name: 'mode',
  initialState: { value: false }, 
  reducers: {
    toggleMode: (state) => { state.value = !state.value; },
    setMode: (state, action) => { state.value = action.payload; },
  },
});

export const { toggleMode, setMode } = modeSlice.actions;
export default modeSlice.reducer;
