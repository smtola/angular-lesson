import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  template: `
 <div class="container d-block justify-content-center align-items-center">
      <div class="row">
        <!-- <div class="col-lg-12 col-md-12 col-12">
            <hr>
            <form action="">
              <label for=""><h4 class="text-info">Search : </h4></label>
              <input type="text" class="form-control" (input)="changeSearchValue($event);">
            </form>
            <div class="m-2 bg-secondary p-3 rounded-2">
              <h2 class="text-primary"> Search Result : <span class="text-white text-center">{{searchValue}}</span></h2>
            </div>
        </div> -->
        <div class="col-lg-12 col-md-12 col-12 m-2" [ngClass]="{changeBackground:searchValue != ''}">
            <hr>
            <form action="">
              <label for=""><h4 class="text-info">Search : </h4></label>
              <input type="text" class="form-control" [(ngModel)]="searchValue" [ngModelOptions]="{standalone: true}">
            </form>
            <div class="m-2 bg-secondary p-3 rounded-2" *ngIf="searchValue != ''">
              <h2 class="text-primary"> Search Result : <span class="text-white text-center">{{searchValue}}</span></h2>
            </div>
        </div>
      </div>
      <button routerLink="" class="btn btn-warning d-block mx-auto text-white">Back Home</button>
    </div>


  `,
  styles: [`.changeBackground{
    background:#FAD7A0;
  }`]
})
export class EventBindingComponent {

  searchValue:string = '';

  changeSearchValue(eventDate:Event){
    this.searchValue = (<HTMLInputElement> eventDate.target).value;
  }

}
