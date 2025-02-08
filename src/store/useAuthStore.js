import { create } from 'zustand';
import { axiosInstance } from '../lib/axios';
import toast from 'react-hot-toast';


// backend url
const BASE_URL =
import.meta.env.MODE === 'development' ? 'http://localhost:5001/api' : '/';

export const useAuthStore = create((set) => ({
  isAuthenticated: false,
  isSigningUp: false,
  isLoggingIn: false,
  isSigningOut: false,
  isUpdatingProfile: false,
  isGettingProfile: false,
  isCheckingAuth: false,
  user: null,

  // signup function
  signup: async (data, navigate) => {
    set({ isSigningUp: true });
    try {
      // data validation
      if (!data.email || !data.password) {
        set({ isSigningUp: false });
        return toast.error('Email and password are required');
      }
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(data.email)) {
        set({ isSigningUp: false });
        return toast.error('Invalid email format');
      }
      const response = await axiosInstance.post(`${BASE_URL}/signup`, data);
      set({ isAuthenticated: true, isSigningUp: false });
      toast.success(response.data.message);
      // redirect to the projects page
      navigate('/fields');
    } catch (error) {
      set({ isSigningUp: false });
      toast.error(error.message);
    }
  },

  // login function
  login: async (data, navigate) => {
    set({ isLoggingIn: true });
    try {
      console.log('this is data', data);
      // validate the data with if and else
      if (!data.email || !data.password) {
        set({ isLoggingIn: false });
        return toast.error('Email and password are required');
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(data.email)) {
        set({ isLoggingIn: false });
        return toast.error('Invalid email format');
      }
      // sned the data in the request.body
      const response = await axiosInstance.post(`${BASE_URL}/login`, data);
      set({ isAuthenticated: true, isLoggingIn: false });
      toast.success(response.data.message);
      // redirect using the navigate
      console.log(response);
      navigate('/projects');
      

    } catch (error) {
      set({ isLoggingIn: false });
      toast.error(error.response.data.message);
    }
  },

  // signout function
  logout: async (navigate) => {
    set({ isSigningOut: true });
    try {
      const response = await axiosInstance.post(`${BASE_URL}/logout`);
      set({ isAuthenticated: false, isSigningOut: false });
      toast.success(response.data.message);
    } catch (error) {
      set({ isSigningOut: false });
      toast.error(error.message);
    }
  },

  // setFieldsOfInterest function
  setFieldsOfInterest: async (data, navigate) => {
    set({ isUpdatingProfile: true });
    try {
      const response = await axiosInstance.post(`${BASE_URL}/fiedls`, data);
      set({ isUpdatingProfile: false });
      toast.success(response.data.message);
      navigate('/');
    } catch (error) {
      set({ isUpdatingProfile: false });
      toast.error(error.message);
    }
  },

  // getProfile function
  getProfile: async () => {
    set({ isGettingProfile: true });
    try {
      const response = await axiosInstance.get(`${BASE_URL}/getProfile`);
      set({ isGettingProfile: false });
      set({ user : response.data });
    } catch (error) {
      set({ isGettingProfile: false });
      toast.error(error.message);
    }
  },

  // check user authentificated
  checkAuth: async () => {
    set({ isCheckingAuth: true });
    try {
      const response = await axiosInstance.get(`${BASE_URL}/check`);
      set({ isAuthenticated: true, isCheckingAuth: false });
      console.log(response.data.message);
    } catch (error) {
      set({ isAuthenticated: false });
      console.log(error.message);
      set({ isCheckingAuth: false });
    }
  },

  // the update function
  update: async (data) => {
    set({ isUpdatingProfile: true });
    try {
      const response = await axiosInstance.put(`${BASE_URL}/update`, data);
      set({ isUpdatingProfile: false });
      toast.success(response.data.message);
    } catch (error) {
      set({ isUpdatingProfile: false });
      toast.error(error.message);
    }
  },
}));
