import {Routes} from "@angular/router";
import {GamesComponent} from "../components/games/games.component";
import {DevelopersComponent} from "../components/developers/developers.component";
import {HomesComponent} from "../components/homes/homes.component";
import {PlatFormsComponent} from "../components/plat-forms/plat-forms.component";
import {StoresComponent} from "../components/stores/stores.component";
import {GameDetailsComponent} from "../components/games/game/game-details/game-details.component";
import {LoginComponent} from "../components/homes/login/login.component";
import {RegistrationComponent} from "../components/homes/registration/registration.component";
import {ProfileComponent} from "../components/profile/profile.component";

export  let routes :Routes = [
  {path:'', component:HomesComponent, children:[
      {path:'login',component: LoginComponent},
      {path:'registration', component:RegistrationComponent},
    ]},
  {path:'games', component:GamesComponent},
  {path:'developers', component:DevelopersComponent},
  {path:'platforms', component:PlatFormsComponent , children:[
      {path:'platGames/:id', component:PlatFormsComponent}
    ]},
  {path:'stores', component:StoresComponent},
  {path:'games/:id', component:GameDetailsComponent},
  {path:'profile', component:ProfileComponent}
]

