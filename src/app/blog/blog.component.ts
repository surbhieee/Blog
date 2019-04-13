import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { BlogHTTPServiceService } from "./../blog-httpservice.service"
import {Location} from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  blogDetails;
  blogId
  constructor(private _router:Router, private _route: ActivatedRoute, private toastr:ToastrService, private _blogHttpService:BlogHTTPServiceService, private location: Location) { }
  
  ngOnInit() {
  this.blogId = this._route.snapshot.paramMap.get('blogId');
  console.log(this.blogId);
  this.getBlogDetails(this.blogId);
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
  deleteThisBlog(){
    this._blogHttpService.deleteBlog(this.blogId).subscribe(
      data=> {
        this.toastr.success("Blog successfully deleted");
        setTimeout(() => {
          this._router.navigate(['/home']);
        }, 1000)
        console.log(data);
      },
      error=>{
        this.toastr.error(error);
      }
    );
  }
  goBack(){
    this.location.back();
  }

}
