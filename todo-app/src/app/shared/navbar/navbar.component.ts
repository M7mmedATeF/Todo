import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.hoverFunc();
  }

  hoverFunc(){
    let links = document.querySelectorAll(".links ul li a");
    let bgText = document.querySelector("nav .menuView .bgText p")
    
    links.forEach(link => {
      link.addEventListener("mouseover",()=>{
        bgText.innerHTML = link.innerHTML;
      })
      
    })
  }

  pnClsNAV(){
    $(()=>{
      $(".menuView").fadeToggle();
    })
  }

}
