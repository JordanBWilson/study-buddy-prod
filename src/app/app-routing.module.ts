import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules  } from '@angular/router';

const routes: Routes = [
  { path: 'landing', 
    loadChildren: './landing-page/landing-page.module#LandingPageModule'
  },
  { path: 'login-in', 
    loadChildren: './login/login.module#LoginModule'
  },
  { path: 'sign-up', 
    loadChildren: './sign-up/sign-up.module#SignUpModule'
  },
  { path: '',   
    redirectTo: '/landing', 
    pathMatch: 'full' 
  },
  { path: '**', 
    loadChildren: './page-not-found/page-not-found.module#PageNotFoundModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {

    preloadingStrategy: PreloadAllModules // <-This will load the other modules once the first module loads
  }
    
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
