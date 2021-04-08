import { CustomerModel } from './../customer_model';
import { Component, OnInit } from '@angular/core';
import { CustomersService } from './customers.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs';



@Component({
  selector: 'customers',
  templateUrl:'./customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit{ 
  customerModel: CustomerModel = new CustomerModel;  
  allCustomers?: Observable<CustomerModel[]> ;  
  customerIdUpdate: number = 0;  
  message = "";  

  title = "List of Customers";
  toggleAdd : boolean = false;
  toggleViewEdit : boolean = false;

  myRadio : number = 0;
  
  public customersList: CustomerModel[] = [];  
  customerForm: any;


  constructor(private formbulider: FormBuilder, private customersService: CustomersService,
    private modalService: NgbModal, private reactiveForms:ReactiveFormsModule) {
    this.customersService.getCustomersList().subscribe(data => this.customersList = data);
    
   }

   ngOnInit() {  
    this.customerForm = this.formbulider.group({  
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      mobileNo: ['', [Validators.required]],
      whatsappNo: ['', [Validators.required]],
      address: ['', [Validators.required]],
    });  
    this.loadAllCustomers(); 
  }  

  loadAllCustomers() {  
    this.allCustomers = this.customersService.getCustomersList();  
  }  

  isAddClicked(){
    this.toggleAdd = true;
  }

  isViewEditClicked(){
    if(this.myRadio != 0 ){
      this.toggleViewEdit = true;
     }
    else{
      alert("Please choose a record to Update");
    }
  }

  isDeleteClicked(){
    if(this.myRadio != 0 ){
      this.customerIdUpdate = this.myRadio;
      this.deleteCustomer(this.customerIdUpdate);
     }
    else{
      alert("Please choose a record to Delete");
    }
  }


  saveOrUpdate(customerForm:ReactiveFormsModule) {  
    this.customerModel = this.customerForm.value;
    this.customerIdUpdate = this.myRadio; 
    this.customerModel.customerId = this.customerIdUpdate;
    if (this.toggleAdd) { 
      this.saveCustomer(this.customerModel); 
    }else if(this.toggleViewEdit){
      this.updateCustomer(this.customerModel);
    }
    this.customerForm.reset();  
    this.loadAllCustomers();  
  } 

  deleteCustomer(customerId: number) {
    if (confirm("Are you sure you want to delete this ?")) {  
      this.customersService.deleteCustomerById(customerId).subscribe(() => {   
        this.message = 'Record Deleted Succefully';  
        this.loadAllCustomers();  
        this.customerIdUpdate = 0;  
        this.customerForm.reset();  
      });  
    } 
  }

  onCancel() {      
    this.toggleAdd = false;
    this.toggleViewEdit = false;
    this.customerForm.reset();  
  } 

  saveCustomer(customerModel: CustomerModel){
      this.customersService.createCustomer(customerModel).subscribe(  
        () => {   
          this.message = 'Record Saved Successfully';  
          this.loadAllCustomers();  
          this.customerIdUpdate = 0;  
          this.customerForm.reset();  
          this.toggleAdd = false;
          this.toggleViewEdit = false;
        }  
      );  
  }

  updateCustomer(customerModel: CustomerModel){
      customerModel.customerId =  this.customerIdUpdate;   
      this.customersService.updateCustomer(customerModel).subscribe(() => {  
        this.message = 'Record Updated Successfully';  
        this.loadAllCustomers();  
        this.customerIdUpdate = 0;  
        this.customerForm.reset(); 
        this.toggleAdd = false;
        this.toggleViewEdit = false;
      });  
    } 
  }


