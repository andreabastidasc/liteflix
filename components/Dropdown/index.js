import React, {useRef} from 'react'
import Icon from '../icons';
import styles from './Dropdown.module.scss'
import useOutsideClick from '@/hooks/useOutsideClick';
import useMobileScreenSize from '@/hooks/useMobileScreenSize';

const CustomDropdown = props => {
  const {open, setOpen, selected, setSelected} = props;
  const isMobile = useMobileScreenSize();
  const dropdownRef = useRef();

  useOutsideClick(dropdownRef, () => {
    setOpen(false);
  });

  return (
    <div className={styles.dropdown}>
      <button className={styles['dropdown-toggle']} onClick={() => setOpen(prev => !prev)}>
        <p>Ver: <span>{selected}</span></p>
        <Icon name="arrow"/>
      </button>
      {open ? (
        <div ref={dropdownRef} className={styles['dropdown-box']}>
          {!isMobile ? (
            <div className={styles['dropdown-indicator']}>
              <Icon name="triangle" width="12" height="12" />
            </div>
          ) : null}
          <button onClick={() => setSelected('POPULARES')}>
            POPULARES 
            {selected === 'POPULARES' ? <Icon name="check" /> : null}
          </button>
          <button onClick={() => setSelected('AGREGADAS')}>
            MIS PELÍCULAS
            {selected === 'AGREGADAS' ? <Icon name="check" /> : null}
          </button>
        </div>
      ) : null}
    </div>
  )
}

export default CustomDropdown;