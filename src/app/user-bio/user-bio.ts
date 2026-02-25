

import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-bio',
  standalone: true,
  templateUrl: './user-bio.html',
  styleUrl: './user-bio.css'
})
export class UserBio {
  @Input() bio!: string;
  @Output() bioChanged = new EventEmitter<string>();

  editBio(event: Event) {
    const value = (event.target as HTMLTextAreaElement).value;
    this.bioChanged.emit(value);
  }
}