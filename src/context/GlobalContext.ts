import { createContext } from 'react';


export interface GlobalContextType {

    search: boolean;

    setSearch: React.Dispatch<React.SetStateAction<boolean>>;

}


export const GlobalContext = createContext("");