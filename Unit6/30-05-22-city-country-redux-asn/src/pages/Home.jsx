import "./Home.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { deleteUser, loadUsers } from "../redux/action";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { Navigate, useNavigate } from "react-router-dom";


const Home = () => {
  
  let dispatch = useDispatch();
  const { users } = useSelector((state) => state.data);
  const navigate = useNavigate();
  
  console.log('users:', users)

  useEffect(() => {
    dispatch(loadUsers());
  }, []);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure that you want to delete the user ?")) {
      dispatch(deleteUser(id));
    }
  };
  return (
    <div>
      <div className="btnDiv">
        <Button variant="contained" onClick={() => navigate("/addUser")}>
          Add User
        </Button>
      </div>
      <TableContainer component={Paper}>
        <Table
          className="table"
          sx={{ minWidth: 650 }}
          aria-label="simple table"
        >
          <TableHead
            className="tableHead"
            style={{ backgroundColor: "aquamarine" }}
          >
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="center">Email</TableCell>
              <TableCell align="center">Contact&nbsp;</TableCell>
              <TableCell align="center">Address</TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users?.map((user) => (
              <TableRow
                key={user.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {user.name}
                </TableCell>
                <TableCell align="center">{user.email}</TableCell>
                <TableCell align="center">{user.contact}</TableCell>
                <TableCell align="center">{user.address}</TableCell>
                <TableCell align="center">
                  <Stack spacing={2} direction="row">
                    <Button
                      onClick={() => handleDelete(user.id)}
                      variant="contained"
                    >
                      DELETE
                    </Button>
                    <Button
                      onClick={() => navigate(`/editUser/${user.id}`)}
                      variant="outlined"
                    >
                      EDIT
                    </Button>
                  </Stack>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Home;
