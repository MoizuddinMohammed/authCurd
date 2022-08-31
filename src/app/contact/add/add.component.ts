import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private router:ActivatedRoute) { }

  ngOnInit(): void {
    const routeId= this.router.snapshot.paramMap.get('id');
    console.log(routeId);
  }

}
