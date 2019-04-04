import { Component, OnInit } from '@angular/core';
import { SomethingService } from './../services/something.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-something',
  templateUrl: './something.component.html',
  styleUrls: ['./something.component.css'],
  providers: [SomethingService]
})
export class SomethingComponent implements OnInit {

  dataInvoice: any[];
  page: number = 1;
  pages: number[] = [];
  countProperty: number = 0;
  searchInvoiceInput: string;

  constructor(private somethingService: SomethingService, private router: Router) { }

  ngOnInit() {
    this.searchInvoice();
  }

  searchInvoiceByFilter(event: any) {
    this.searchInvoiceInput = event.target.value;
    //this.searchInvoiceEvent();
  }

  searchInvoiceEvent() {
    if (this.searchInvoiceInput === ""  || this.searchInvoiceInput === undefined) {
      this.page = 1;
      this.searchInvoice();
    } else {
      this.somethingService.searchInvoiceById(this.searchInvoiceInput)
        .subscribe(data => {
          this.dataInvoice = data['results'];
          this.countProperty = data['total_pages'];
          this.pages = [];
          for (var i = this.page; i <= this.page + 3; i++) {
            this.pages.push(i);
          }
        })
    }

  }

  searchInvoice() {
    this.somethingService.searchInvoice()
      .subscribe(data => {
        this.dataInvoice = data['data'];
        this.countProperty = data['count'];
        this.pages = [];
      });
  }

  last_page() {

    if (this.page != 1) {
      this.page = this.page - 1;

      if (this.searchInvoiceInput === "" || this.searchInvoiceInput === undefined) {
        this.searchInvoice();
      } else {
        this.searchInvoiceEvent();
      }


    }
  }
  next_page() {
    /*console.log("next_page");*/
    this.page = this.page + 1;

    if (this.searchInvoiceInput === ""  || this.searchInvoiceInput === undefined) {
      this.searchInvoice();
    } else {
      this.searchInvoiceEvent();
    }
  }

  create_invoice() {
    this.somethingService.createInvoice(99).subscribe();
    this.searchInvoice();
  }
}
