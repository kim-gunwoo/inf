import { IoIosArrowUp } from 'react-icons/io';
import styles from '../../styles/detail.module.scss';
import { CURRENT_STORE_KEY } from '@/hooks/useCurrentStore';
import useSWR from 'swr';
import { Store } from '@/types/store';
import { useState } from 'react';
import DetailContent from './DetailContent';
import DetailHeader from './DetailHeader';
import { useRouter } from 'next/router';

const DetailSection = () => {
  const { data: currentStore } = useSWR<Store>(CURRENT_STORE_KEY);
  const [expanded, setExpanded] = useState(false);
  const router = useRouter();

  return (
    <div
      className={`${styles.detailSection} ${expanded ? styles.expanded : ''} ${
        currentStore ? styles.selected : ''
      }`}
    >
      <DetailHeader
        currentStore={currentStore}
        expanded={expanded}
        onClickArrow={() => {
          setExpanded(!expanded);
          if (currentStore && !expanded) {
            router.push(`/${currentStore.name}`);
          }
        }}
      />
      <DetailContent currentStore={currentStore} expanded={expanded} />
    </div>
  );
};
export default DetailSection;
