import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideMenuComponent } from '../../../shared/components/side-menu/side-menu.component';

@Component({
  selector: 'app-admin-layout',
  imports: [RouterOutlet, SideMenuComponent],
  templateUrl: './admin-layout.component.html',
})
export default class AdminLayoutComponent {
  authenticated = signal(false);

  handleLogin() {
    this.authenticated.set(true);
  }

  handleLogout() {
    this.authenticated.set(false);
  }
}
