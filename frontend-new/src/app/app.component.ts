import { coerceNumberProperty } from '@angular/cdk/coercion';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit, OnInit {
  title = 'portfolio';

  loading=false;

  actions = [
    {
      name: "home",
      route: "/"
    },

    {
      name: "intro",
      route: "intro"
    },

    {
      name: "projects",
      route: "projects"
    },

    {
      name: "contacts",
      route: "contacts"
    }
  ];

  constructor(private router: Router) { }

  ngAfterViewInit(): void {
    var a = Array.from(document.getElementsByTagName('body'))[0];
    a.style.overflow='scroll';
    setTimeout(() => this.loading=false, 2000);
    this.checkElementLocation();
  
  window.addEventListener('scroll', this.checkElementLocation);
  }

  goTo(el: string) {
   let el1=document.getElementById(el)!.offsetTop;
  let vh=0;
  if (el==="projects"){
    vh = Math.ceil(0.1 * Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0))+2;
  }
  else{

    vh = 2* Math.ceil(0.1 * Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0))+2;
  }
    window.scrollTo({top:el1-vh,left:0,behavior:"smooth"})
}

ngOnInit(): void {
  window.addEventListener('scroll', () => {
    const percentageScrolled = this.calculateScrollPercentage();
  });
  
}
calculateScrollPercentage():void {
  const scrollDistance = window.scrollY;
  const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercentage = (scrollDistance / totalHeight) * 100;
  const roundedPercentage = Math.round(scrollPercentage * 100) / 100;
  let scrolled=document.querySelector<HTMLElement>(".progress-bar");
  scrolled!.style.width=String(roundedPercentage)+"%";
}

onNavigatePortfolio(){
  window.open("https://portfolio-pi-sooty-35.vercel.app", "_blank");
}
onNavigateGithub(){
  window.open("https://github.com/hrithinnnn", "_blank");
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




  




