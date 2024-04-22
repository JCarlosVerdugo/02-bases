import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-heroe',
  templateUrl: './heroe.component.html',
  styleUrl: './heroe.component.css'
})
export class HeroeComponent {
  public name: string = 'ironman';
  public age:  number = 45;


  get capitalizedName(): string {
    return 'Hola Mundo'
  }


  getHeroeDescription(): string {
    return `${ this.name } - ${this.age}`;
  }


  changeHero(): void {
    this.name = 'Spiderman'
  }


  changeAge(): void {
    this.age = 25;
  }


  resetForm(): void {
      this.name = 'ironman';
      this.age = 45;

      // document.querySelector('h1')!.innerHTML = '<h1>Desde angular</h1>'
  }

}
