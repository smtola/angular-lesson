import { Component } from '@angular/core';

@Component({
  selector: 'app-directive',
  template: `
  <app-event-binding></app-event-binding>
     <div class="container d-block justify-content-center align-items-center">
      <div class="row">
        <div class="col-lg-12 col-md-12 col-12" *ngFor="let p of product; let i = index">
          <span class="text-info fs-4">{{ i }}</span>
          <table class="table tableless">
            <tr [ngStyle]="{  background: p.stock === 'Available' ? '#D5F5E3' : '#FADBDB'}" >
                  <td class="p-3"><img [src]="p.img" alt="" width="100" height="100"></td>
                  <td>
                    <h1 [ngStyle]="{  background: p.stock === 'Available' ? '#D5F5E3' : '#FADBDB'}">{{p.name}}</h1>
                    <ul class="d-flex" style="list-style-type:none;" [ngStyle]="{  background: p.stock === 'Available' ? '#D5F5E3' : '#FADBDB'}">
                      <li class="mx-3" [ngStyle]="{color: p.stock === 'Available' ? 'Green' : 'red'}">{{p.stock}}</li>
                      <li class="mx-3">Price: <span>{{p.price}}</span></li>
                      <li class="mx-3">Color: <span>{{p.color}}</span></li>
                    </ul>
                  </td>
                  <td class="p-3">
                    <button class="btn btn-success form-control">Show Detail</button>
                  </td>
                  <td class="p-3">
                    <button class="btn btn-warning form-control" *ngIf="p.stock == 'Available';else notifyme" >Buy Me</button>
                    <ng-template #notifyme>
                      <button type="button" class="btn btn-danger form-control">Notify Me</button>
                    </ng-template>
                  </td>
                </tr>
            </table>

        </div>
      </div>
    </div>
  `,
  styles: [``]
})
export class DirectiveComponent {
  product = [
    {name:'iPhone 15 Pro Max',stock:'Not Available',price: '$1999',color:'Silver',img:'./assets/img/iphone-15-pro-max.jpg'},
    {name:'iWatch',stock:'Available',price: '$399',color:'black',img:'./assets/img/iwatch.jpg'},
    {name:'Smart TV',stock:'Not Available',price: '$599',color:'White&Black',img:'./assets/img/smartTv.jpg'},
    {name:'Smart TV',stock:'Available',price: '$599',color:'White&Black',img:'./assets/img/smartTv.jpg'},
  ]
}
