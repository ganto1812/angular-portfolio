import { Component } from '@angular/core';
import { map } from "rxjs/operators";
import { PastLaunchesListGQL } from './services/spacexGraphql.service';

@Component({
  selector: 'app-spacex',
  templateUrl: './spacex.component.html',
  styles: [
  ]
})
export class SpacexComponent {

  constructor(private pastLaunchedService: PastLaunchesListGQL) {
   }

   pastLaunches$ = this.pastLaunchedService.fetch({ limit: 50 }).pipe(
    map((res) =>
      res.data.launchesPast.filter((l) => {
        return (l.links.mission_patch_small && l.links.flickr_images.length > 0);
      })
    )
  );

}
