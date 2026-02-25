

import { Component, Input } from '@angular/core';
import { User } from '../models/user.model';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.html',
  styleUrl: './user-card.css'
})
export class UserCard {

  // Receives user object from parent component
  @Input() user!: User;

}