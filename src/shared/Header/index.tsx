import { NavLink } from 'react-router-dom';
import { useTypedSelector } from '../../hooks';
import style from './styles.module.css';

export const Header: React.FC = () => {
  const localySavedCart = JSON.parse(localStorage.getItem('cart')!);

  const { cart } = useTypedSelector((state) => state.catalog);

  return (
    <header className={style.header}>
      <div className="container">
        <div className={style.header__inner}>
          <div className={style.header__buttons}>
            <NavLink to="/">
              <button className={style.header__button}>Каталог</button>
            </NavLink>
            <NavLink to="/basket">
              <button className={style.header__button}>
                Корзина: {cart.length || localySavedCart.length}
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
};
