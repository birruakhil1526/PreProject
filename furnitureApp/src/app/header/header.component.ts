import { Component, OnInit } from '@angular/core';
import { FurnitureServiceService } from '../service/furniture-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public fs:FurnitureServiceService) { }

  ngOnInit(): void {
  }

}
