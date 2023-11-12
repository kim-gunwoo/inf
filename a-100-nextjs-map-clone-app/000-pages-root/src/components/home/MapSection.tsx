import { NaverMap } from '@/types/map';
import Map from './Map';
import useMap from '@/hooks/useMap';
import Markers from './Markers';

const MapSection = () => {
  /** onLoadMap */
  const { initializeMap } = useMap();
  const onLoadMap = (map: NaverMap) => {
    initializeMap(map);
  };

  return (
    <>
      <Map onLoad={onLoadMap} />
      <Markers />
    </>
  );
};

export default MapSection;
