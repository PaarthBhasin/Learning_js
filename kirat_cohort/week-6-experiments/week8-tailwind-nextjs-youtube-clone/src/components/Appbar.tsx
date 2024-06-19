import { Searchbar } from "./SearchBar"

export const Appbar = () =>{
    return (
        <div className="flex justify-between pt-1 p-3">
            <div className="text-md inline-flex items-center">Youtube</div>
            <div> <Searchbar /></div>
            <div>Sign in</div>
        </div>
    )
}