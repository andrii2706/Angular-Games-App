import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GamesComponent } from './components/games/games.component';
import { GameComponent } from './components/games/game/game.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NgxPaginationModule} from 'ngx-pagination';
import { WrapComponent } from './components/wrap/wrap.component';
import { UserComponent } from './components/user/user.component'
import {RouterModule} from "@angular/router";
import {routes} from "./routes/basic-routes";
import { HomesComponent } from './components/homes/homes.component';
import { DevelopersComponent } from './components/developers/developers.component';
import { DeveloperComponent } from './components/developers/developer/developer.component';
import { PlatFormsComponent } from './components/plat-forms/plat-forms.component';
import { PlatFormComponent } from './components/plat-forms/plat-form/plat-form.component';
import { StoresComponent } from './components/stores/stores.component';
import { StoreComponent } from './components/stores/store/store.component';
import { GameDetailsComponent } from './components/games/game/game-details/game-details.component';
import { PlatformGamesComponent } from './components/plat-forms/plat-form/platform-games/platform-games.component';

@NgModule({
  declarations: [
    AppComponent,
    GamesComponent,
    GameComponent,
    WrapComponent,
    UserComponent,
    HomesComponent,
    DevelopersComponent,
    DeveloperComponent,
    PlatFormsComponent,
    PlatFormComponent,
    StoresComponent,
    StoreComponent,
    GameDetailsComponent,
    PlatformGamesComponent
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        NgbModule,
        NgxPaginationModule,
        RouterModule.forRoot(routes)
    ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
