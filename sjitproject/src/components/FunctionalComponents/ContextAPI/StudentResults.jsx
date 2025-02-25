const StudentResults=(res)=>{
    return(
        <div>
                <h1>Result:</h1>
                <h2>SGPA:{res.sgps}</h2>
                <h2>CGPA:{res.cgpa}</h2>
        </div>
    )

}
export default StudentResults;