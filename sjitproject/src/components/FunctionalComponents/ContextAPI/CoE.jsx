import { createContext } from "react";
import StudentResults from "./StudentResults"
const CoE=()=>{
    return (
        <ResultPublish.Provider value={{sgpa:"10 SGPA",cgpa:"10 CGPA"}}>
        <div>
            <h1>Results Published</h1>
            <StudentResults sgpa="10 SGPA" cgpa="10 cgpa" />
        </div>
        </ResultPublish.Provider>
    )
}
export default CoE