import { useTypedSelector } from '../../../../hooks';
import { Loader } from '../../../../shared';
import { CatalogItem } from './CatalogItem';
import style from './styles.module.css';

export const Catalog: React.FC = () => {
  const { items, loading } = useTypedSelector((state) => state.catalog);

  const currentCartState = JSON.parse(localStorage.getItem('cart')!);

  return (
    <div>
      {loading ? (
        <div className={style.fetching}>
          <Loader />
        </div>
      ) : (
        <div className={style.container}>
          {items.map((catalog) => (
            <CatalogItem
              key={catalog.id}
              catalog={catalog}
              currentCartState={currentCartState}
            />
          ))}
        </div>
      )}
    </div>
  );
};
