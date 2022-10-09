import styles from './Menu.module.scss';
import Search from './Search';
import { useState } from 'react';
import Filters from './Filters';
import Orderer from './Orderer';
import Itens from './Itens';

export default function Menu() {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState<number | null>(null);
  const [orderer, setOrderer] = useState('');

  return (
    <>
      <section className={styles.menu}>
        <h3 className={styles.menu__title}>cardápio</h3>
        <Search
          search={search}
          setSearch={setSearch}
        />
        <div className={styles.menu__filters}>
          <Filters
            filter={filter}
            setFilter={setFilter}
          />
          <Orderer
            orderer={orderer}
            setOrderer={setOrderer}
          />
        </div>
        <Itens
          search={search}
          filter={filter}
          orderer={orderer}
        />
      </section>
    </>
  );
}
