import { Component, ViewChild } from '@angular/core';
import { catchError, last, of, tap } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent {
  @ViewChild('fname') fname: any;
  @ViewChild('lname') lname: any;
  @ViewChild('company') company: any;
  @ViewChild('email') email: any;
  @ViewChild('comment') comment: any;
  constructor(private http:HttpClient,private _snackBar: MatSnackBar){}
  API_URL="https://portfolio-backend-ljhx.onrender.com/"
  error = false;
  errorString=""
  openSnackBar(message: string) {
    this._snackBar.open(message, "", { duration: 1000 });
  }
  submit(company: string, fname: string, lname: string, email: string, comments: string) {
    this.errorString="";
    this.error = false;
    
    if(!comments){
      this.errorString="please enter your comments";
    }
  
    if (!email) {
      this.errorString='Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      this.errorString='Invalid email address';
      
    }
    if (!lname) {
      this.errorString='Last name is required';
    } else if (lname.length < 2) {
      this.errorString='Last name must be at least 2 characters long';
      
    }
    if (!fname) {
      this.errorString='First name is required';
    } else if (fname.length < 2) {
      this.errorString='First name must be at least 2 characters long';
      
    }

    if (this.errorString){
      this.error=true;
      return;
    }
   

    this.add(company, fname, lname, email, comments).subscribe((ans)=>{
    console.log(ans.message, ans.data)
    const comp=document.getElementById('company');
    const firstname=document.getElementById('fname');
    const lastname=document.getElementById('lname');
    const mail=document.getElementById('email');
    const comment = document.getElementById('comment');
    
    this.fname.nativeElement.value="";
    this.lname.nativeElement.value="";
    this.company.nativeElement.value="";
    this.email.nativeElement.value="";
    this.comment.nativeElement.value="";
    
    
    })

  }

  add(company: string, fname: string, lname: string, email: string, comments: string){
    return this.http.post(this.API_URL,{company, firstName:fname, lastName:lname, email, comments}, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=utf-8',
      })
    }).pipe(

      tap((res: any) => {

        if (res.status === 400) throw new Error(res.error.error.errorString);
        this.openSnackBar("Thank you for your valuable feedback!")
      }),


      catchError(err => {

        this.openSnackBar(err.statusText);
        return of({ err });;

      })
      
    )

  }
  ngAfterViewInit(){
    this.checkElementLocation();
  
    window.addEventListener('scroll', this.checkElementLocation);
  }
  checkElementLocation() {
    const windowHeight = window.innerHeight;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const bottom_of_window = scrollTop + windowHeight;
  
    const elements = document.querySelectorAll('.elem');
    
    elements.forEach((element: Element) => {
      const rect = (element as HTMLElement).getBoundingClientRect();
      const elementTop = rect.top + scrollTop;
      const elementBottom = elementTop + rect.height;
  
      if (elementTop < bottom_of_window && elementBottom > scrollTop) {
        (element as HTMLElement).classList.add('fade-in');
      } else {
        (element as HTMLElement).classList.remove('fade-in');
      }
    });
  }


  

 

  


  
}