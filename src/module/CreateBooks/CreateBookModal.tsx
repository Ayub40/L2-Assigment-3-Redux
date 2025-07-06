import { Button } from "@/components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useCreateBookMutation } from "@/redux/api/bookApi";
import { useState } from "react";
import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form";

export default function CreateBookModal() {
    const [createBook] = useCreateBookMutation();
    console.log(createBook);
    const [open, setOpen] = useState(false);
    const form = useForm();

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        const bookData = {
            ...data,
            copies: parseInt(data.copies),
            // available: true,
        };

        try {
            await createBook(bookData).unwrap();
            setOpen(false);
            form.reset();
        } catch (err) {
            console.error("Book creation failed:", err);
        }
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button>Add Book</Button>
            </DialogTrigger>

            <DialogContent className="sm:max-w-[600px]">
                <DialogHeader>
                    <DialogTitle>Add a New Book</DialogTitle>
                    <DialogDescription>Fill out the form to add a new book.</DialogDescription>
                </DialogHeader>

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        {/* Title */}
                        <FormField
                            control={form.control}
                            name="title"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Title</FormLabel>
                                    <FormControl>
                                        <Input {...field} placeholder="Enter book title" />
                                    </FormControl>
                                </FormItem>
                            )}
                        />

                        {/* Author */}
                        <FormField
                            control={form.control}
                            name="author"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Author</FormLabel>
                                    <FormControl>
                                        <Input {...field} placeholder="Enter author name" />
                                    </FormControl>
                                </FormItem>
                            )}
                        />

                        {/* ISBN */}
                        <FormField
                            control={form.control}
                            name="isbn"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>ISBN</FormLabel>
                                    <FormControl>
                                        <Input {...field} placeholder="Enter ISBN number" />
                                    </FormControl>
                                </FormItem>
                            )}
                        />

                        {/* Description */}
                        <FormField
                            control={form.control}
                            name="description"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Description</FormLabel>
                                    <FormControl>
                                        <Textarea {...field} placeholder="Enter description" />
                                    </FormControl>
                                </FormItem>
                            )}
                        />

                        {/* Genre */}
                        <FormField
                            control={form.control}
                            name="genre"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Genre</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value || "FICTION"}>
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select a genre" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectItem value="FICTION">Fiction</SelectItem>
                                            <SelectItem value="NON_FICTION">Non-fiction</SelectItem>
                                            <SelectItem value="SCIENCE">Science</SelectItem>
                                            <SelectItem value="HISTORY">History</SelectItem>
                                            <SelectItem value="BIOGRAPHY">Biography</SelectItem>
                                            <SelectItem value="FANTASY">Fantasy</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </FormItem>
                            )}
                        />

                        {/* Copies */}
                        <FormField
                            control={form.control}
                            name="copies"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Copies</FormLabel>
                                    <FormControl>
                                        <Input type="number" {...field} placeholder="Number of copies" />
                                    </FormControl>
                                </FormItem>
                            )}
                        />

                        <DialogFooter className="pt-4">
                            <DialogClose asChild>
                                <Button variant="outline" type="button">
                                    Cancel
                                </Button>
                            </DialogClose>
                            <Button type="submit">Create Book</Button>
                        </DialogFooter>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    );
}
