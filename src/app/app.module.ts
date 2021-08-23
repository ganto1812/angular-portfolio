import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { NavMenuComponent } from "./nav-menu/nav-menu.component";
import { HomeComponent } from "./home/home.component";
import { VanillaJSComponent } from "./vanillaJS/vanillaJS.component";
import { ReactComponent } from "./react/react.component";
import { AngularComponent } from "./angular/angular.component";
import { FooterComponent } from "./footer/footer.component";
import { ChunkyComponent } from './angular/chunky/chunky.component';
import { StatsComponent } from "./angular/chunky/stats/stats.component";
import { StatComponent } from "./angular/chunky/stats/stat/stat.component";
import { OptionsComponent } from "./angular/chunky/options/options.component";
import { ActionOptionsComponent } from "./angular/chunky/options/action-options/action-options.component";
import { OptionComponent } from "./angular/chunky/options/action-options/option/option.component";
import { SpotifyComponent } from "./angular/spotify/spotify.component";
import { SpacexComponent } from './angular/spacex/spacex.component';
import { GraphQLModule } from './graphql.module';
import { LaunchDetailsComponent } from "./angular/spacex/launch-details/launch-details.component";
import { RelativeTimePipe } from './angular/spacex/pipes/relative-time/relative-time.pipe';
import { AuthorizationComponent } from './angular/spotify/authorization/authorization.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    VanillaJSComponent,
    ReactComponent,
    AngularComponent,
    StatsComponent,
    StatComponent,
    OptionsComponent,
    ActionOptionsComponent,
    OptionComponent,
    FooterComponent,
    ChunkyComponent,
    SpotifyComponent,
    SpacexComponent,
    LaunchDetailsComponent,
    RelativeTimePipe,
    AuthorizationComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: "ng-cli-universal" }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: "", component: HomeComponent, pathMatch: "full" },
      { path: "vanillaJS", component: VanillaJSComponent },
      { path: "react", component: ReactComponent },
      { path: "angular", component: AngularComponent},
      { path: "angular/chunky", component: ChunkyComponent},
      { path: "angular/spotify", component: AuthorizationComponent},
      { path: "angular/spotify/authorised", component: SpotifyComponent},
      { path: "angular/spacex", component: SpacexComponent},
      { path: "angular/spacex/:id", component: LaunchDetailsComponent},
    ]),
    GraphQLModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
