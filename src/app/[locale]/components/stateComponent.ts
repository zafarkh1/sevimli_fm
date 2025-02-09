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
  left: string;
  top: string;
  fill?: string;
}

const stateComponents: Record<string, StateComponent> = {
  QR: { component: MapQR, left: "0px", top: "0px" },
  AS: { component: MapAS, left: "119px", top: "0px" },
  NW: { component: MapNW, left: "307px", top: "134px" },
  XO: { component: MapXO, left: "218px", top: "265px" },
  BU: { component: MapBU, left: "331px", top: "302px" },
  SA: { component: MapSA, left: "489px", top: "361px", fill: "exist" },
  JI: { component: MapJI, left: "570px", top: "318px" },
  QA: { component: MapQA, left: "448px", top: "438px" },
  SU: { component: MapSU, left: "564px", top: "471px" },
  SI: { component: MapSI, left: "648px", top: "333px" },
  TO: { component: MapTO, left: "678px", top: "241px", fill: "exist" },
  NG: { component: MapNG, left: "772px", top: "292px" },
  AN: { component: MapAN, left: "836px", top: "327px" },
  FA: { component: MapFA, left: "770px", top: "349px" },
};

export default stateComponents;
