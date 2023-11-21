import { IoIosArrowUp } from 'react-icons/io';
import styles from '../../styles/detail.module.scss';
import { CURRENT_STORE_KEY } from '@/hooks/useCurrentStore';
import useSWR from 'swr';
import { Store } from '@/types/store';
import { useState } from 'react';

const DetailSection = () => {
  const { data: currentStore } = useSWR<Store>(CURRENT_STORE_KEY);
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={`${styles.detailSection} ${expanded ? styles.expanded : ''} ${
        currentStore ? styles.selected : ''
      }`}
    >
      <div className={styles.header}>
        <button
          className={`${styles.arrowButton} ${expanded ? styles.expanded : ''}`}
          onClick={() => {
            setExpanded(!expanded);
          }}
          disabled={!currentStore}
          aria-label={expanded ? '매장 정보 접기' : '매장 정보 펼치기'}
        >
          <IoIosArrowUp size={20} color="#666666" />
        </button>
        {!currentStore && <p className={styles.title}>매장을 선택해주세요</p>}
        {currentStore && (
          <div className={styles.flexRow}>
            <h1 className={styles.title}>{currentStore.name}</h1>
          </div>
        )}
      </div>
    </div>
  );
};
export default DetailSection;
