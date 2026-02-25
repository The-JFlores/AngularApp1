

import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-status',
  templateUrl: './user-status.html',
  styleUrl: './user-status.css'
})
export class UserStatus {

  // Receives online status from parent
  @Input() isOnline!: boolean;

  // Sends updated status back to parent
  @Output() statusChanged = new EventEmitter<boolean>();

  toggleStatus() {
    this.isOnline = !this.isOnline;
    this.statusChanged.emit(this.isOnline);
  }
}