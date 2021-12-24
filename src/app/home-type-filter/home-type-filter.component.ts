import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-home-type-filter',
  templateUrl: './home-type-filter.component.html',
  styleUrls: ['./home-type-filter.component.css'],
})
export class HomeTypeFilterComponent implements OnInit {
  @Input() defaultFilters = [];
  filterForm: FormGroup;
  @Output() applied = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
    this.filterForm = new FormGroup({
      appartment: new FormControl(this.defaultFilters.includes('appartment')),
      house: new FormControl(this.defaultFilters.includes('house')),
      room: new FormControl(this.defaultFilters.includes('room')),
    });
  }

  submitForm() {
    const selectedItems = Object.keys(this.filterForm.value).filter(
      (item) => this.filterForm.value[item]
    );

    this.applied.emit(selectedItems);
  }
}
