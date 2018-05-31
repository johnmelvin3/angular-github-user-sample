import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { MatSnackBar } from '@angular/material';

@Injectable()
export class ErrorService {

  constructor(public snackBar: MatSnackBar) { }

  logError(error: HttpErrorResponse) {
    // Something simple for now
    const errorMsg = `Any error occurred when retrieving users: ${ error.message }`;
    console.error(errorMsg);
    // More user-friendly error
    this.snackBar.open('Oh no! Something happened when trying to search for users! ' +
      'Please try again or refresh the page!', 'close', { duration: 5000 });
  }
}
