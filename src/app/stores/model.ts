import {OptionSelect} from './model';

export interface RDX {
  // PRIVATE STORE
  _states: OptionSelect[];
  _agencies: OptionSelect[];
  _typesMissions: OptionSelect[];
  _launches: Launch[];
  typesRules: any;

  // PUBLIC STORE
  typeValue: selectorTypeValue;
  typeSelector: OptionSelect[];
  launches: Launch[];
}

export const RDXInitial: RDX = {
  _states: [],
  _agencies: [],
  _typesMissions: [],
  _launches: [],
  typesRules: [],
  typeValue: null,
  typeSelector: [],
  launches: [],
};


export enum selectorTypeValue {
  State,
  Agency,
  TypeMission
}

export interface OptionSelect {
  value: string;
  viewValue: string;
}

export interface Launch {
  name: string;
  launchDate: string;
  status: number;
  agencyId: number;
  missionType: number;
}

