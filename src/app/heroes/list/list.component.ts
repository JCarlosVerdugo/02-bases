import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent implements OnInit {

  public heroNames: string[] = ['Spiderman', 'Hulk', 'Ironman', 'Thor'];
  public deletedHero?: string;

  ngOnInit(): void { }


  removeLastHero(): void {
    this.deletedHero = this.heroNames.pop();
  }

}
