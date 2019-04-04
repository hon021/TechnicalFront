import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SomethingService } from './../services/something.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers: [SomethingService]

})
export class DetailComponent implements OnInit, OnDestroy {

  id: number;
  private sub:Subscription;
  detail: any[];
  countProperty: number = 0;


  constructor(private somethingService: SomethingService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
      console.log("id", this.id);
      this.searchDetail(this.id);
    })
  }

  searchDetail(id: number){
    this.somethingService.findInvoice(id)
    .subscribe(data =>{
        this.detail = data['data'];
        this.countProperty = data['count'];
        console.log(this.detail);
    });
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }

}
