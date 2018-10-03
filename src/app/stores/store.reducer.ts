import {IsaActions, IsaActionTypes} from './store.actions';
import {RDX, RDXInitial, selectorTypeValue} from './model';

export function isaStoreReducer(state = RDXInitial,
                                action: IsaActions): RDX {
  const result = {...state};
  switch (action.type) {
    case IsaActionTypes.ChangeTypeRule:
      result.typeValue = action.payload;
      switch (+action.payload) {
        case selectorTypeValue.State:
          result.typeSelector = result._states;
          break;
        case selectorTypeValue.Agency:
          result.typeSelector = result._agencies;
          break;
        case selectorTypeValue.TypeMission:
          result.typeSelector = result._typesMissions;
          break;
      }
      break;

    case IsaActionTypes.ChangeTypeValue:
      switch (+result.typeValue) {
        case selectorTypeValue.State:
          result.launches = result._launches.filter(l => l.status === Number(action.payload));
          break;
        case selectorTypeValue.Agency:
          result.launches = result._launches.filter(l => l.agencyId === Number(action.payload));
          break;
        case selectorTypeValue.TypeMission:
          result.launches = result._launches.filter(l => l.missionType === Number(action.payload));
          break;
      }
      break;
  }
  return result;
}
