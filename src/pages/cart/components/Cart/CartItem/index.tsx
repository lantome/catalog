import style from './styles.module.css';
import { ActionCreators } from '../../../../../store';
import { useDispatch } from 'react-redux';
import { Models } from '../../../../../shared';
import { useTypedSelector } from '../../../../../hooks';

interface Prop {
  addBuy: Models.CatalogItem;
}

export const CartItem: React.FC<Prop> = ({ addBuy }) => {
  const dispatch = useDispatch();

  const { cart } = useTypedSelector((state) => state.catalog);

  const deleteCardItem = () => {
    dispatch(ActionCreators.deleteCartItemAC(addBuy.id));
    localStorage.setItem(
      'cart',
      JSON.stringify(cart.filter((item) => item.id !== addBuy.id)),
    );
  };

  return (
    <div className={style.container}>
      <div>{addBuy.name}</div>
      <div className={style.container__flex}>
        <div>{addBuy.price} ₽</div>
        <div>
          <button className={style.catalog__button} onClick={deleteCardItem}>
            Убрать
          </button>
        </div>
      </div>
    </div>
  );
};
