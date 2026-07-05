import { createSlice } from "@reduxjs/toolkit";
// get state = useAppSelector
// use reducer = useDispatch
const initialState = {
  isOpen: false,
  children: null,
};

const drawerSlice = createSlice({
  name: "drawer",
  initialState,
  reducers: {
    openDrawer: (state, action) => {
      return {
        ...state,
        ...action.payload,
        chilren: action?.payload?.children || null,
      };
    },
    closeDrawer: () => {
      return {
        ...initialState,
      };
    },
  },
});

export const { openDrawer, closeDrawer } = drawerSlice.actions;
export default drawerSlice.reducer;
