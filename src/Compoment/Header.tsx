import React, { FC, useState, useContext, useEffect} from "react";
import { Container, Nav } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import {getcategory} from '../functions/api';
import { useSelector, useDispatch } from "react-redux";
import { rootState, CategoryType } from "../redux/types";
import { handleSignOut } from "../redux/actions/userAction";
const Header: FC = () => {
 
    const auth:any = useSelector<rootState>((state) => state.user);
    const loggedIn = auth.loggedIn;
    //console.log('user logindata = ',auth);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [categories , setcategory] = useState([]);
    useEffect( () => {
        allfunction();
    }, []);
    
    const allfunction = async () => {
        const category:any = await getcategory();
        setcategory(category);
    };  

    const category = categories.map((data:CategoryType)=>{
        const {id, name} = data;
        return(
            <li className="nav-item" key={id} >
                <NavLink className="nav-link text-white" to={'/categories/'+id}>
                    {name}
                </NavLink>
            </li>
        )
    });

    const logoutUser = () => {
        dispatch(handleSignOut());
        localStorage.removeItem("user");
    };

  return (
    <>
        <Nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Container className="d-flex flex-end">
                <NavLink className="navbar-brand" to="/">Meri Shop</NavLink>
                <div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                            { !loggedIn ? (
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/cart">Cart</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/login">Login</NavLink>
                                    </li><li className="nav-item">
                                        <NavLink className="nav-link" to="/register">Register</NavLink>
                                    </li>
                                </ul>
                            ): (
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/cart">Cart</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/profile" > {auth.loginData.user.name} </NavLink>
                                    </li>

                                    <li className="nav-item">
                                        <p className="nav-link btn btn-link" onClick={logoutUser}> Logout </p>
                                    </li>

                                </ul>
                            )}
                    </div>
                </div>
            </Container>
        </Nav>
        <div className="py-2 bg-primary">
            <Container className="content-center">
                <ul className="nav d-flex justify-content-center">
                    {category}
                </ul>
            </Container>
        </div>
    </>
  );
};

export default Header;
