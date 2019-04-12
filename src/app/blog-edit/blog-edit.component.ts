import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import { BlogHTTPServiceService } from './../blog-httpservice.service'

@Component({
  selector: 'app-blog-edit',
  templateUrl: './blog-edit.component.html',
  styleUrls: ['./blog-edit.component.css']
})
export class BlogEditComponent implements OnInit {
  blogDetails;
  blogId;
  editedBlogDetails:{author,
                     description,
                     title
                    };
  constructor(private _activatedRoute:ActivatedRoute, private blogHttpService:BlogHTTPServiceService) { 
    
  }

  ngOnInit() {
    this.blogId = this._activatedRoute.snapshot.paramMap.get('blogId');
    console.log(this.blogId);
    this.getBlogDetails(this.blogId);
  }

  getBlogDetails(blogId){
    let blog = this.blogHttpService.getBlogDetails(blogId);
    blog.subscribe(
      data=>{
        this.blogDetails= data["data"];
        console.log(this.blogDetails);
      },
      error=> {
        console.log(error);
      }
    )
  }
  editThisBlog(){
    this.blogHttpService.editBlog(this.blogId,this.blogDetails).subscribe(
      data=> {
        console.log(data);
      }
    );
  }

}
