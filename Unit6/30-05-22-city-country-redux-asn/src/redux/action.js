import * as types from "./actionType";
import axios from "axios";

const getUsers = (users) => ({
    type: types.GET_USERS,
    payload: users
});

const userDeleted = () => ({
    type: types.DELETE_USERS
})

const userAdded = () => ({
    type: types.ADD_USER,
    // payload:user   
})

const getUser = (user) => ({
    type: types.GET_SINGLE_USER,
    payload: user
})

const userUpdated = () => ({
    type: types.UPDATE_USER,
    // payload:user   
})

export const loadUsers = () => {
    return function (dispatch) {
        axios.get("http://localhost:8080/users").then((res) => {
            console.log(res, res.data);
            dispatch(getUsers(res.data))
        }).catch(err => console.log(err))
    }
}

export const deleteUser = (id) => {
    return function (dispatch) {
        axios.delete(`http://localhost:8080/users/${id}`).then((res) => {
            console.log(res);
            dispatch(userDeleted());
            dispatch(loadUsers())
        }).catch(err => console.log(err))
    }
}

export const addUser = (user) => {
    return function (dispatch) {
        axios.post(`http://localhost:8080/users`, user).then((res) => {
            console.log(res);
            dispatch(userAdded());
            // dispatch(loadUsers())
        }).catch(err => console.log(err))
    }
}

export const getSingleUser = (id) => {
    console.log(id)
    return function (dispatch) {
        axios.get(`http://localhost:8080/users/${id}`).then((res) => {
            console.log(res,res.data);
            dispatch(getUser(res.data));
            // dispatch(loadUsers())
        }).catch(err => console.log(err))
    }
}

export const upadateUser = (user,id) => {
    console.log(id)
    return function (dispatch) {
        axios.put(`http://localhost:8080/users/${id}`,user).then((res) => {
            console.log(res,res.data);
            dispatch(userUpdated());
            dispatch(loadUsers())
        }).catch(err => console.log(err))
    }
}