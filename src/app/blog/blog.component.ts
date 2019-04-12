import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { BlogHTTPServiceService } from "./../blog-httpservice.service"
import {Location} from '@angular/common';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  blogDetails;
  constructor(private _route: ActivatedRoute, private _blogHttpService:BlogHTTPServiceService, private location: Location) { }
  
  ngOnInit() {
  let blogId = this._route.snapshot.paramMap.get('blogId');
  console.log(blogId);
  this.getBlogDetails(blogId);
  }

  getBlogDetails(blogId){
    let details = this._blogHttpService.getBlogDetails(blogId);
    details.subscribe(
      data=> {
        this.blogDetails= data["data"];
        console.log(this.blogDetails);
      },
      error => {
        console.log(error);
      }
    )
  }
  goBack(){
    this.location.back();
  }

}
