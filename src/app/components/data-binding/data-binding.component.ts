import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  template: `
    <div class="container d-block justify-content-center align-items-center">
      <div class="row">
        <div class="col-lg-12 col-md-12 col-12">
            <hr>
            <h1 class="text-danger">{{100+200}}</h1>
            <hr>
            <h1 class="text-primary"><span>{{title}}</span></h1>
            <hr>
            <h1 class="text-primary"><span>{{title}}</span></h1>
            <hr class="border border-3 border-danger">
            <button class="btn btn-primary form-control m-2" (click)="openEvent()">Open</button>
            <button class="btn btn-danger form-control m-2" (click)="closeEvent()">Close</button>
            <div class="container" [ngClass]="{fadeOut:diplayNotification}">
              <h1>{{title}}</h1>
              <p class="card p-3 bg-secondary text-white">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti itaque architecto a porro accusamus possimus et doloremque! Minima amet, illo quisquam, maxime dolore ipsa fugit id eum reiciendis ea repellat?
              Labore commodi veniam animi numquam itaque voluptas iusto nisi obcaecati distinctio ratione fuga quaerat facere, rerum beatae velit aut voluptatum sapiente excepturi voluptatem aliquam minus molestiae molestias explicabo a! Cupiditate?
              Maiores odio voluptatem quasi atque, a architecto, libero magni quaerat sit consequatur provident id ipsa consectetur enim iusto! Earum, iusto voluptatibus. Accusantium adipisci odio quas mollitia, dolore numquam architecto odit?
              Vero facere animi, quos molestiae voluptatibus adipisci eligendi voluptas dolores, quisquam soluta recusandae nobis dicta harum repellendus eum. Ratione veritatis debitis impedit ex deserunt molestias recusandae ut ipsa saepe eos.
              Iure itaque totam iste, illum corrupti placeat in dolore. Aut aliquam saepe tempora. Odio, suscipit nam sit eaque ratione quos? Itaque qui tempora corrupti enim alias soluta quos, porro ea!</p>
            </div>

        </div>
      </div>
    </div>
    <button routerLink="" class="btn btn-warning d-block mx-auto text-white">Back Home</button>
  `,
  styles:[`
    .fadeOut{
      visibility:hidden;
      opacity:0;
      transition:visibility 1s 3s, opacity 3s linear;
    }
  `]
})
export class DataBindingComponent {
  title:string = "Data Binding";

  diplayNotification:boolean = false;
  closeEvent(){
    this.diplayNotification =true;
  }
  openEvent(){
    this.diplayNotification = false;
  }
}
