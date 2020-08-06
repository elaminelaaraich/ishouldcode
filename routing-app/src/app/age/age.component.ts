import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-age',
  templateUrl: './age.component.html',
  styleUrls: ['./age.component.css']
})
export class AgeComponent implements OnInit {

  currentAge: string;

  constructor(private route: ActivatedRoute ,private router: Router ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(map => this.currentAge = map.get('age'));
  }

  showMe(age: number): void{
    this.router.navigate(['/age/' + age]);
  }

}
