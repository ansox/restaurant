import { Component, OnInit } from '@angular/core';
import { MenuService } from './menu.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  menu: any;

  constructor(private menuService: MenuService) { }

  ngOnInit() {
    this.menuService.getMenu()
      .then(menu => {
        this.menu = menu;
      })
  }

}
