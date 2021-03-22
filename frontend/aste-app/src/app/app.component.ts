import { Component, OnInit } from '@angular/core';
import { SearchService } from './services/search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  searchQuery: string = '';
  results: any = [];
  isLoading: boolean = false;

  constructor(
    private searchService: SearchService,
  ) {}


  ngOnInit() {
    console.log('oninit');
  }

  search() {
    if (this.searchQuery.length > 1) {
      this.isLoading = true;
      this.searchService.getSearch(this.searchQuery).then(res => {
        console.log(res);
        this.results = res;
        this.isLoading = false;
      });
    }
  }
}
