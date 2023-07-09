import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.css']
})
export class SplashComponent implements AfterViewInit, OnDestroy,OnInit {


  ngAfterViewInit(): void {
    
      var a = Array.from(document.getElementsByTagName('body'))[0];
      a.style.overflow='hidden';

        this.checkElementLocation();
      
        window.addEventListener('scroll', this.checkElementLocation);
        
  }
  ngOnInit(): void {
    setTimeout(() => {
      const box = document.querySelector<HTMLElement>('.lname');
      const fname = document.querySelector<HTMLElement>('.fname');
      box!.style.color = 'black';
      fname!.style.border='none';
      box!.style.borderRight='.15em solid rgb(0, 0, 0)'
    }, 4000);
  }

  ngOnDestroy(): void {
    var a = Array.from(document.getElementsByTagName('body'))[0];
    a.style.overflow='unset';
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
