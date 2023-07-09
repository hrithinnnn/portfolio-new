import { Component } from '@angular/core';

@Component({
  selector: 'app-plain-view',
  templateUrl: './plain-view.component.html',
  styleUrls: ['./plain-view.component.css']
})
export class PlainViewComponent {

  ngAfterViewInit(): void {
    var a = Array.from(document.getElementsByTagName('body'))[0];
    a.style.overflow='unset';
}

ngOnDestroy(): void {
  var a = Array.from(document.getElementsByTagName('body'))[0];
  a.style.overflow='hidden';
}
}
