import { NgClass } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { createPopper } from '@popperjs/core';

@Component({
  standalone: true,
  imports: [NgClass],
  selector: 'table-dropdown',
  template: `
<a
  class="text-slate-500 block py-1 px-3"
  href="#pablo"
  (click)="toggleDropdown($event)"
  #btnDropdownRef
>
  <i class="fas fa-ellipsis-v"></i>
</a>
<div class="min-w-[192px] z-50" #popoverDropdownRef>
  <div
    class="bg-white text-base float-left py-2 list-none text-left rounded shadow-lg mt-1 min-w-[192px]"
    [ngClass]="dropdownPopoverShow ? 'block' : 'hidden'"
  >
    <a
      href="#pablo"
      class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"
    >
      Action
    </a>
    <a
      href="#pablo"
      class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"
    >
      Another action
    </a>
    <a
      href="#pablo"
      class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"
    >
      Something else here
    </a>
    <div class="h-0 my-2 border border-solid border-slate-100"></div>
    <a
      href="#pablo"
      class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"
    >
      Seprated link
    </a>
  </div>
</div>

  `
})

export class TableDropdown {
  dropdownPopoverShow = false;
  @ViewChild("btnDropdownRef", { static: false }) btnDropdownRef!: ElementRef;
  @ViewChild("popoverDropdownRef", { static: false })
  popoverDropdownRef!: ElementRef;
  ngAfterViewInit() {
    createPopper(
      this.btnDropdownRef.nativeElement,
      this.popoverDropdownRef.nativeElement,
      {
        placement: "bottom-start",
      }
    );
  }
  toggleDropdown(event: any) {
    event.preventDefault();
    if (this.dropdownPopoverShow) {
      this.dropdownPopoverShow = false;
    } else {
      this.dropdownPopoverShow = true;
    }
  }
}
