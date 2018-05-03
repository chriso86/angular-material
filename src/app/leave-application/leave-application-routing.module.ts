// Angular Modules
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

// Remove if not lazy-loading
import { LeaveApplicationRequestComponent } from "./leave-application-request/leave-application-request.component";
import { ModuleWithProviders } from "@angular/compiler/src/core";

// Lazy-loaded
let routes: Routes = [
    {
        path: '',
        component: LeaveApplicationRequestComponent
    }
];

@NgModule({
    declarations: [
        LeaveApplicationRequestComponent
    ],
    imports: [
        RouterModule.forChild(
            routes
        )
    ],
    exports: [
        RouterModule
    ]
})
export class LeaveApplicationRoutingModule { }