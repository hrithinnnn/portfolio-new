import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements AfterViewInit {

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
  
      // if element is in viewport, add the fade-in class
      if (elementTop < bottom_of_window && elementBottom > scrollTop) {
        (element as HTMLElement).classList.add('fade-in');
      } else {
        (element as HTMLElement).classList.remove('fade-in');
      }
    });
  }


}
