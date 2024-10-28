import type { TLoginInput, TRegisterInput } from "@/schema/auth";
import { useMutation } from "@tanstack/react-query"
import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useCookies } from "react-cookie"
import { useRouter } from "next/navigation";

export const useRegistrationForm = () => {
    const [values, setValues] = useState<TRegisterInput>({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        password: ""
    });

    const [loading, setLoading] = useState<boolean>(false);
    const registerAPI = useMutation({
        mutationFn: async(body: TRegisterInput) => axios.post('/api/auth/register', body),
        onSettled: () => setLoading(false),
    })

    const submit = () => {
        setLoading(true);
        const promise = registerAPI.mutateAsync(values).then((res) => {
            if(res.status !== 200) throw new Error('invalid status code')
        });
        toast.promise(promise, {
            loading: "Creating...",
            error: "Failed To Register",
            success: 'Successfully Registered'
        })
    };


    const setValue = (key: keyof TRegisterInput, value: string) => setValues(prev => ({...prev, [key]: value}))

    return {
        loading, 
        submit,
        setValue,
        values
    }
};



export const useLoginForm = () => {
    const [values, setValues] = useState<TLoginInput>({
        email: "",
        password: ""
    });

    const [_, setCookie]  = useCookies(['token']);

    const router = useRouter();

    const [loading, setLoading] = useState<boolean>(false);
    const registerAPI = useMutation({
        mutationFn: async(body: TLoginInput) => axios.post<{ token: string }>('/api/auth/login', body),
        onSettled: () => setLoading(false),
        onSuccess({ data }) {
            if(data.token) {
                setCookie("token", data.token, { path: "/" })
                router.push('/dashboard')
            }
            }
    })

    const submit = () => {
        setLoading(true);
        const promise = registerAPI.mutateAsync(values).then((res) => {
            if(res.status !== 200) throw new Error('invalid status code')
        });
        void toast.promise(promise, {
            loading: "Creating...",
            error: "Failed To Login",
            success: 'Successfully Logged In'
        })
    };


    const setValue = (key: keyof TRegisterInput, value: string) => setValues(prev => ({...prev, [key]: value}))

    return {
        loading, 
        submit,
        setValue,
        values
    }
};

