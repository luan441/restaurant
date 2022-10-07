import styles from './Seach.module.scss';
import { CgSearch } from 'react-icons/cg';

interface Props {
  setSearch: React.Dispatch<React.SetStateAction<string>>
  search: string
}

export default function Search({ search, setSearch }: Props) {
  return (
    <div className={styles.search}>
      <input
        type="text"
        onChange={(event) => setSearch(event.target.value)}
        value={search}
        placeholder='Buscar'
      />
      <CgSearch size={20} color='#4c4d5e' />
    </div>
  );
}