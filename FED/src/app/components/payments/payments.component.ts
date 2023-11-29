import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { LoginService } from 'src/app/services/login.service';
import { PaymentsService } from 'src/app/services/payments.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss']
})
export class PaymentsComponent implements OnInit {

  constructor(public cartService: CartService, private paymentService: PaymentsService, private loginService: LoginService, private router : Router){}
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
    var total = 0;
    this.cartService.cartItems.forEach((p: any)=>{
      total = total + p.total;
    })
    var reqBody = {
  
      orderDetails :{
        deliveryAddress :this.cartService.selectedDeliveryOption == 'Store Pickup' ? null:  JSON.stringify(this.cartService.addressDetails) ,
        customerId : this.loginService.profileDetails._id,
        orderStatus:"Order Confirmed",
        deliveryType: this.cartService.selectedDeliveryOption
      },
      cartDetails: this.cartService.cartItems,
      paymentDetails:{
        cardNumber         : this.accountNumber          ,
        cvv                   : this.cvv                   ,
        paymentMethod : this.selectedPaymentMethod ,
        billingAddress        : this.billingAddress        ,
        cardHolderName        : this.cardHolderName        ,
        customerName: this.loginService.profileDetails.name,
        customerId: this.loginService.profileDetails._id,
        orderId: null,
        amount: "$" + total
      }
    }

    this.paymentService.placeOrder(reqBody, this.loginService.profileDetails.email).subscribe((res) =>{
      this.router.navigateByUrl('/orders');
    })
  }

  onCancel(){
    this.cartService.showPaymentSection = false;
  }
}

