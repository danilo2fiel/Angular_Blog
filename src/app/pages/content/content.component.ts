import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  photoCover:string ="https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2023/07/Bellingham-e1688566511869.jpg"
  contentTitle:string=""
  contentDestription:string=""

  ngOnInit(): void {

  }
}
