const tackingMyButtonComp=(Component)=>{
    return(props)=>{
        const handleClick=()=>{
            alert("The tracking info on clicking this Button",props.trackingInfo)
        };
        return(
            <form onClick={handleClick}>
                Email:    <input type="text" /><br /><br />
                Password: <input type="text" /><br /><br />
                <Component {...props} />
            </form>
        )
    }
}
export default tackingMyButtonComp;