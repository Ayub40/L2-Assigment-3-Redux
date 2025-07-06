// import CreateBookModal from "@/module/CreateBooks/CreateBookModal";
// import { Button } from "@/components/ui/button";
// import { DialogClose, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
// import { Calendar } from "@/components/ui/calendar";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
// import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useCreateBookMutation } from "@/redux/api/bookApi";
// import { cn } from "@/lib/utils";
// import { format } from "date-fns";
// import { CalendarIcon } from "lucide-react";
// import { useState } from "react";
import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router";

export default function CreateBooks() {
    // const [createBook] = useCreateBookMutation();
    // console.log(createBook);

    // // const [open, setOpen] = useState(false);
    // const form = useForm();

    // const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    //     const bookData = {
    //         ...data,
    //         copies: parseInt(data.copies),
    //         available: true,
    //     };

    //     try {
    //         await createBook(bookData).unwrap();
    //         // setOpen(false);
    //         form.reset();
    //     } catch (err) {
    //         console.error("Book creation failed:", err);
    //     }
    // };

    const [createBook] = useCreateBookMutation()
    // const [date, setDate] = useState<Date | undefined>()
    const navigate = useNavigate()

    const form = useForm()

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        const bookData = {
            ...data,
            // dueDate: date,
            // available: true,
            copies: Number(data.copies),
        }

        await createBook(bookData).unwrap()
        form.reset()
        navigate("/")
    }



    return (
        <div className="max-w-xl mx-auto mt-10 border p-6 rounded-md shadow">
            <h2 className="text-2xl font-bold mb-4">Add New Book</h2>
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
                                    <Input placeholder="Enter book title" {...field} />
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
                                    <Input placeholder="Enter author name" {...field} />
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
                                    <Input placeholder="Enter ISBN number" {...field} />
                                </FormControl>
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
                                    <Input type="number" placeholder="Number of copies" {...field} />
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
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
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

                    {/* Description */}
                    <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Description</FormLabel>
                                <FormControl>
                                    <Textarea rows={4} placeholder="Enter description" {...field} />
                                </FormControl>
                            </FormItem>
                        )}
                    />

                    {/* Due Date */}
                    {/* <FormItem>
                        <FormLabel>Due Date</FormLabel>
                        <Popover>
                            <PopoverTrigger asChild>
                                <FormControl>
                                    <Button
                                        variant={"outline"}
                                        className={cn(
                                            "pl-3 text-left font-normal",
                                            !date && "text-muted-foreground"
                                        )}
                                    >
                                        {date ? format(date, "PPP") : <span>Pick a date</span>}
                                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                    </Button>
                                </FormControl>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0" align="start">
                                <Calendar
                                    mode="single"
                                    selected={date}
                                    onSelect={setDate}
                                    captionLayout="dropdown"
                                />
                            </PopoverContent>
                        </Popover>
                    </FormItem> */}





                    {/* <div className="flex flex-col gap-2">
                        <FormLabel>Due Date</FormLabel>
                        <Button
                            type="button"
                            variant="outline"
                            className={cn("justify-start text-left font-normal", !date && "text-muted-foreground")}
                            onClick={() => setDate(undefined)}
                        >
                            {date ? format(date, "PPP") : <span>Pick a due date</span>}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                        <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            captionLayout="dropdown"
                        />
                    </div> */}

                    {/* Submit Button */}
                    <Button type="submit" className="w-full mt-4">
                        Submit
                    </Button>
                </form>
            </Form>
        </div>












        // <div className="mx-auto max-w-7xl px-5 mt-20 overflow-x-auto">
        //     <Form {...form}>
        //         <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        //             {/* Title */}
        //             <FormField
        //                 control={form.control}
        //                 name="title"
        //                 render={({ field }) => (
        //                     <FormItem>
        //                         <FormLabel>Title</FormLabel>
        //                         <FormControl>
        //                             <Input {...field} placeholder="Enter book title" />
        //                         </FormControl>
        //                     </FormItem>
        //                 )}
        //             />

        //             {/* Author */}
        //             <FormField
        //                 control={form.control}
        //                 name="author"
        //                 render={({ field }) => (
        //                     <FormItem>
        //                         <FormLabel>Author</FormLabel>
        //                         <FormControl>
        //                             <Input {...field} placeholder="Enter author name" />
        //                         </FormControl>
        //                     </FormItem>
        //                 )}
        //             />

        //             {/* ISBN */}
        //             <FormField
        //                 control={form.control}
        //                 name="isbn"
        //                 render={({ field }) => (
        //                     <FormItem>
        //                         <FormLabel>ISBN</FormLabel>
        //                         <FormControl>
        //                             <Input {...field} placeholder="Enter ISBN number" />
        //                         </FormControl>
        //                     </FormItem>
        //                 )}
        //             />

        //             {/* Description */}
        //             <FormField
        //                 control={form.control}
        //                 name="description"
        //                 render={({ field }) => (
        //                     <FormItem>
        //                         <FormLabel>Description</FormLabel>
        //                         <FormControl>
        //                             <Textarea {...field} placeholder="Enter description" />
        //                         </FormControl>
        //                     </FormItem>
        //                 )}
        //             />

        //             {/* Genre */}
        //             <FormField
        //                 control={form.control}
        //                 name="genre"
        //                 render={({ field }) => (
        //                     <FormItem>
        //                         <FormLabel>Genre</FormLabel>
        //                         <Select onValueChange={field.onChange} defaultValue={field.value || "FICTION"}>
        //                             <FormControl>
        //                                 <SelectTrigger>
        //                                     <SelectValue placeholder="Select a genre" />
        //                                 </SelectTrigger>
        //                             </FormControl>
        //                             <SelectContent>
        //                                 <SelectItem value="FICTION">Fiction</SelectItem>
        //                                 <SelectItem value="NON_FICTION">Non-fiction</SelectItem>
        //                                 <SelectItem value="SCIENCE">Science</SelectItem>
        //                                 <SelectItem value="HISTORY">History</SelectItem>
        //                                 <SelectItem value="BIOGRAPHY">Biography</SelectItem>
        //                                 <SelectItem value="FANTASY">Fantasy</SelectItem>
        //                             </SelectContent>
        //                         </Select>
        //                     </FormItem>
        //                 )}
        //             />

        //             {/* Copies */}
        //             <FormField
        //                 control={form.control}
        //                 name="copies"
        //                 render={({ field }) => (
        //                     <FormItem>
        //                         <FormLabel>Copies</FormLabel>
        //                         <FormControl>
        //                             <Input type="number" {...field} placeholder="Number of copies" />
        //                         </FormControl>
        //                     </FormItem>
        //                 )}
        //             />
        //             <div className="pt-4">
        //                 <Button variant="outline" type="button">
        //                     Cancel
        //                 </Button>
        //                 <Button type="submit">Create Book</Button>
        //             </div>
        //             {/* <DialogFooter className="pt-4">
        //                 <DialogClose asChild>
        //                     <Button variant="outline" type="button">
        //                         Cancel
        //                     </Button>
        //                 </DialogClose>
        //                 <Button type="submit">Create Book</Button>
        //             </DialogFooter> */}
        //         </form>
        //     </Form>
        // </div>














        // <div className="mx-auto max-w-7xl px-5 mt-20 overflow-x-auto">
        //     <CreateBookModal />
        // </div>
    );
}