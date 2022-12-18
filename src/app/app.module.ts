import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MailViewComponent } from './mail-view/mail-view.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FolderListComponent } from './folder-list/folder-list.component';
import { MessageListComponent } from './message-list/message-list.component';
import { MessageViewerComponent } from './message-viewer/message-viewer.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HeaderToolbarComponent } from './header-toolbar/header-toolbar.component';
import { MatButtonModule } from '@angular/material/button';
import { MessageActionsComponent } from './message-actions/message-actions.component';

@NgModule({
  declarations: [
    AppComponent,
    MailViewComponent,
    FolderListComponent,
    MessageListComponent,
    MessageViewerComponent,
    HeaderToolbarComponent,
    MessageActionsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    /* Angular Material */
    MatListModule,
    MatSidenavModule,
    MatDividerModule,
    MatToolbarModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
