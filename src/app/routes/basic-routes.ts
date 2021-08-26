import {Routes} from "@angular/router";
import {GamesComponent} from "../components/games/games.component";
import {HomeComponent} from "../components/homes/home/home.component";

export  let routes :Routes = [
  {path:'', component:HomeComponent},
  {path:'games', component:GamesComponent}
  ]

