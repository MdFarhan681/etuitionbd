import { Children, createContext, useState } from "react";


export const DataContext =createContext()
export const DataProvider =({children})=>{
    const [data,setdata]=useState({
        tuitions:[],
        tuitors:[]
    })
    return (
        <DataContext.Provider value={{data,setdata}}>{children}</DataContext.Provider>
    )
}