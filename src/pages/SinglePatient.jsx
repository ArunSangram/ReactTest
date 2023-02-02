const SinglePatient = ({state})=>{
    const handleClick = ()=>{
        state(1)
    }
    return(
        <div className="singlePatientcontainer">
            Single Patient
            <button onClick={handleClick}>Back</button>
        </div>
    )
}

export default SinglePatient