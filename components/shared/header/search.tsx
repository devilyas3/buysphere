import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectTrigger, SelectValue, SelectItem } from "@/components/ui/select";
import { APP_NAME } from "@/lib/constants";
import { SearchIcon } from "lucide-react";

const categories = ['men', 'women', 'kids', 'accessories'];

export default async function Search() {
    return (
        <form action='/search' method='GET' className='flex items-stretch h-10'>
            <Select name='category'>
                <SelectTrigger className='w-auto h-full dark:border-gray-200 bg-gray-100 text-black border-r rounded-r-none rounded-l-md'>
                    <SelectValue placeholder='All' />
                </SelectTrigger>
                <SelectContent position='popper'>
                    <SelectItem value='all'>All</SelectItem>
                    {categories.map((category) => (
                        <SelectItem key={category} value={category}>
                            {category}
                        </SelectItem>
                    ))} 
                </SelectContent>
            </Select>
            <Input type='search' name='q' placeholder={`Search Site ${APP_NAME}`}
                className='h-full flex-1 rounded-none dark:border-gray-200 bg-gray-100 text-black text-base'
            />
            <button type='submit'
                className='h-full  bg-primary text-primary-foreground text-black rounded-s-none rounded-e-md px-3 py-2'
            >
                <SearchIcon className='w-6 h-6' />
            </button>
        </form>
    );
};