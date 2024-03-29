import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class SharedService {

  sidebarVisible: boolean;
  sidebarVisibilitySubject: Subject<boolean> = new Subject<boolean>();
  maTheme: string;
  maThemeSubject: Subject<string> = new Subject<string>();

  // Sidebar visibility
  toggleSidebarVisibilty() {
    this.sidebarVisible = !this.sidebarVisible;
    this.sidebarVisibilitySubject.next(this.sidebarVisible);
  }

  // Theming
  setTheme(color) {
    this.maTheme = color;
    this.maThemeSubject.next(this.maTheme);
  }

  constructor() {
    // Hidden the sidebar by default
    this.sidebarVisible = false;

    // Set default theme as green
    this.maTheme = 'green';
  }
}
