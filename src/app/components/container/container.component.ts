import { Component } from '@angular/core';

@Component({
  selector: 'app-container',
  template: `
  <div class="container-fluid">
    <div class="row mt-5 d-flex justify-content-center align-items-center">
      <div class="col-lg-2"></div>
      <div class="col-lg-6 bg-info p-4 justify-content-center align-items-center d-flex border rounded-3 shadow-lg">
        <app-menu></app-menu>
      </div>
      <div class="col-lg-2"></div>
    </div>
  </div>
  
  `,
  styles: [``]
})
export class ContainerComponent {

}
