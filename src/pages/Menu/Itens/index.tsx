import styles from './Itens.module.scss';
import itens from './itens.json';
import Item from './Item';
import { useEffect, useState } from 'react';

interface Props {
  search: string
  filter: number | null
  orderer: string
}

export default function Itens({ search, filter, orderer }: Props) {
  const [ list, setList ] = useState(itens);

  const trySearch = (title: string): boolean => {
    const regex = new RegExp(search, 'i');
    return regex.test(title);
  };

  const tryFilter = (id: number): boolean => {
    if(filter !== null) return filter === id;
    return true;
  };

  const ordererBy = (newList: typeof itens) => {
    switch (orderer) {
      case 'porcao':
        return newList.sort((a, b) => a.size > b.size ? 1 : -1);
      
      case 'qtd_pessoas':
        return newList.sort((a, b) => a.serving > b.serving ? 1 : -1);
      
      case 'preco':
        return newList.sort((a, b) => a.price > b.price ? 1 : -1);
      
      default:
        return newList;
    }
  };

  useEffect(() => {
    const newList = itens.filter((item) => trySearch(item.title) && tryFilter(item.category.id));
    setList(ordererBy(newList));
  }, [ search, filter, orderer ]);

  return (
    <div className={styles.itens}>
      {list.map((item) => ((
        <Item
          key={item.id}
          {...item}
        />
      )))}
    </div>
  );
}