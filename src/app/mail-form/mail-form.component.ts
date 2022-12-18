import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-mail-form',
  templateUrl: './mail-form.component.html',
  styleUrls: ['./mail-form.component.css']
})
export class MailFormComponent {

  constructor(public dialogRef: MatDialogRef<any>) {}
  ngOnInit() {
    this.dialogRef.updateSize('50%', '50%');
  }

}
