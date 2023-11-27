import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { LoginService } from 'src/app/services/login.service';
import { PaymentsService } from 'src/app/services/payments.service';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss']
})
export class PaymentsComponent implements OnInit {

  constructor(public cartService: CartService, private paymentService: PaymentsService, private loginService: LoginService){}
  @Input() cartItems: any ;
  cardNumber: any;
  cardHolderName: any;
  isDateValid: boolean = true;
  isFutureDate: boolean = true;
  cvv: any;
  isMonthValid: boolean = true;
  isCvvValid: boolean = true;
  expireDate: any;
  cardName: any;
  accountNumber: any;
  selectedPaymentMethod: any;
  billingAddress: any;


  ngOnInit(): void {
    this.resetFields();
  }


  resetFields(){
   
    this.accountNumber = null;
    this.cvv = null;
    this.selectedPaymentMethod = null;
    this.billingAddress = null;
    this.cardHolderName = null;
  }

  onSubmit(){
    var reqBody = {
    accountNumber         : this.accountNumber          ,
    cvv                   : this.cvv                   ,
    selectedPaymentMethod : this.selectedPaymentMethod ,
    billingAddress        : this.billingAddress        ,
    cardHolderName        : this.cardHolderName        ,
    cartItems: this.cartItems,
    customerId: this.loginService.profileDetails._id,
    orderDate: new Date(),
    address: this.cartService.addressDetails   

    }

    this.paymentService.placeOrder(reqBody).subscribe((res) =>{
      
    })
  }

  onCancel(){
    this.cartService.showPaymentSection = false;
  }
}
