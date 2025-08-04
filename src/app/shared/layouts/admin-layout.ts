import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarCustom } from "../components/sidebar-custom/sidebar-custom";
import { AdminNavbar } from "../../modules/admin/components/admin-navbar/admin-navbar";
import { HeaderStats } from "../../modules/admin/components/header-stats/header-stats";
import { FooterAdmin } from "../../modules/admin/components/footer-admin/footer-admin";

@Component({
  imports: [RouterOutlet, SidebarCustom, AdminNavbar, HeaderStats, FooterAdmin],
  selector: 'admin-layout',
  template: `
    <div>
      <sidebar-custom></sidebar-custom>
      <div class="relative md:ml-64 bg-slate-100">
        <admin-navbar></admin-navbar>
        <header-stats></header-stats>
        <div class="px-4 md:px-10 mx-auto w-full -m-24">
          <router-outlet></router-outlet>
          <footer-admin></footer-admin>
        </div>
      </div>
    </div>
  `
})

export class AdminLayout implements OnInit {
  ngOnInit() { }
}
