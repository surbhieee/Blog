import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import { BlogHTTPServiceService } from './../blog-httpservice.service'
import { ToastrService } from 'ngx-toastr';
import {Router} from '@angular/router';

@Component({
  selector: 'app-blog-create',
  templateUrl: './blog-create.component.html',
  styleUrls: ['./blog-create.component.css']
})
export class BlogCreateComponent implements OnInit {
  
  blogDetails
  constructor(private _router: Router, private _activatedRoute:ActivatedRoute, private blogHttpService:BlogHTTPServiceService, private toastr:ToastrService) { 
  this.blogDetails = {
  title:"",
  author:"",
  description:"",
  blogBody:"xyyzee",
  category:"Comedy"
  };
  }

  ngOnInit() {
  }

  createBlog(){
    console.log(this.blogDetails);
    this.blogHttpService.createBlog(this.blogDetails).subscribe(
      data=> {
        this.toastr.success("Blog successfully created");
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

}
