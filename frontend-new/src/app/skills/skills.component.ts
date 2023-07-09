import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit{

  ngOnInit(): void {
    this.addListeners();
  
  }
  ngAfterViewInit(){
    this.checkElementLocation();
  
    window.addEventListener('scroll', this.checkElementLocation);
  }

  addListeners(){
    const frontend=document.querySelector<HTMLElement>(".top-layer");
    const middleLayer=document.querySelector<HTMLElement>(".middle-layer");
    const backend=document.querySelector<HTMLElement>(".plate");
    frontend!.addEventListener('mouseover',this.frontendHover);
    frontend!.addEventListener('mouseout',this.frontendRemover);
    middleLayer!.addEventListener('mouseover',this.middleLayerHover);
    middleLayer!.addEventListener('mouseout',this.middleLayerRemover);
    backend!.addEventListener('mouseover',this.backendHover);
    backend!.addEventListener('mouseout',this.backendRemover);
  }
  middleLayerHover(){
    const content= document.querySelector<HTMLElement>(".default");
    const middlecontent= document.querySelector<HTMLElement>(".middleLayer-content");
    content!.style.visibility="none";
    content!.style.opacity="0"
    middlecontent!.style.visibility="visible";
    middlecontent!.style.opacity="1";

  }
  middleLayerRemover(){
    const content= document.querySelector<HTMLElement>(".default");
    const middlecontent= document.querySelector<HTMLElement>(".middleLayer-content");
    middlecontent!.style.visibility="none";
    middlecontent!.style.opacity="0"
    content!.style.visibility="visible";
    content!.style.opacity="1";
  }
  backendHover(){
    const content= document.querySelector<HTMLElement>(".default");
    const backcontent= document.querySelector<HTMLElement>(".backend-content");
    content!.style.visibility="none";
    content!.style.opacity="0"
    backcontent!.style.visibility="visible";
    backcontent!.style.opacity="1";

  }
  backendRemover(){
    const content= document.querySelector<HTMLElement>(".default");
    const backcontent= document.querySelector<HTMLElement>(".backend-content");
    backcontent!.style.visibility="none";
    backcontent!.style.opacity="0"
    content!.style.visibility="visible";
    content!.style.opacity="1";
  }
  frontendHover(){
    const content= document.querySelector<HTMLElement>(".default");
    const frontcontent= document.querySelector<HTMLElement>(".frontend-content");
    content!.style.visibility="none";
    content!.style.opacity="0"
    frontcontent!.style.visibility="visible";
    frontcontent!.style.opacity="1";

  }
  frontendRemover(){
    const content= document.querySelector<HTMLElement>(".default");
    const frontcontent= document.querySelector<HTMLElement>(".frontend-content");
    frontcontent!.style.visibility="none";
    frontcontent!.style.opacity="0"
    content!.style.visibility="visible";
    content!.style.opacity="1";
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
