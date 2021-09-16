import { CatalogAction, CatalogActionTypes } from './actions';
import { Models } from '../../shared';
import { Dispatch } from 'redux';
import { getCatalog } from '../../api';

export const addCartItemAC = (CartItem: Models.CatalogItem): CatalogAction => {
  return {
    type: CatalogActionTypes.ADD_CART_ITEM,
    payload: CartItem,
  };
};

export const setFullCartAC = (
  cartItems: Models.CatalogItem[],
): CatalogAction => {
  return {
    type: CatalogActionTypes.SET_FULL_CART,
    payload: cartItems,
  };
};

export const deleteCartItemAC = (id: number): CatalogAction => {
  return {
    type: CatalogActionTypes.DELETE_CART_ITEM,
    payload: id,
  };
};

export const setCatalogInitAC = (): CatalogAction => ({
  type: CatalogActionTypes.CATALOG_FETCHING,
});

export const setCatalogErrorAC = (str: string): CatalogAction => {
  return {
    type: CatalogActionTypes.CATALOG_FETCH_ERROR,
    payload: str,
  };
};

export const setCatalogSuccessAC = (
  catalog: Models.CatalogItem[],
): CatalogAction => {
  return {
    type: CatalogActionTypes.CATALOG_FETCH_SUCCESS,
    payload: catalog,
  };
};

export const setCatalogAC = () => {
  return async (dispatch: Dispatch<CatalogAction>) => {
    dispatch(setCatalogInitAC());
    try {
      const respone = await getCatalog();
      setTimeout(() => {
        dispatch(setCatalogSuccessAC(respone));
      }, 500);
    } catch (e) {
      console.error(e);
      dispatch(setCatalogErrorAC('Catalog fetching error'));
    }
  };
};
