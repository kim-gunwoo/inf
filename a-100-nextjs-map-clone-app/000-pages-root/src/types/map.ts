// import type { Coordinates } from './store';
import { Coordinates } from './store';

export type NaverMap = naver.maps.Map;

export type ImageIcon = {
  url: string;
  size: naver.maps.Size;
  origin: naver.maps.Point;
  scaledSize?: naver.maps.Size;
};

export type Marker = {
  map: NaverMap;
  coordinates: Coordinates;
  icon: ImageIcon;
  onClick?: () => void;
};
