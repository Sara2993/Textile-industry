import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,NgForm,Validators } from '@angular/forms';
import { ApiServiceService } from '../apiservice.service';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css']
})

  export class SupplierComponent implements OnInit {

    myform!:FormGroup;
    value:boolean=true;
    object:any =[];
    adduser!:FormGroup;
    alldata:any;
    term!:string;
    flag=0;
    constructor(private fb:FormBuilder,private api:ApiServiceService) {
   
    }
    ngOnInit(): void {
      this.myform = this.fb.group({
        Serial_id:['',Validators.required],
        name:['',Validators.required],
        contact:['',Validators.required],
        email_id:['',Validators.required],
        aadhar:['',Validators.required],
        city:['',Validators.required],
        State:['',Validators.required]
    
    })
    this.getuser()
    }
    Register(Formvalue:any){
      console.log(Formvalue);
      // window.location.reload();
      this.api.create2(Formvalue).subscribe(data =>{
      console.log(data);
      })
      
     }
    getuser(){
      // console.log('hai');
      this.api.supplier().subscribe(data=>{
        console.log(data);
        console.log('Data was fetching');
        this.alldata=data;
        this.alldata=this.alldata.docs;
        console.log(this.alldata);
        for(const i of this.alldata){
          // if(Object.prototype.hasOwnProperty.call(this.alldata,i)){
            // const elt = this.alldata[i];
            // console.log(elt.id);
    
          // }
          this.object.push(i);
    
        }
      
      })
    }
    // deleteuser(data:any,data1:any){
    //   this.api.clear(data._id,data1._rev).subscribe(res=>{
    //     alert('Your data was Deleted from the database');
    //   })
         
    // }
    // Register(Formvalue:any){
    //     console.log(Formvalue);
    //     for (const iterator of this.object) {
    //      if(iterator.aadhar == Formvalue.aadhar){
    //       this.flag=this.flag+1;
    //       location.reload();
    //       alert('aadhar number exist')
    //      } 
    //       }
      
      
    // }
  }
    
    