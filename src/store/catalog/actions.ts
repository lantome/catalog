import { Models } from '../../shared';

export enum CatalogActionTypes {
  CATALOG_FETCH_SUCCESS = 'CATALOG_FETCH_SUCCESS',
  CATALOG_FETCHING = 'CATALOG_FETCHING',
  CATALOG_FETCH_ERROR = 'CATALOG_FETCH_ERROR',
  ADD_CART_ITEM = 'CARDITEM',
  DELETE_CART_ITEM = 'DELETE_CARD_ITEM',
  SET_FULL_CART = 'SET_FULL_CART',
}

interface CardItemAction {
  type: CatalogActionTypes.ADD_CART_ITEM;
  payload: Models.CatalogItem;
}

interface DeleteCardItemAtion {
  type: CatalogActionTypes.DELETE_CART_ITEM;
  payload: number;
}

interface SetCatalogItemsSuccessAction {
  type: CatalogActionTypes.CATALOG_FETCH_SUCCESS;
  payload: Models.CatalogItem[];
}

interface SetCatalogItemsFetchAction {
  type: CatalogActionTypes.CATALOG_FETCHING;
}

interface SetCatalogItemsErrorAction {
  type: CatalogActionTypes.CATALOG_FETCH_ERROR;
  payload: string;
}

interface SetFullCartAction {
  type: CatalogActionTypes.SET_FULL_CART;
  payload: Models.CatalogItem[];
}

export type CatalogAction =
  | SetCatalogItemsSuccessAction
  | SetCatalogItemsFetchAction
  | SetCatalogItemsErrorAction
  | DeleteCardItemAtion
  | CardItemAction
  | SetFullCartAction;
