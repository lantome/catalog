import style from './styles.module.css';
import { CartItem } from './CartItem';
import { Models } from '../../../../shared';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ActionCreators } from '../../../../store';
import { useTypedSelector } from '../../../../hooks';

export const Cart: React.FC = () => {
  const dispatch = useDispatch();

  const { cart } = useTypedSelector((state) => state.catalog);

  const initialCart = JSON.parse(
    localStorage.getItem('cart')!,
  ) as Models.CatalogItem[];

  useEffect(() => {
    dispatch(ActionCreators.setFullCartAC(initialCart));
  }, [dispatch]);

  let arrayBuy = initialCart.map((someFoo) => someFoo.price);

  const priceCounter = (prev: number, cur: number) => prev + cur;

  return (
    <div className={style.container}>
      {cart.length ? (
        cart.map((addBuy) => <CartItem key={addBuy.id} addBuy={addBuy} />)
      ) : (
        <h1>Корзина пуста</h1>
      )}
      <div>
        {arrayBuy.length > 0 ? (
          <div className={style.container__allPrice}>
            Итого с вас: {arrayBuy.reduce(priceCounter)} ₽
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};
