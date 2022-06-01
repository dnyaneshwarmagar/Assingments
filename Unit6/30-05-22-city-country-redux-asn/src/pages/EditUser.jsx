import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import "./AddUser.css";
import { useDispatch, useSelector } from "react-redux";
import {  getSingleUser, upadateUser } from "../redux/action";

const EditUser = () => {
  let { id } = useParams();
  let dispatch = useDispatch();
  const {user} = useSelector(state=>state.data)
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [state, setState] = useState({
    name: "",
    email: "",
    contact: "",
    address: "",
  });
  const { name, email, contact, address } = state;


  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !address || !email || !contact) {
      setError("Please input all input Field!");
    } else {
      dispatch(upadateUser(state,id));
      navigate("/");
      setError("");
    }
  };

  useEffect(() => {
    console.log("id:", id);
    dispatch(getSingleUser(id));
  }, []);

  useEffect(()=>{
      if(user){
          setState({...user})
      }
  },[user])
  return (
    <div>
      <Button
        variant="contained"
        color="secondary"
        style={{ marginTop: "10px" }}
        onClick={() => navigate("/")}
      >
        GO BACK
      </Button>
      <h2>EDIT USER</h2>
      {error && <h3 style={{ color: "red" }}>{error}</h3>}
      <Box
        className="form"
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "45ch" },
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <TextField
          id="standard-basic"
          label="Name"
          variant="outlined"
          value={name}
          type="text"
          name="name"
          onChange={handleInputChange}
        />
        <br />
        <TextField
          id="standard-basic"
          label="Email"
          variant="outlined"
          value={email}
          type="email"
          name="email"
          onChange={handleInputChange}
        />
        <br />
        <TextField
          id="standard-basic"
          label="Contact"
          variant="outlined"
          value={contact}
          type="number"
          name="contact"
          onChange={handleInputChange}
        />
        <br />
        <TextField
          id="standard-basic"
          label="Address"
          variant="outlined"
          value={address}
          type="text"
          name="address"
          onChange={handleInputChange}
        />
        <Button variant="contained" type="submit" onSubmit={handleSubmit}>
          Update
        </Button>
      </Box>
    </div>
  );
};

export default EditUser;
