import { createSlice } from '@reduxjs/toolkit';

export const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    isDarkMode: false,
    isUserOpen: false,
    isChangePasswordOpen: false,
    isProfileOpen: false,
    isLoadingOpen: false,
    loadingMessage: '',
  },
  reducers: {

    // Modo oscuro

    onInitDarkMode: (state, { payload }) => {
      state.isDarkMode = payload;
    },

    onToggleDarkMode: (state) => {
      state.isDarkMode = !state.isDarkMode;
    },

    // Usuarios

    onToggleNewUser: (state) => {
      state.isUserOpen = !state.isUserOpen;
    },

    // Perfil

    onToggleProfile: (state) => {
      state.isProfileOpen = !state.isProfileOpen;
    },

    onToggleChangePassword: (state) => {
      state.isChangePasswordOpen = !state.isChangePasswordOpen;
    },

    // Loading - Modal de carga

    onOpenLoading: (state, { payload }) => {
      state.isLoadingOpen = true;
      state.loadingMessage = payload;
    },

    onCloseLoading: (state) => {
      state.isLoadingOpen = false;
      state.loadingMessage = '';
    },
  }

});

export const {
  onInitDarkMode,
  onToggleDarkMode,
  onToggleNewUser,
  onToggleProfile,
  onToggleChangePassword,
  onOpenLoading,
  onCloseLoading,
} = uiSlice.actions;
