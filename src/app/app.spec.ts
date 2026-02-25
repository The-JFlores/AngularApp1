import { Component } from '@angular/core';
import { User } from './models/user.model';

import { UserCard } from './user-card/user-card';
import { UserStatus } from './user-status/user-status';
import { UserBio } from './user-bio/user-bio';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [UserCard, UserStatus, UserBio],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  user: User = {
    name: 'Jose Flores',
    age: 30,
    profilePicture: 'https://i.pravatar.cc/150?img=3',
    bio: 'Angular student learning component interaction.',
    isOnline: true
  };

  onStatusChange(status: boolean) {
    this.user.isOnline = status;
  }

  onBioChange(newBio: string) {
    this.user.bio = newBio;
  }
}