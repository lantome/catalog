import { useDispatch } from 'react-redux';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import { Cart, Catalog } from './pages';
import { Header } from './shared';
import { setCatalogAC } from './store/catalog/actionCreators';

const App: React.FC = () => {
  const dispatch = useDispatch();

  const cartList = localStorage.getItem('cart');

  if (!cartList) {
    localStorage.setItem('cart', '[]');
  }

  dispatch(setCatalogAC());

  return (
    <BrowserRouter>
      <Header />
      <div className="container">
        <Switch>
          <Route exact path="/" component={Catalog} />
          <Route exact path="/basket" component={Cart} />
          <Redirect to="/" />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
