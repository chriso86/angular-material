// Angular Modules
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

// Custom App Modules/Components
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
// Remove if not lazy-loading
import { LeaveApplicationRequestComponent } from "./leave-application-request/leave-application-request.component";
import { ModuleWithProviders } from "@angular/compiler/src/core";

// Lazy-loaded
let routes: Routes = [
    {
        path: 'leave',
        loadChildren: './leave-application/leave-application.module#LeaveModule'
    },
    { path: '',
        redirectTo: '/leave',
        pathMatch: 'full'
    },
    { path: '**', component: PageNotFoundComponent }
];

  // Not lazy-loaded
// routes = [
//     {
//         path: 'leave',
//         component: LeaveApplicationRequestComponent
//     },
//     { path: '',
//         redirectTo: '/leave',
//         pathMatch: 'full'
//     },
//     { path: '**', component: PageNotFoundComponent }
// ];

@NgModule({
    declarations: [
        PageNotFoundComponent
    ],
    imports: [
        RouterModule.forRoot(
            routes,
            { enableTracing: true } // Debugging
        )
    ],
    exports: [
        RouterModule
    ]
})
export class MainRoutingModule { }