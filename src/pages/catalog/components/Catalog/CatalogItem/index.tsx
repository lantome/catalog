import { useDispatch } from 'react-redux';
import { ActionCreators } from '../../../../../store';
import style from './styles.module.css';
import { NavLink } from 'react-router-dom';
import { Models } from '../../../../../shared';

interface Prop {
  catalog: Models.CatalogItem;
  currentCartState: Models.CatalogItem[];
}

export const CatalogItem: React.FC<Prop> = ({
  catalog,
  currentCartState = [],
}) => {
  const dispatch = useDispatch();

  const isInCart = currentCartState.find((item) => item.id === catalog.id);

  const addCardItem = () => {
    dispatch(
      ActionCreators.addCartItemAC({
        id: catalog.id,
        image: catalog.image,
        name: catalog.name,
        price: catalog.price,
      }),
    );

    localStorage.setItem(
      'cart',
      JSON.stringify([...currentCartState, catalog]),
    );
  };

  return (
    <div className={style.catalog}>
      <div>
        <img
          className={style.catalog__image}
          src={catalog.image}
          alt="catalog item"
        />
      </div>
      <div className={style.catalog__name}>{catalog.name}</div>
      <div className={style.catalog__price}>Цена: {catalog.price} ₽</div>
      {isInCart ? (
        <div>
          <NavLink to="/basket">
            <button className={style.catalog__button}>Оформить заказ</button>
          </NavLink>
        </div>
      ) : (
        <div>
          <button onClick={addCardItem} className={style.catalog__button}>
            Добавить в корзину
          </button>
        </div>
      )}
    </div>
  );
};
