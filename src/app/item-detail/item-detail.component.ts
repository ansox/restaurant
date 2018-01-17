import { Component, OnInit } from '@angular/core';
import { MenuService } from '../home/menu.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {
  menuItem: any;

  constructor(
    private menuService: MenuService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.menuService.getMenuItem(this.activatedRoute.snapshot.params['id'])
      .then(menuItem => {
        this.menuItem = menuItem;
      })
  }

}
