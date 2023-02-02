import './test.css'
const RoomsList = ({state})=>{

    const handleClick = ()=>{
        state(2)
    }
    return(
        <div className="roomListcontainer">
            Rooms List
            <button onClick={handleClick}>Patient List</button>
        </div>
    )
}

export default RoomsList