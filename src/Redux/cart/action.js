import {
    ADD_TO_CART_FAILURE,
    ADD_TO_CART_REQUEST,
    ADD_TO_CART_SUCCESS,
    GET_CART_FAILURE,
    GET_CART_REQUEST,
    GET_CART_SUCCESS,
    REMOVE_FROM_CART_FAILURE,
    REMOVE_FROM_CART_REQUEST,
    REMOVE_FROM_CART_SUCCESS,
    UPDATE_CART_FAILURE,
    UPDATE_CART_REQUEST,
    UPDATE_CART_SUCCESS,
  } from "./actionTypes";
  
  export const getCart = () => async (dispatch) => {
    try {
      dispatch({ type: GET_CART_REQUEST });
  
      const res = await fetch("https://faydab.onrender.com/cart", {
        headers: {
          token: localStorage.getItem("token"),
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
  
      dispatch({ type: GET_CART_SUCCESS, payload: data.carts });
    } catch (error) {
      dispatch({
        type: GET_CART_FAILURE,
      });
    }
  };
  
  export const addProductToCart = (id, value) => async (dispatch) => {
  
    try {
      dispatch({ type: ADD_TO_CART_REQUEST });
      const res = await fetch(`https://faydab.onrender.com/cart`, {
        method: "POST",
        body: JSON.stringify({
          productId: id,
          quantity: value,
        }),
        headers: {
          token: localStorage.getItem("token"),
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      dispatch({
        type: ADD_TO_CART_SUCCESS,
        payload: {
          newCartItem: data.newCartItem,
          message: data.message,
        },
      });
    } catch (error) {
      dispatch({
        type: ADD_TO_CART_FAILURE,
        payload: { message: error.message },
      });
    }
  };
  
  export const updateProductInCart = (id, quantity) => async (dispatch) => {
    try {
      dispatch({ type: UPDATE_CART_REQUEST });
      dispatch({
        type: UPDATE_CART_SUCCESS,
        payload: {
          quantity,
          id,
          message: "Quantity changed successfully",
        },
      });
      await fetch(`https://faydab.onrender.com/cart/${id}`, {
        method: "PUT",
        body: JSON.stringify({
          quantity: quantity,
        }),
        headers: {
          token: localStorage.getItem("token"),
          "Content-Type": "application/json",
        },
      });
  
      
    } catch (error) {
      dispatch({
        type: UPDATE_CART_FAILURE,
        payload: { message: error.message },
      });
    }
  };
  
  export const removeProductFromCart = (id) => async (dispatch) => {
    try {
      dispatch({ type: REMOVE_FROM_CART_REQUEST });
  
      const res = await fetch(`https://faydab.onrender.com/cart/${id}`, {
        method: "DELETE",
        headers: {
          token: localStorage.getItem("token"),
          "Content-Type": "application/json",
        },
      });
      let data = await res.json();
  
      dispatch({
        type: REMOVE_FROM_CART_SUCCESS,
        payload: {
          id,
          message: data.message,
        },
      });
    } catch (error) {
      dispatch({
        type: REMOVE_FROM_CART_FAILURE,
        payload: { message: error.message },
      });
    }
  };