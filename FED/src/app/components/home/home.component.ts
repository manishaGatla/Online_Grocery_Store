import { Component, OnInit} from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  items = [
    {
      title: 'Item 1',
      description: 'Description for Item 1',
      price: 50,
      imageUrl: 'assets/item1.jpg',
    },
    {
      title: 'Item 2',
      description: 'Description for Item 2',
      price: 30.5,
      imageUrl: 'assets/item2.jpg',
    },
    {
      title: 'Item 1',
      description: 'Description for Item 1',
      price: 50,
      imageUrl: 'assets/item1.jpg',
    },
    {
      title: 'Item 2',
      description: 'Description for Item 2',
      price: 30.5,
      imageUrl: 'assets/item2.jpg',
    },
    {
      title: 'Item 1',
      description: 'Description for Item 1',
      price: 50,
      imageUrl: 'assets/item1.jpg',
    },
    {
      title: 'Item 2',
      description: 'Description for Item 2',
      price: 30.5,
      imageUrl: 'assets/item2.jpg',
    },
    {
      title: 'Item 1',
      description: 'Description for Item 1',
      price: 50,
      imageUrl: 'assets/item1.jpg',
    },
    {
      title: 'Item 2',
      description: 'Description for Item 2',
      price: 30.5,
      imageUrl: 'assets/item2.jpg',
    },
    {
      title: 'Item 1',
      description: 'Description for Item 1',
      price: 50,
      imageUrl: 'assets/item1.jpg',
    },
    {
      title: 'Item 2',
      description: 'Description for Item 2',
      price: 30.5,
      imageUrl: 'assets/item2.jpg',
    },
    {
      title: 'Item 1',
      description: 'Description for Item 1',
      price: 50,
      imageUrl: 'assets/item1.jpg',
    },
    {
      title: 'Item 2',
      description: 'Description for Item 2',
      price: 30.5,
      imageUrl: 'assets/item2.jpg',
    }
    // Add more items here
  ];



  constructor(public loginService: LoginService) {}

  ngOnInit() {
    
  }




  addToCart(item : any) {
    // Implement your cart functionality here
  }
}