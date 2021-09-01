import {Routes} from "@angular/router";
import {GamesComponent} from "../components/games/games.component";
import {DevelopersComponent} from "../components/developers/developers.component";
import {HomesComponent} from "../components/homes/homes.component";
import {PlatformsService} from "../services/platforms.service";

export  let routes :Routes = [
  {path:'', component:HomesComponent},
  {path:'games', component:GamesComponent},
  {path:'developers', component:DevelopersComponent},
  {path:'platforms', component:PlatformsService}
  ]

