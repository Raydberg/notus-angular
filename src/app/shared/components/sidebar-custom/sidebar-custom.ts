import { NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NotificationDropdown } from "../notification-dropdown/notification-dropdown";
import { UserDropdown } from "../user-dropdown/user-dropdown";

@Component({
  imports: [RouterLink, NgClass, RouterLinkActive, NotificationDropdown, UserDropdown],
  selector: 'sidebar-custom',
  templateUrl: 'sidebar-custom.html'
})

export class SidebarCustom implements OnInit {
  collapseShow = "hidden";
  constructor() { }

  ngOnInit() { }
    toggleCollapseShow(classes:any) {
    this.collapseShow = classes;
  }
}
