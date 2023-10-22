import { Component } from '@angular/core';
@Component({
  selector: 'app-menu',
  template: `
  <div class="row">
    <div class="col">
      <div ngbDropdown class="d-inline-block">
        <button type="button" class="btn btn-outline-danger p-3" id="dropdownBasic1" ngbDropdownToggle>
          Toggle dropdown
        </button>
        <div ngbDropdownMenu aria-labelledby="dropdownBasic1">
          <button routerLink="data-binding" ngbDropdownItem>Data Binding</button>
          <button routerLink="event-binding" ngbDropdownItem>Event Binding</button>
          <button routerLink="directive" ngbDropdownItem>Directive</button>
          <button routerLink="pro-course" ngbDropdownItem>Project Course</button>
        </div>
      </div>
    </div>
  `,
  styles: [`
  
  `]
})
export class MenuComponent {

}
