import {selectorTypeValue} from './model';

export enum IsaActionTypes {
  ChangeTypeRule,
  ChangeTypeValue
}

export interface Action {
  readonly type: IsaActionTypes;
  readonly payload?: any;
}

export class ChangeTypeRule implements Action {
  public readonly type = IsaActionTypes.ChangeTypeRule;

  constructor(public readonly payload: selectorTypeValue) {
  }
}

export class ChangeTypeValue implements Action {
  public readonly type = IsaActionTypes.ChangeTypeValue;

  constructor(public readonly payload: string) {
  }
}

export type IsaActions = ChangeTypeRule | ChangeTypeValue;
