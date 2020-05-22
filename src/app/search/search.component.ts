import { Component, OnInit } from '@angular/core';
import { SearchService } from '../core/services/search.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  query: any={}
  results: any = []
  url:string

  constructor(private searchService:SearchService) {
    this.url = environment.urlFiles
  }

  ngOnInit(): void {
    this.getNewPeople()
  }

  getNewPeople(){
    this.searchService.newPeople().subscribe(
      res => this.results = res
    )
  }

  searchHandle(e){
    this.searchService.search(e.target.value).subscribe(
      res => this.results = res
    )
  }

}
