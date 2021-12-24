import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-home-search',
  templateUrl: './home-search.component.html',
  styleUrls: ['./home-search.component.css'],
})
export class HomeSearchComponent implements OnInit {
  @Input() deafultSearch = '';
  searchForm: FormGroup;
  @Output() appied = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
    this.searchForm = new FormGroup({
      search: new FormControl(this.deafultSearch),
    });

    this.searchForm.valueChanges.pipe(debounceTime(400)).subscribe((value) => {
      this.appied.emit(value);
    });
  }
}
