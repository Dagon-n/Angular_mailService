import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MessageActionsComponent } from './message-actions/message-actions.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { AppComponent } from './app.component';
import { MailViewComponent } from './mail-view/mail-view.component';
import { FolderListComponent } from './folder-list/folder-list.component';
import { MessageListComponent } from './message-list/message-list.component';
import { MessageViewerComponent } from './message-viewer/message-viewer.component';
import { HeaderToolbarComponent } from './header-toolbar/header-toolbar.component';
import { MailFormComponent } from './mail-form/mail-form.component';

@NgModule({
  declarations: [
    AppComponent,
    MailViewComponent,
    FolderListComponent,
    MessageListComponent,
    MessageViewerComponent,
    HeaderToolbarComponent,
    MessageActionsComponent,
    MailFormComponent,
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
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
