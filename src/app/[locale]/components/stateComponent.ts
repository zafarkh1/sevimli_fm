import {
  MapAN,
  MapAS,
  MapBU,
  MapFA,
  MapJI,
  MapNG,
  MapNW,
  MapQA,
  MapQR,
  MapSA,
  MapSI,
  MapSU,
  MapTO,
  MapXO,
} from "@/components/icons/mapIcon";

interface StateComponent {
  component: any;
  fill?: string;
  left: { mobile: string; desktop: string };
  top: { mobile: string; desktop: string };
  width: { mobile: number; desktop: number };
  height: { mobile: number; desktop: number };
}

const stateComponents: Record<string, StateComponent> = {
  QR: {
    component: MapQR,
    left: { mobile: "0px", desktop: "0px" },
    top: { mobile: "0px", desktop: "0px" },
    width: { mobile: 130, desktop: 351 },
    height: { mobile: 126, desktop: 340 },
  },
  AS: {
    component: MapAS,
    left: { mobile: "43.5px", desktop: "119px" },
    top: { mobile: "0px", desktop: "0px" },
    width: { mobile: 49, desktop: 134 },
    height: { mobile: 46, desktop: 124 },
  },
  NW: {
    component: MapNW,
    left: { mobile: "113px", desktop: "307px" },
    top: { mobile: "50px", desktop: "134px" },
    width: { mobile: 102, desktop: 275 },
    height: { mobile: 116, desktop: 313 },
  },
  XO: {
    component: MapXO,
    left: { mobile: "81px", desktop: "218px" },
    top: { mobile: "98px", desktop: "265px" },
    width: { mobile: 48, desktop: 131 },
    height: { mobile: 40, desktop: 108 },
  },
  BU: {
    component: MapBU,
    left: { mobile: "122px", desktop: "331px" },
    top: { mobile: "112px", desktop: "303px" },
    width: { mobile: 65, desktop: 175 },
    height: { mobile: 66, desktop: 179 },
  },
  SA: {
    component: MapSA,
    left: { mobile: "180px", desktop: "489px" },
    top: { mobile: "134px", desktop: "363px" },
    fill: "exist",
    width: { mobile: 48, desktop: 131 },
    height: { mobile: 35, desktop: 95 },
  },
  JI: {
    component: MapJI,
    left: { mobile: "209.5px", desktop: "570px" },
    top: { mobile: "118px", desktop: "318px" },
    width: { mobile: 48, desktop: 131 },
    height: { mobile: 46, desktop: 125 },
  },
  QA: {
    component: MapQA,
    left: { mobile: "165px", desktop: "448px" },
    top: { mobile: "162px", desktop: "438px" },
    width: { mobile: 67, desktop: 181 },
    height: { mobile: 40, desktop: 109 },
  },
  SU: {
    component: MapSU,
    left: { mobile: "207px", desktop: "563px" },
    top: { mobile: "175px", desktop: "473px" },
    width: { mobile: 38, desktop: 103 },
    height: { mobile: 47, desktop: 128 },
  },
  SI: {
    component: MapSI,
    left: { mobile: "239px", desktop: "648px" },
    top: { mobile: "124.5px", desktop: "333px" },
    width: { mobile: 20, desktop: 58 },
    height: { mobile: 22, desktop: 64 },
  },
  TO: {
    component: MapTO,
    left: { mobile: "249px", desktop: "678px" },
    top: { mobile: "91px", desktop: "241px" },
    fill: "exist",
    width: { mobile: 52, desktop: 143 },
    height: { mobile: 55, desktop: 151 },
  },
  NG: {
    component: MapNG,
    left: { mobile: "282px", desktop: "771px" },
    top: { mobile: "110px", desktop: "292px" },
    width: { mobile: 37, desktop: 101 },
    height: { mobile: 25, desktop: 70 },
  },
  AN: {
    component: MapAN,
    left: { mobile: "304.6px", desktop: "836px" },
    top: { mobile: "123px", desktop: "327px" },
    width: { mobile: 31, desktop: 87 },
    height: { mobile: 17, desktop: 50 },
  },
  FA: {
    component: MapFA,
    left: { mobile: "281px", desktop: "768px" },
    top: { mobile: "130px", desktop: "348px" },
    width: { mobile: 38, desktop: 104 },
    height: { mobile: 16, desktop: 46 },
  },
};

export default stateComponents;
