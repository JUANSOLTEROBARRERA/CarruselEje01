import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public photos = [];

  constructor() {
    this.photos=[
      {
        name:"Foto 1",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, placeat? Officiis provident, recusandae culpa nemo quaerat quam laudantium! Ullam incidunt assumenda, debitis facere nemo dicta ad repellendus ipsum repellat quos!",
        url:"https://picsum.photos/id/237/200/300"
      },
      {
        name:"Foto 2",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, placeat? Officiis provident, recusandae culpa nemo quaerat quam laudantium! Ullam incidunt assumenda, debitis facere nemo dicta ad repellendus ipsum repellat quos!",
        url:"https://picsum.photos/id/240/200/300"
      },
      {
        name:"Foto 3",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, placeat? Officiis provident, recusandae culpa nemo quaerat quam laudantium! Ullam incidunt assumenda, debitis facere nemo dicta ad repellendus ipsum repellat quos!",
        url:"https://picsum.photos/id/260/200/300"
      }
    ]
  }

}
