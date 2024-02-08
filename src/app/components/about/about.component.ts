import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit {
  public title: string;
  public subtitle: string;
  public web: string;

  constructor(){
    this.title = "Victor Robles";
    this.subtitle = "Desarollador Web y Formador";
    this.web = "victorroblesweb.es";
  }
  ngOnInit(): void {
      
  }

}
