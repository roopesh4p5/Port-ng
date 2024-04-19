import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from 'src/app/shared/popup/popup.component';
@Component({
  selector: 'app-section1',
  templateUrl: './section1.component.html',
  styleUrls: ['./section1.component.scss']
})
export class Section1Component {
  constructor(public dialog: MatDialog) {}
  isExpanded: string | null = null;

  expandImage(image: string) {
    this.isExpanded = image;
  }

  resetImageSize(image: string) {
    if (this.isExpanded === image) {
      this.isExpanded = null;
    }
  }


openPopup(): void {
  const dialogRef = this.dialog.open(PopupComponent, {
    minWidth: '50vw', // Set the width to a larger value
    maxWidth:'90vw',
    minHeight: '60vh', // Set the height to a larger value
    maxHeight:'90vh',
    panelClass: 'my-dialog-container', // Apply custom CSS class if needed
});
    // You can subscribe to any output data or events from the popup component.
    dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        // Do something with the result if needed
    });
}
}