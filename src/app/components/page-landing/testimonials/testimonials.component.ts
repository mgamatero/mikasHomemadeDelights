import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements OnInit {
url='../../../../assets/data/testimonials.json';
testimonialData;
  constructor(private http: HttpClient) {
    this.http.get(this.url).subscribe(data=>{
      // console.log(data)
      this.testimonialData = data
    })
   }

  ngOnInit(): void {

  }

}
