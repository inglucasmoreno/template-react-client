import { configureStore } from '@reduxjs/toolkit'
import { 
  authSlice, 
  sidebarSlice, 
  uiSlice, 
  usersSlice,
  confirmModalSlice
} from './slices'

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    sidebar: sidebarSlice.reducer,
    users: usersSlice.reducer,
    ui: uiSlice.reducer,
    confirmModal: confirmModalSlice.reducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
