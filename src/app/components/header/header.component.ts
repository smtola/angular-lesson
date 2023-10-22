import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
      <div class="header">
          <h1>STL class</h1>
      </div>
  `,
  styles: [`
    .header{
      display:inline-block;
      text-transform:uppercase;
      color:#fff;
      background:#a1cfde;
      width:100%;
      padding:1rem 2rem;
    }
    .header > h1{
      text-align:center;
    }
  `]
})
export class HeaderComponent {

}
