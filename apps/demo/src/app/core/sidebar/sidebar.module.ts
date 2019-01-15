import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DaffSidebarModule } from '@daffodil/design';

import { FoundationSidebarStateModule } from './sidebar.state.module';
import { SidebarViewportContainer } from './containers/sidebar-viewport/sidebar-viewport.component';
import { SidebarContainer } from './containers/sidebar/sidebar.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FoundationSidebarStateModule,
    DaffSidebarModule
  ],
  declarations: [
    SidebarViewportContainer,
    SidebarContainer
  ],
  exports: [
    SidebarViewportContainer,
    SidebarContainer
  ]
})
export class SidebarModule { }