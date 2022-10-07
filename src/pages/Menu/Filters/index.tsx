import styles from './Filters.module.scss';
import filters from './filters.json';

type IOption = typeof filters[0];

export default function Filters() {
  const selectFilter = (option: IOption) => {

  };

  return (
    <div className={styles.filters}>
      {filters.map((option) => (
        <button 
          key={option.id}
          onClick={() => selectFilter(option)}
          className={styles.filters__filter}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}