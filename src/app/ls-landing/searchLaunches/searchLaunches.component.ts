import {Observable} from 'rxjs';
import {ChangeDetectionStrategy, Component, OnInit,} from '@angular/core';
import {RDXStore, RDXSlideTypes} from '../../stores/store.state';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'ls-landing-launches',
  templateUrl: './searchLaunches.component.html',
  styleUrls: ['./searchLaunches.component.css']
})

export class LsSearchLaunchesComponent implements OnInit {
  public launches$: Observable<any>;

  constructor(public RDX: RDXStore) {
  }

  ngOnInit() {

    this.launches$ = this.RDX.select$(RDXSlideTypes.launches);

    console.log('this.launches$', this.launches$);
  }

  launchesCount() {
    return !(!this.launches$ || this.launches$ === 0) ? this.launches$ + ' found.' : 'No data found.';
  }
}
