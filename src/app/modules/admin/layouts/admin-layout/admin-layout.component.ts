import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NemeqSideMenu, TitleColor } from 'nemeq-side-menu';

@Component({
  selector: 'app-admin-layout',
  imports: [RouterOutlet, NemeqSideMenu],
  templateUrl: './admin-layout.component.html',
})
export default class AdminLayoutComponent {
  authenticated = signal(false);
  titleColor = TitleColor;

  handleLogin() {
    this.authenticated.set(true);
  }

  handleLogout() {
    this.authenticated.set(false);
  }
}
