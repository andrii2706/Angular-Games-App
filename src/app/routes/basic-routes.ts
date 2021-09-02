import {Routes} from "@angular/router";
import {GamesComponent} from "../components/games/games.component";
import {DevelopersComponent} from "../components/developers/developers.component";
import {HomesComponent} from "../components/homes/homes.component";
import {PlatFormsComponent} from "../components/plat-forms/plat-forms.component";
import {StoresComponent} from "../components/stores/stores.component";
import {GameDetailsComponent} from "../components/games/game/game-details/game-details.component";

export  let routes :Routes = [
  {path:'', component:HomesComponent},
  {path:'games', component:GamesComponent},
  {path:'developers', component:DevelopersComponent},
  {path:'platforms', component:PlatFormsComponent},
  {path:'stores', component:StoresComponent},
  {path:'games/:id', component:GameDetailsComponent}

  ]

