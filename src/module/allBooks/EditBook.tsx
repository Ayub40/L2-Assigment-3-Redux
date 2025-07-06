import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useGetBookByIdQuery, useUpdateBookMutation } from "@/redux/api/bookApi";
import { useEffect } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { useNavigate, useParams } from "react-router";



export default function EditBook() {
    const { id } = useParams();
    const { data, isLoading } = useGetBookByIdQuery(id!, {
        refetchOnMountOrArgChange: true,
    });
    const navigate = useNavigate();
    const [updateBook] = useUpdateBookMutation();

    // const form = useForm({ defaultValues: data?.data });
    const form = useForm({
        defaultValues: {
            title: "",
            author: "",
            isbn: "",
            genre: "",
            copies: 0,
            description: "",
        },
    });

    useEffect(() => {
        if (data?.data) {
            form.reset(data.data);
        }
    }, [data?.data, form]);
    console.log(data)

    if (isLoading) return <p>Loading...</p>;

    const onSubmit: SubmitHandler<any> = async (values) => {
        const payload = { ...values, id, copies: Number(values.copies) };
        await updateBook(payload);
        navigate("/books");
    };


    return (
        <div className="max-w-xl mx-auto mt-10 p-6 border shadow rounded">
            <h2 className="text-xl font-bold mb-4">Edit Book</h2>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField name="title" control={form.control} render={({ field }) => (
                        <FormItem>
                            <FormLabel>
                                Title
                            </FormLabel>
                            <FormControl>
                                <Input {...field} />
                                {/* <Input {...field}>{data?.data?.title}</Input> */}
                            </FormControl>
                        </FormItem>
                    )} />
                    <FormField name="author" control={form.control} render={({ field }) => (
                        <FormItem>
                            <FormLabel>
                                Author
                            </FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                        </FormItem>
                    )} />
                    <FormField name="isbn" control={form.control} render={({ field }) => (
                        <FormItem>
                            <FormLabel>
                                ISBN
                            </FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                        </FormItem>
                    )} />
                    <FormField name="copies" control={form.control} render={({ field }) => (
                        <FormItem>
                            <FormLabel>
                                Copies
                            </FormLabel>
                            <FormControl>
                                <Input type="number" {...field} />
                            </FormControl>
                        </FormItem>
                    )} />
                    <FormField name="genre" control={form.control} render={({ field }) => (
                        <FormItem>
                            <FormLabel>
                                Genre
                            </FormLabel>
                            <Select value={field.value} onValueChange={field.onChange}>
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select genre" />
                                        {/* {field.value} */}
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    {["FICTION", "NON_FICTION", "SCIENCE", "HISTORY", "BIOGRAPHY", "FANTASY"].map(g => (
                                        <SelectItem key={g} value={g}>{g}</SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </FormItem>
                    )} />
                    <FormField name="description" control={form.control} render={({ field }) => (
                        <FormItem>
                            <FormLabel>
                                Description
                            </FormLabel>
                            <FormControl>
                                <Textarea {...field} />
                            </FormControl>
                        </FormItem>
                    )} />
                    <Button type="submit">Update Book</Button>
                </form>
            </Form>
        </div>
    );
}