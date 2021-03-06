import {Observable} from 'rxjs';
import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {RDXStore, RDXSlideTypes} from '../../stores/store.state';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'ls-landing-launches',
    templateUrl: './ls-landing-launches.component.html',
    styleUrls: ['./ls-landing-launches.component.css']
})

export class LsSearchLaunchesComponent implements OnInit {
    public launches$: Observable<any[]>;

    constructor(public RDX: RDXStore) {
    }

    ngOnInit() {
        this.launches$ = this.RDX.select$(RDXSlideTypes.launches);
    }
}
