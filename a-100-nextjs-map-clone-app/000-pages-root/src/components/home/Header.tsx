import { useCallback } from 'react';
import Link from 'next/link';

import styles from '../../styles/header.module.scss';

import { AiOutlineShareAlt } from 'react-icons/ai';
import { VscFeedback } from 'react-icons/vsc';
import HeaderComponent from '../common/Header';
import useMap from '@/hooks/useMap';
import { useRouter } from 'next/router';
import copy from 'copy-to-clipboard';

const HomeHeader = () => {
  const { resetMapOptions, getMapOptions } = useMap();

  const router = useRouter();
  const replaceAndCopyUrl = useCallback(() => {
    const mapOptions = getMapOptions();
    const query = `/?zoom=${mapOptions.zoom}&lat=${mapOptions.center[0]}&lng=${mapOptions.center[1]}`;

    router.replace(query);
    // copy
    copy(location.origin + query);
  }, [router, getMapOptions]);

  return (
    <HeaderComponent
      onClickLogo={resetMapOptions}
      rightElements={[
        <button
          key={'copy'}
          className={styles.box}
          style={{ marginRight: 8 }}
          onClick={replaceAndCopyUrl}
        >
          <AiOutlineShareAlt size={20} color="#444444" />
        </button>,
        <Link
          key="link"
          className={styles.box}
          href="/feedback"
          aria-label="피드백 페이지로 이동"
        >
          <VscFeedback size={20} color="#444444" />
        </Link>,
      ]}
    />
  );
};
export default HomeHeader;
