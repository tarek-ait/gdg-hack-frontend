import { create } from 'zustand';
import { axiosInstance } from '../lib/axios';
import toast from 'react-hot-toast';
import * as yup from 'yup';

// signup data validation
const signupSchema = yup.object().shape({
    email: yup.string().email('Invalid email format').required('Email is required'),
    password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    userName: yup.string().min(3, 'Username must be at least 3 characters').required('Username is required'),
    firstName: yup.string().min(3, 'First name must be at least 3 characters').required('First name is required'),
    lastName: yup.string().min(3, 'Last name must be at least 3 characters').required('Last name is required'),
});

// login data validation
const loginSchema = yup.object().shape({
    email: yup.string().email('Invalid email format').required('Email is required'),
    password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

// backend url
const  BASE_URL =  import.meta.env.MODE === "development"  ? "http://localhost:3000" : "/"; 

export const useAuthStore = create((set) => ({
    isAuthenticated: false,
    isSigningUp: false,
    isLoggingIn: false,
    isSigningOut: false,
    isUpdatingProfile: false,
    isGettingProfile: false,
    isCheckingAuth: false,

    // signup function
    signup: async (data) => {
        try {
            await signupSchema.validate(data);
        }catch(err) {
            return toast.error(err.errors[0]);
        }

        set({ isSigningUp: true });
        try {
            const response = await axiosInstance.post(`${BASE_URL}/signup`, data);
            set({ isAuthenticated: true, isSigningUp: false });
            toast.success(response.data.message);
        } catch (error) {
            set({ isSigningUp: false });
            toast.error(error.response.data.message);
        }
    },

    // login function
    login: async (data) => {
        set({ isLoggingIn: true });
        try {
            const response = await axiosInstance.post(`${BASE_URL}/login`, data);
            set({ isAuthenticated: true, isLoggingIn: false });
            toast.success(response.data.message);
        } catch (error) {
            set({ isLoggingIn: false });
            toast.error(error.response.data.message);
        }
    },

    // signout function
    logout: async () => {
        set({ isSigningOut: true });
        try {
            const response = await axiosInstance.post(`${BASE_URL}/logout`);
            set({ isAuthenticated: false, isSigningOut: false });
            toast.success(response.data.message);
        } catch (error) {
            set({ isSigningOut: false });
            toast.error(error.response.data.message);
        }
    },

    // setFieldsOfInterest function
    setFieldsOfInterest: async (data) => {
        set({ isUpdatingProfile: true });
        try {
            const response = await axiosInstance.post(`${BASE_URL}//fiedls`, data);
            set({ isUpdatingProfile: false });
            toast.success(response.data.message);
        } catch (error) {
            set({ isUpdatingProfile: false });
            toast.error(error.response.data.message);
        }
    },

    // getProfile function
    getProfile: async () => {
        set({ isGettingProfile: true });
        try {
            const response = await axiosInstance.get(`${BASE_URL}/getProfile`);
            set({ isGettingProfile: false });
            toast.success(response.data.message);
        } catch (error) {
            set({ isGettingProfile: false });
            toast.error(error.response.data.message);
        }
    },
    
    // check user authentificated
    checkAuth: async () => {
        set({ isCheckingAuth: true });
        try {
            const response = await axiosInstance.get(`${BASE_URL}/check`);
            set({ isAuthenticated: true , isCheckingAuth: false });
            console.log(response.data.message);
        } catch (error) {
            set({ isAuthenticated: false });
            console.log(error.message);
            set({ isCheckingAuth: false });
        }
    },  

}));