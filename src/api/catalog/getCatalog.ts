import axios from 'axios';
import { CatalogItem } from '../../shared/models/models';

export function getCatalog() {
  return axios
    .get<{ items: CatalogItem[] }>(`https://appevent.ru/dev/task1/catalog`)
    .then((response) => response.data.items);
}
