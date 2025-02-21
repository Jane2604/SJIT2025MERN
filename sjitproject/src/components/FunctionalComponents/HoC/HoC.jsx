import Button from "./Button";
import tackingMyButtonComp from "./tackingMyButtonComp"; 
const HoC=()=>{
    const ButtonTrack=tackingMyButtonComp(Button)
      return(
        <div>
            <h1>Welcome to Higher order Components(HoC)</h1><br />
            {/*<Button value={"Login"}/>*/}
            <ButtonTrack value={"Login"} trackingInfo={{"CustID":"Hello","password":"password"}}/>
        </div>
      )
}
export default HoC;