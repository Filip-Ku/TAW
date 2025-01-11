import {Component, EventEmitter, OnInit, Output} from
    '@angular/core';
import {FormsModule} from "@angular/forms";
import {Router, ActivatedRoute} from '@angular/router';
import {TextFormatDirective} from '../../../directives/text-format.directive';



@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [FormsModule, TextFormatDirective],
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})

export class SearchBarComponent implements OnInit {
  public filterText: string = '';

  @Output() name = new EventEmitter<string>();

  constructor(private router: Router, private route: ActivatedRoute){ }


  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.filterText = params['name'];
      this.sendFilter();
    });
  }



  sendFilter(): void {
    this.name.emit(this.filterText);
    this.router.navigate(['/'],{queryParams:{name:
      this.filterText?.toLowerCase()
    }});
  }
}
