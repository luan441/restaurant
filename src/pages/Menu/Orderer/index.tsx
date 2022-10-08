import styles from './Order.module.scss';
import options from './options.json';
import { useState } from 'react';
import classNames from 'classnames';
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md';

interface Props {
  orderer: string
  setOrderer: React.Dispatch<React.SetStateAction<string>>
}

export default function Orderer({ orderer, setOrderer }: Props) {
  const [open, setOpen] = useState<boolean>(false);
  const nameOrderer = orderer && options.find((option) => option.value === orderer)?.name;

  return (
    <button 
      className={classNames({
        [styles.orderer]: true,
        [styles['orderer--active']]: orderer !== ''
      })}
      onClick={() => setOpen(!open)}
      onBlur={() => setOpen(false)}
    >
      <span>{ nameOrderer || 'Ordernar por' }</span>
      {open ? (
        <MdKeyboardArrowUp size={20} />
      ) : (
        <MdKeyboardArrowDown size={20} />
      )}
      <div className={classNames({
        [styles.orderer__options]: true,
        [styles['orderer__options--active']]: open,
      })}
      >
        {options.map((option) => (
          <div 
            key={option.value}
            className={styles.orderer__option}
            onClick={() => setOrderer(option.value)}
          >
            {option.name}
          </div>
        ))}
      </div>
    </button>
  );
}