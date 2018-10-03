import {Injectable, OnInit, EventEmitter, Output} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {forkJoin} from 'rxjs';
import {delay} from 'rxjs/operators';


export interface IoptSelected {
  value: string;
  viewValue: string;
}

export interface Ilaunch {
  id: number;
  name: string;
  status: number;
  lsp: string;
  missionId: string;
  net: string;
}

@Injectable()
export class APIService implements OnInit {
  public states: Array<IoptSelected>;
  public agencies: Array<IoptSelected>;
  public kindMission: Array<IoptSelected>;
  public launches: Array<Ilaunch>;
  @Output() loading: EventEmitter<any> = new EventEmitter();

  constructor(private http: HttpClient) {
    forkJoin([
      this.http.get<any>('/assets/launchstatus.json'),
      this.http.get('/assets/launchagencies.json'),
      this.http.get('/assets/launchmissions.json'),
      this.http.get('/assets/launchlibrary.json')
    ]).pipe(delay(200)).subscribe((results: any[]) => {
      this.states = results[0].types.map(d => ({
        value: d.id, viewValue: d.id + ' - ' + d.description + ' (' + d.name + ')'
      }));
      this.agencies = results[1].agencies.map(d => ({
        value: d.id, viewValue: d.id + ' - ' + d.name
      }));
      this.kindMission = results[2].types.map(d => ({
        value: d.id, viewValue: d.id + ' - ' + d.name
      }));
      this.launches = results[3].launches;
      this.loading.emit(true);
    });
  }

  ngOnInit() {
  }
}

