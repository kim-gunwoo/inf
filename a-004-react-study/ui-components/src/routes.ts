import Accordions from "./components/01_accordion";
import TabMenus from "./components/02_tabMenu";
import Tooltips from "./components/03_tooltip";
import TextBoxes from "./components/04_textBox";
import LineClamps from "./components/05_lineClamp";
import LazyLoad1 from "./components/06_lazyLoading/1_r";
import LazyLoad2V from "./components/06_lazyLoading/2_v";
import LazyLoad3 from "./components/06_lazyLoading/3_r";
import InfiniteScrollR from "./components/07_infiniteScroll/react";
import InfiniteScrollV from "./components/07_infiniteScroll/vanilla";
import ScrollBox from "./components/08_scrollBox";
import ScrollSpy1 from "./components/09_scrollSpy/1_r";
import ScrollSpy2 from "./components/09_scrollSpy/2_r";
import ScrollSpy3V from "./components/09_scrollSpy/3_v";
import ScrollSpy4 from "./components/09_scrollSpy/4_r";
import Snackbar1 from "./components/10_snackbar/1_r";
import SnackbarV from "./components/10_snackbar/3_v";
import Modal1 from "./components/11_modal/1_r";
import ModalV from "./components/11_modal/3_v";
import Modal2 from "./components/11_modal/2_r";
import Snackbar2 from "./components/10_snackbar/2_r";
import Modal3 from "./components/11_modal/4_r";
import Popover1 from "./components/12_popover/1_r";
import Popover2 from "./components/12_popover/2_r";
import Popover3 from "./components/12_popover/3_r";
import ImageSlide from "./components/13_imageSlide";
import Carousel from "./components/14_carousel";
import Gallery1 from "./components/15_gallery/1_r";
import Gallery2 from "./components/15_gallery/2_r";
import Dropdowns from "./components/16_dropdown";
import Autocompletes from "./components/17_autocomplete";
import DndList from "./components/18_dndList";

export const routePaths = [
  "/",
  "/accordion",
  "/tabMenu",
  "/tooltip",
  "/textBox",
  "/lineClamp",
  "/lazyLoading",
  "/lazyLoading/1_r",
  "/lazyLoading/2_v",
  "/lazyLoading/3_r",
  "/infiniteScroll",
  "/infiniteScroll/react",
  "/infiniteScroll/vanilla",
  "/scrollBox",
  "/scrollSpy",
  "/scrollSpy/1_r",
  "/scrollSpy/2_r",
  "/scrollSpy/3_v",
  "/scrollSpy/4_r",
  "/snackbar",
  "/snackbar/1_r",
  "/snackbar/2_r",
  "/snackbar/3_v",
  "/modal",
  "/modal/1_r",
  "/modal/2_r",
  "/modal/3_v",
  "/modal/4_r",
  "/popover",
  "/popover/1_r",
  "/popover/2_r",
  "/popover/3_r",
  "/imageSlide",
  "/carousel",
  "/gallery",
  "/gallery/1_r",
  "/gallery/2_r",
  "/selectBox",
  "/autoComplete",
  "/dnd",
] as const;
export type ROUTE_PATH = (typeof routePaths)[number];

type BaseRoute = {
  key: ROUTE_PATH;
  link: ROUTE_PATH;
  name: string;
};
export type ParentRoute = BaseRoute & {
  children: ROUTE_PATH[];
};
export type ChildRoute = BaseRoute & {
  children: ((props: unknown) => JSX.Element) | null;
};
export type ROUTE = ParentRoute | ChildRoute;

export const routes: Record<ROUTE_PATH, ROUTE> = {
  "/": {
    key: "/",
    link: "/",
    name: "root",
    children: [
      "/accordion",
      "/tabMenu",
      "/tooltip",
      "/textBox",
      "/lineClamp",
      "/lazyLoading",
      "/infiniteScroll",
      "/scrollBox",
      "/scrollSpy",
      "/snackbar",
      "/modal",
      "/popover",
      "/imageSlide",
      "/carousel",
      "/gallery",
      "/selectBox",
      "/autoComplete",
      "/dnd",
    ],
  },
  "/accordion": {
    key: "/accordion",
    link: "/accordion",
    name: "01. 아코디언",
    children: Accordions,
  },
  "/tabMenu": {
    key: "/tabMenu",
    link: "/tabMenu",
    name: "02. 탭메뉴",
    children: TabMenus,
  },
  "/tooltip": {
    key: "/tooltip",
    link: "/tooltip",
    name: "03. 툴팁",
    children: Tooltips,
  },
  "/textBox": {
    key: "/textBox",
    link: "/textBox",
    name: "04. 반응형 텍스트박스",
    children: TextBoxes,
  },
  "/lineClamp": {
    key: "/lineClamp",
    link: "/lineClamp",
    name: "05. 여러줄 말줄임",
    children: LineClamps,
  },
  "/lazyLoading": {
    key: "/lazyLoading",
    link: "/lazyLoading/1_r",
    name: "06. 지연 로딩",
    children: ["/lazyLoading/1_r", "/lazyLoading/2_v", "/lazyLoading/3_r"],
  },
  "/lazyLoading/1_r": {
    key: "/lazyLoading/1_r",
    link: "/lazyLoading/1_r",
    name: "React1",
    children: LazyLoad1,
  },
  "/lazyLoading/2_v": {
    key: "/lazyLoading/2_v",
    link: "/lazyLoading/2_v",
    name: "Vanilla",
    children: LazyLoad2V,
  },
  "/lazyLoading/3_r": {
    key: "/lazyLoading/3_r",
    link: "/lazyLoading/3_r",
    name: "React3",
    children: LazyLoad3,
  },
  "/infiniteScroll": {
    key: "/infiniteScroll",
    link: "/infiniteScroll/react",
    name: "07. 무한 스크롤",
    children: ["/infiniteScroll/react", "/infiniteScroll/vanilla"],
  },
  "/infiniteScroll/react": {
    key: "/infiniteScroll/react",
    link: "/infiniteScroll/react",
    name: "React#1 - IO",
    children: InfiniteScrollR,
  },
  "/infiniteScroll/vanilla": {
    key: "/infiniteScroll/vanilla",
    link: "/infiniteScroll/vanilla",
    name: "Vanilla",
    children: InfiniteScrollV,
  },
  "/scrollBox": {
    key: "/scrollBox",
    link: "/scrollBox",
    name: "08. 횡 스크롤 박스",
    children: ScrollBox,
  },
  "/scrollSpy": {
    key: "/scrollSpy",
    link: "/scrollSpy/1_r",
    name: "09. 스크롤 스파이",
    children: [
      "/scrollSpy/1_r",
      "/scrollSpy/2_r",
      "/scrollSpy/3_v",
      "/scrollSpy/4_r",
    ],
  },
  "/scrollSpy/1_r": {
    key: "/scrollSpy/1_r",
    link: "/scrollSpy/1_r",
    name: "R - scroll",
    children: ScrollSpy1,
  },
  "/scrollSpy/2_r": {
    key: "/scrollSpy/2_r",
    link: "/scrollSpy/2_r",
    name: "R - IO",
    children: ScrollSpy2,
  },
  "/scrollSpy/3_v": {
    key: "/scrollSpy/3_v",
    link: "/scrollSpy/3_v",
    name: "Vanilla",
    children: ScrollSpy3V,
  },
  "/scrollSpy/4_r": {
    key: "/scrollSpy/4_r",
    link: "/scrollSpy/4_r",
    name: "R - ScrollBox",
    children: ScrollSpy4,
  },
  "/snackbar": {
    key: "/snackbar",
    link: "/snackbar/1_r",
    name: "10. 스낵바",
    children: ["/snackbar/1_r", "/snackbar/2_r", "/snackbar/3_v"],
  },
  "/snackbar/1_r": {
    key: "/snackbar/1_r",
    link: "/snackbar/1_r",
    name: "R - Context",
    children: Snackbar1,
  },
  "/snackbar/2_r": {
    key: "/snackbar/2_r",
    link: "/snackbar/2_r",
    name: "R - createPortal",
    children: Snackbar2,
  },
  "/snackbar/3_v": {
    key: "/snackbar/3_v",
    link: "/snackbar/3_v",
    name: "Vanilla",
    children: SnackbarV,
  },
  "/modal": {
    key: "/modal",
    link: "/modal/1_r",
    name: "11. 모달",
    children: ["/modal/1_r", "/modal/2_r", "/modal/3_v", "/modal/4_r"],
  },
  "/modal/1_r": {
    key: "/modal/1_r",
    link: "/modal/1_r",
    name: "R - Context",
    children: Modal1,
  },
  "/modal/2_r": {
    key: "/modal/2_r",
    link: "/modal/2_r",
    name: "R - createPortal",
    children: Modal2,
  },
  "/modal/3_v": {
    key: "/modal/3_v",
    link: "/modal/3_v",
    name: "Vanilla",
    children: ModalV,
  },
  "/modal/4_r": {
    key: "/modal/4_r",
    link: "/modal/4_r",
    name: "R - HTML Dialog",
    children: Modal3,
  },
  "/popover": {
    key: "/popover",
    link: "/popover/1_r",
    name: "12. 팝오버",
    children: ["/popover/1_r", "/popover/2_r", "/popover/3_r"],
  },
  "/popover/1_r": {
    key: "/popover/1_r",
    link: "/popover/1_r",
    name: "R - Basic",
    children: Popover1,
  },
  "/popover/2_r": {
    key: "/popover/2_r",
    link: "/popover/2_r",
    name: "R - createPortal",
    children: Popover2,
  },
  "/popover/3_r": {
    key: "/popover/3_r",
    link: "/popover/3_r",
    name: "R - HTML Dialog",
    children: Popover3,
  },
  "/imageSlide": {
    key: "/imageSlide",
    link: "/imageSlide",
    name: "13. 이미지 슬라이드",
    children: ImageSlide,
  },
  "/carousel": {
    key: "/carousel",
    link: "/carousel",
    name: "14. 캐러셀",
    children: Carousel,
  },
  "/gallery": {
    key: "/gallery",
    link: "/gallery/1_r",
    name: "15. 갤러리",
    children: ["/gallery/1_r", "/gallery/2_r"],
  },
  "/gallery/1_r": {
    key: "/gallery/1_r",
    link: "/gallery/1_r",
    name: "R - w/Carousel",
    children: Gallery1,
  },
  "/gallery/2_r": {
    key: "/gallery/2_r",
    link: "/gallery/2_r",
    name: "R - Viewer",
    children: Gallery2,
  },
  "/selectBox": {
    key: "/selectBox",
    link: "/selectBox",
    name: "16. 셀렉트 박스",
    children: Dropdowns,
  },
  "/autoComplete": {
    key: "/autoComplete",
    link: "/autoComplete",
    name: "17. 자동 완성",
    children: Autocompletes,
  },
  "/dnd": {
    key: "/dnd",
    link: "/dnd",
    name: "18. D&D 리스트",
    children: DndList,
  },
};

export const isParentRoute = (route: ROUTE): route is ParentRoute =>
  Array.isArray(route.children);

export const gnbRootList = (routes["/"] as ParentRoute).children.map(
  (r) => routes[r]
);
