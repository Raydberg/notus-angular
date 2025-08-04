import { Component, OnInit } from '@angular/core';
import { UserDropdown } from "../../../../shared/components/user-dropdown/user-dropdown";

@Component({
  selector: 'admin-navbar',
  templateUrl: 'admin-navbar.html',
  imports: [UserDropdown]
})

export class AdminNavbar implements OnInit {
  constructor() { }

  ngOnInit() { }
}
