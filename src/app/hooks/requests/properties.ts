import { useMutation } from "@tanstack/react-query"
import axios from "axios"
import { useState } from "react"
import { type Property } from "@prisma/client"
import { useRouter } from "next/navigation"
import { TPropertyCreationInput } from "@/schema/property"
import toast from "react-hot-toast"

export const useCreatePropertyForm = () => {
    const [values, setValues] = useState<TPropertyCreationInput>({
        address: '',
        zipcode: 0,
        maxShareCount: 1,
        thumbnail: "",
        description: '',
        sharePrice: 0
    });
    const [loading, setLoading] = useState<boolean>(false);
    const router = useRouter();
    const propertyCreationAPI = useMutation({
        mutationFn: (body: TPropertyCreationInput) =>  axios.post<{ property: Property, err?: string}>('/api/property/create' , body),
        onSettled: () => setLoading(false),
        onSuccess({ data }) {
            if(data) {
                router.push(`/property/${data.property.id}`);
                return
            }
        },
    });

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        const promise = propertyCreationAPI.mutateAsync(values)
        .then((result => {
            if(result.status !== 200) throw new Error(result?.data.err);
            return result;
        }));
        toast.promise(promise, {
            loading: 'Loading',
            success: "Successfully Created Property",
            error: "Failed To Create Property"
        })
    }

    const setValue = (key: keyof TPropertyCreationInput, value: any) => setValues(prev => ({...prev, [key]: value}))

    return {
        loading,
        values,
        setValue,
        submit
    }


}