
//import {LOGOUT} from "../../Authentication/ActionType";
import { LOGOUT } from "../Authentication/ActionType";
import * as ActionTypes from "./ActionTypes";

const initialState = {
    cart: null,
    cartItems: [],
    loading: false,
    error: null,
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.FIND_CART_REQUEST:
        case ActionTypes.GET_ALL_CART_ITEMS_REQUEST:
        case ActionTypes.UPDATE_CARTITEM_REQUEST:
        case ActionTypes.REMOVE_CARTITEM_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case ActionTypes.FIND_CART_SUCCESS:
        case ActionTypes.CLEAR_CART_SUCCESS:
            return {
                ...state,
                loading: false,
                cart: action.payload,
                cartItems: action.payload.items,
            };
        case ActionTypes.ADD_ITEM_TO_CART_SUCCESS:
            return {
                ...state,
                cartItems: [...state.cartItems, action.payload],
                loading: false,
            };
        case ActionTypes.UPDATE_CARTITEM_SUCCESS:
            return {
                ...state,
                loading: false,
                cartItems: state.cartItems.map((item) => 
                    item.id === action.payload.id ? action.payload : item
            ),
            };
        case ActionTypes.REMOVE_CARTITEM_SUCCESS:
            return {
                ...state,
                loading: false,
                cartItems: state.cartItems.filter((item) =>
                    item.id !== action.payload
                ),
            };
        case ActionTypes.FIND_CART_FAILURE:
        case ActionTypes.UPDATE_CARTITEM_FAILURE:
        case ActionTypes.REMOVE_CARTITEM_FAILURE:

            return {
                ...state,
                loading: false,
                error: action.payload,
            };

            case LOGOUT:
                localStorage.removeItem("jwt");
                return { ...state, cartItems:[], cart:null, success: "logout success" };
            default:
                return state;
    }
};

export default cartReducer;