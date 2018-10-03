import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {BehaviorSubject, forkJoin} from 'rxjs';
import {IsaActions, IsaActionTypes} from './store.actions';
import {isaStoreReducer} from './store.reducer';
import {RDX, RDXInitial, selectorTypeValue} from './model';
import {delay} from 'rxjs/operators';

export enum RDXSlideTypes {
  typeRule,
  typeSelector,
  launches
}

@Injectable({
  providedIn: 'root'
})
export class RDXStore {
  private state: RDX = {...RDXInitial};

  private typeSelector$ = new BehaviorSubject<any>(this.state.typeSelector);
  private launches$ = new BehaviorSubject<any>(this.state.launches);

  constructor(public http: HttpClient) {
    this.state.typesRules = Object.keys(selectorTypeValue)
      .slice(Object.keys(selectorTypeValue).length / 2)
      .map(function (value, key) {
        return {
          value: key,
          viewValue: value
        };
      });
    forkJoin([
      http.get('/assets/launchstatus.json'),
      http.get('/assets/launchagencies.json'),
      http.get('/assets/launchmissions.json'),
      http.get('/assets/launchlibrary.json')
    ])
      .pipe(delay(1000)).subscribe((results: any[]) => {
      this.state._states = results[0].types.map(d => ({
        value: d.id, viewValue: d.id + ' - ' + d.description + ' (' + d.name + ')'
      }));
      this.state._agencies = results[1].agencies.map(d => ({
        value: d.id, viewValue: d.id + ' - ' + d.name
      }));
      this.state._typesMissions = results[2].types.map(d => ({
        value: d.id, viewValue: d.id + ' - ' + d.name
      }));
      this.state._launches = results[3].launches.map(d => ({
        name: d.name
        , launchDate: d.net
        , status: d.status
        , agencyId: d.rocket ? d.rocket.agencies ? d.rocket.agencies.length > 0 ? d.rocket.agencies[0].id : 0 : 0 : 0
        , missionType: d.missions ? d.missions.length > 0 ? d.missions[0].type : 0 : 0
      }));
    });
  }

  public select$ = (slice: RDXSlideTypes) => {
    switch (slice) {
      case RDXSlideTypes.typeSelector:
        return this.typeSelector$.asObservable();
      case RDXSlideTypes.launches:
        return this.launches$.asObservable();
    }
  };

  public selectSnapShot = (slice: RDXSlideTypes): any[] => {
    console.log('LAUNCHES slice',slice);
    switch (slice) {
      case RDXSlideTypes.typeRule:
        return [...this.state.typesRules];
        break;
      case RDXSlideTypes.typeSelector:
        return [...this.state.typeSelector];
        break;
      case RDXSlideTypes.launches:
        console.log('LAUNCHES',this.state);
        return [...this.state.launches];
        break;
    }
  };

  public dispatch = (action: IsaActions) => {
    this.state = isaStoreReducer(this.state, action);
    switch (action.type) {
      case IsaActionTypes.ChangeTypeRule:
        this.typeSelector$.next([...this.state.typeSelector]);
        break;
      case IsaActionTypes.ChangeTypeValue:
        this.launches$.next([...this.state.launches]);
        break;
    }
  }
}
