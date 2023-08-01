import { Link } from "react-router-dom";
import "./LandingPage.css";
import Container from "@mui/material/Container";
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";
import { grey } from "@mui/material/colors";
import Divider from "@mui/material/Divider";
import { useDispatch, useSelector } from "react-redux";
import { setMsg } from "../../features/redux/appSlice";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { relativePaths } from "../../navigation";

function LandingPageButton() {
  const {user} = useSelector((state)=>state.user);
  let button;
  if(!user.isLoggedIn){
    button = <Link to={relativePaths.authentification}>
    <button
      className="btn btn-success try-btn"
      style={{ textAlign: "centre " }}
    >
      <span>Try now !</span>
    </button>
  </Link>
  }
  else if(user.role === "admin"){
    button = <Link to={relativePaths.adminDashboard}>
    <button
      className="btn btn-success try-btn"
      style={{ textAlign: "centre " }}
    >
      <span>Admin Dashboard</span>
    </button>
  </Link>
  }
  else if(user.role === "user"){
    button = <Link to={relativePaths.userDashboard}>
    <button
      className="btn btn-success try-btn"
      style={{ textAlign: "centre " }}
    >
      <span>User Dashboard</span>
    </button>
  </Link>
  }
  

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      {button}
    </div>
  );
}
function LandingFrameMessage() {
  const style = {
    margin: "auto",
    // padding: "10% 35% 10% 15%",
    color: "white",
  };
  return (
    <div style={style} >
      <div
        style={{
          fontWeight: "bold",
          textAlign: "center",
          fontSize: "6.3vw",
          marginTop: "110px",
          marginBottom: "30px",
          lineHeight: "1.1",
        }}
      >
        SMART IRRIGATION SYSTEM
      </div>

      <p style={{ fontSize: "calc(12px + 0.5vw)" }} className="styleDescrip">
        Scheduling and Monitoring your irrigation is now very easy and smart way
        to mange everything that you could do better with help of our Smart App.
      </p>
      <br />
      <LandingPageButton />
    </div>
  );
}
function LandingFrame() {
  return (
    <>
      <div className="header nav-link-scroll" id="home">
        
        <Container maxWidth="md">
          <LandingFrameMessage />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "80px",
              cursor: "pointer",
            }}
          >
         
          </div>
        </Container>
      </div>
      
      
      <Divider
        variant="middle"
        sx={{
          width: "90vw",
          margin: "auto",
          marginBottom: "40px",
          marginTop: "40px",
          borderBottomWidth: 2,
        }}
      />
      
      
    </>
  );
}
const Landing = () => {
  const dispatch = useDispatch()
  const {msg, msgType} = useSelector((state)=> state.app)
  useEffect(() => {
    if (msg) {
      if (msgType == "success") {
        toast.success(msg, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
      if (msgType == "error") {
        toast.error(msg, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
      dispatch(setMsg(""));
    }
  }, [msg]);
  return <LandingFrame />;
};
export default Landing;
