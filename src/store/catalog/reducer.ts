import { CatalogAction, CatalogActionTypes } from './actions';
import { Models } from '../../shared';

interface CatalogState {
  items: Models.CatalogItem[];
  loading: boolean;
  error: null | string;
  cart: Models.CatalogItem[];
}

const initialState: Readonly<CatalogState> = {
  items: [],
  loading: false,
  error: null,
  cart: [],
};

export const catalogReducer = (
  state = initialState,
  action: CatalogAction,
): CatalogState => {
  switch (action.type) {
    case CatalogActionTypes.CATALOG_FETCH_SUCCESS:
      return {
        ...state,
        items: action.payload,
        loading: false,
        error: null,
      };
    case CatalogActionTypes.CATALOG_FETCHING:
      return {
        ...state,
        loading: true,
        error: null,
        items: [],
      };
    case CatalogActionTypes.CATALOG_FETCH_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
        items: [],
      };
    case CatalogActionTypes.ADD_CART_ITEM:
      return {
        ...state,
        cart: [
          ...state.cart,
          {
            id: action.payload.id,
            name: action.payload.name,
            image: action.payload.image,
            price: action.payload.price,
          },
        ],
      };
    case CatalogActionTypes.SET_FULL_CART:
      return {
        ...state,
        cart: action.payload,
      };
    case CatalogActionTypes.DELETE_CART_ITEM:
      return {
        ...state,
        cart: state.cart.filter((value) => value.id !== action.payload),
      };
    default:
      return state;
  }
};
