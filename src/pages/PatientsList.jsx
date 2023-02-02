const PatientsList = ({state})=>{
    const handleClick = ()=>{
        state(3)
    }
    return(
        <div className="patientListcontainer">
            Patients List
            <button onClick={handleClick}>Single Patient</button>
        </div>
    )
}

export default PatientsList