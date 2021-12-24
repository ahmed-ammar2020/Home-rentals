import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homes',
  templateUrl: './homes.component.html',
  styleUrls: ['./homes.component.css'],
})
export class HomesComponent implements OnInit {
  dropdownOpen = false;
  homes$ = this.dataService.homes$;
  currentFilters = [];
  currentSearch = '';

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      const homeTypeFilters = params['home-type'] || [];
      const searchTerm = params['search'] || '';
      this.currentFilters = homeTypeFilters;
      this.currentSearch = searchTerm;
      this.dataService.getHomes(homeTypeFilters, searchTerm);
    });
  }

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  getHomeTypeFilters(homeTypeFilters: string[]) {
    const params = this.route.snapshot.queryParams;
    this.router.navigate(['homes'], {
      queryParams: {
        ...params,
        'home-type': homeTypeFilters,
      },
    });
    this.dropdownOpen = false;
  }

  getSearch({ search }) {
    const params = this.route.snapshot.queryParams;
    this.router.navigate(['homes'], {
      queryParams: {
        ...params,
        search: search,
      },
    });
  }
}
