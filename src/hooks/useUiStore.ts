import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../store/store";
import {
  onInitDarkMode,
  onToggleDarkMode,
  onToggleNewUser,
  onToggleProfile,
  onOpenLoading,
  onCloseLoading,
  onToggleChangePassword,
  onOpenConfirm,
  onCloseConfirm
} from "../store/slices";

export const useUiStore = () => {

  let html = document.documentElement;

  const {
    isDarkMode,
    isUserOpen,
    isProfileOpen,
    isLoadingOpen,
    isChangePasswordOpen,
    loadingMessage,
  } = useSelector((state: RootState) => state.ui)
  const dispatch = useDispatch();

  // Dark mode handling

  const initDarkMode = () => {

    const darkMode = localStorage.getItem('darkMode') === 'true' ? true : false;

    if (darkMode) {
      html.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    } else {
      html.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
    }

    dispatch(onInitDarkMode(darkMode));

  }

  const toggleDarkMode = () => {

    if (isDarkMode) {
      html.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
    } else {
      html.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    }

    dispatch(onToggleDarkMode());

  }

  // User - Modal
  const toggleUser = () => {
    dispatch(onToggleNewUser());
  }

  // Change password - Modal
  const toggleChangePassword = () => {
    dispatch(onToggleChangePassword());
  }

  // Profile - Modal
  const toggleProfile = () => {
    dispatch(onToggleProfile());
  }

  // Loading - Modal - Open
  const openLoading = (message: string) => {
    dispatch(onOpenLoading(message));
  }

  // Loading - Modal - Cerrar
  const closeLoading = () => {
    dispatch(onCloseLoading());
  }

  return {

    // Properties
    isDarkMode,
    isUserOpen,
    isProfileOpen,
    isLoadingOpen,
    isChangePasswordOpen,
    loadingMessage,
    
    // Methods
    initDarkMode,
    toggleDarkMode,
    toggleUser,
    toggleProfile,
    toggleChangePassword,
    openLoading,
    closeLoading,

  }

}

