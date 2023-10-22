import { Component } from '@angular/core';

@Component({
  selector: 'app-pro-course',
  template: `
    <div class="container shadow-lg p-0">
      <app-header></app-header>
      <app-search
        (searchChangesText) = " onSearchTextChange($event)"
      ></app-search>
      <app-filter 
      [all]="getTotalCourse()" 
      [free]="getFreeCourses()" 
      [primuim]="getPremuimCourses()"
      (filterRadioButtonSelectionChanges)="onRadioFilterSelectionChanges($event)"
      ></app-filter>
      <div class="container-course">
        <ng-container *ngFor="let c of course">
          <ng-container *ngIf="  courseCountRadioButton === 'All' ||  courseCountRadioButton === c.cse">
            <div class="items" *ngIf="  valueSearchChange === '' ||  c.title.includes(valueSearchChange)">
              <div class="items-list">
                <img src="{{ c.img }}" alt="" />
                <h1>{{ c.title }}</h1>
                <p>{{ c.detail }}</p>
              </div>
              <div class="payrole">
                <span  [ngStyle]="{color: c.cse === 'Free' ? 'Green' : 'Red'}">{{ c.cse }}</span>
                <span>Price : {{ c.price }}</span>
              </div>
              <div class="btn-container">
                <button class="btn-buy">Buy Now</button>
                <button class="btn-detial">Show Detail</button>
              </div>
            </div>
          </ng-container>
        </ng-container>
      </div>
    </div>
  `,
  styles: [
    `
      .container-course {
        display: flex;
        flex-wrap:wrap;
        justify-content:center;
        padding:0 35px;
      }
      .items {
        width: 45vh;
        background: #ffffcc;
        display: grid;
        justify-content: center;
        align-items: center;
        padding: 1rem;
        margin:1rem;
      }
      .items-list {
        display: BLOCK;
        justify-content: center;
        align-items: center;
        text-align: center;
      }
      img {
        width: 140px;
      }
      .payrole {
        text-align: center;
        margin: 5px;
      }
      .payrole > span {
        padding: 10px;
        font-size: 16px;
      }
      .btn-container {
        display: flex;
        flex-wrap: wrap;
        padding: 10px 15px;
        
        justify-content:center;
      }
      button.btn-buy {
        width: 100px;
        color: #fff;
        background: #ff471a;
        outline: none;
        border: none;
        margin:5px;
        padding: 5px;
        font-size: 13px;
        transition: all 0.5s ease;
      }
      button.btn-buy:hover {
        color: #1a1a1a;
        opacity: 0.5;
      }
      button.btn-detial {
        width: 100px;
        color: #fff;
        background: #99ccff;
        outline: none;
        border: none;
        margin: 5px;
        font-size: 13px;
        padding: 5px;
        transition: all 0.5s ease;
      }
      button.btn-detial:hover {
        opacity: 0.5;
        color: #1a1a1a;
      }
    `,
  ],
})
export class ProCourseComponent {

  course = [
    {
      img: './assets/img/javascript.png',
      title: 'Javascript',
      detail:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta molestiae quia accusantium dolore?',
      cse: 'Free',
      price: 12,
    },
    {
      img: './assets/img/angular.png',
      title: 'Angular',
      detail:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta molestiae quia accusantium dolore?',
      cse: 'Premuim',
      price: 50,
    },
    {
      img: './assets/img/jquery.png',
      title: 'Jquery',
      detail:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta molestiae quia accusantium dolore?',
      cse: 'Free',
      price: 25,
    },
    {
      img: './assets/img/nodejs.png',
      title: 'NodeJs',
      detail:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta molestiae quia accusantium dolore?',
      cse: 'Free',
      price: 32,
    },
    {
      img: './assets/img/vue.png',
      title: 'VueJs',
      detail:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta molestiae quia accusantium dolore?',
      cse: 'Premuim',
      price: 46,
    },
    {
      img: './assets/img/python.png',
      title: 'Python',
      detail:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta molestiae quia accusantium dolore?',
      cse: 'Free',
      price: 39,
    },
    {
      img: './assets/img/react.png',
      title: 'React',
      detail:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta molestiae quia accusantium dolore?',
      cse: 'Premuim',
      price: 49,
    },
    {
      img: './assets/img/cSharp.png',
      title: 'C#',
      detail:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta molestiae quia accusantium dolore?',
      cse: 'Premuim',
      price: 49,
    },
    {
      img: './assets/img/angular.png',
      title: 'Angular Advances',
      detail:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta molestiae quia accusantium dolore?',
      cse: 'Premuim',
      price: 69,
    },
  ];

  getTotalCourse()
  {
    return this.course.length;
  }
  getFreeCourses()
  {
    return this.course.filter(course => course.cse === 'Free').length;
  }
  getPremuimCourses()
  {
    return this.course.filter(course => course.cse === 'Premuim').length;
  }

  courseCountRadioButton:string = 'All';
  onRadioFilterSelectionChanges(data:string)
  {
    this.courseCountRadioButton = data;
    // console.log(this.courseCountRadioButton);
  }

  valueSearchChange:string = '';
  onSearchTextChange(e:string){
    this.valueSearchChange = e;
    console.log(this.valueSearchChange);
  }
}
