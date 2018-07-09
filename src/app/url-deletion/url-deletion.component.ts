import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import {UrlService} from '../services/url.service';


@Component({
  selector: 'app-url-deletion',
  templateUrl: './url-deletion.component.html',
  styleUrls: ['./url-deletion.component.css']
})
export class UrlDeletionComponent implements OnInit {

  constructor(  private route: ActivatedRoute,
    private router: Router,
    private urlService: UrlService) { }

  ngOnInit() {
    var hashParam :string = this.route.snapshot.paramMap.get('hash');

    this.urlService.deleteUrl(hashParam);
  }

}
