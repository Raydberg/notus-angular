import { NgClass } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { createPopper } from '@popperjs/core';

@Component({
  standalone: true,
  imports: [RouterLink, NgClass],
  selector: 'dropdown-custom',
  template: `
  <a
  class="hover:text-slate-500 text-slate-700 px-3 py-2 flex items-center text-xs uppercase font-bold"
  href="#pablo"
  (click)="toggleDropdown($event)"
  #btnDropdownRef
>
  Demo Pages
</a>
<div
  class="bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-[192px]"
  [ngClass]="dropdownPopoverShow ? 'block' : 'hidden'"
  #popoverDropdownRef
>
  <span
    class="text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-slate-400"
  >
    Admin Layout
  </span>
  <a
    [routerLink]="['/admin/dashboard']"
    class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700 hover:bg-slate-100 hover:text-slate-900"
  >
    Dashboard
  </a>
  <a
    [routerLink]="['/admin/settings']"
    class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700 hover:bg-slate-100 hover:text-slate-900"
  >
    Settings
  </a>
  <a
    [routerLink]="['/admin/tables']"
    class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700 hover:bg-slate-100 hover:text-slate-900"
  >
    Tables
  </a>
  <a
    [routerLink]="['/admin/maps']"
    class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700 hover:bg-slate-100 hover:text-slate-900"
  >
    Maps
  </a>
  <div class="h-0 mx-4 my-2 border border-solid border-slate-100"></div>
  <span
    class="text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-slate-400"
  >
    Auth Layout
  </span>
  <a
    [routerLink]="['/auth/login']"
    class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700 hover:bg-slate-100 hover:text-slate-900"
  >
    Login
  </a>
  <a
    [routerLink]="['/auth/register']"
    class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700 hover:bg-slate-100 hover:text-slate-900"
  >
    Register
  </a>
  <div class="h-0 mx-4 my-2 border border-solid border-slate-100"></div>
  <span
    class="text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-slate-400"
  >
    No Layout
  </span>
  <a
    [routerLink]="['/landing']"
    class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700 hover:bg-slate-100 hover:text-slate-900"
  >
    Landing
  </a>
  <a
    [routerLink]="['/profile']"
    class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700 hover:bg-slate-100 hover:text-slate-900"
  >
    Profile
  </a>
</div>

  `
})

export class DropdownCustom implements OnInit {
  dropdownPopoverShow = false;
  @ViewChild("btnDropdownRef", { static: false }) btnDropdownRef!: ElementRef;
  @ViewChild("popoverDropdownRef", { static: false })
  popoverDropdownRef!: ElementRef;
  ngOnInit() { }
  toggleDropdown(event: any) {
    event.preventDefault();
    if (this.dropdownPopoverShow) {
      this.dropdownPopoverShow = false;
    } else {
      this.dropdownPopoverShow = true;
      this.createPoppper();
    }
  }
  createPoppper() {
    createPopper(
      this.btnDropdownRef.nativeElement,
      this.popoverDropdownRef.nativeElement,
      {
        placement: "bottom-start",
      }
    );
  }
}
