import { Component, OnInit, AfterViewInit } from '@angular/core';
import { BlogHTTPServiceService } from './../blog-httpservice.service'
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private allBlogs;
  
  constructor(private blogService:BlogHTTPServiceService, private ngToastr:ToastrService) { 
    this.ngToastr.success("Yay Blog Started!");
  }

  ngOnInit() {
    let blogs = this.blogService.getAllBlogs();
    blogs.subscribe(
      data => {
        this.allBlogs = data["data"];
        console.log(this.allBlogs);
      },
      error => {
        console.log(error);
      }
    )
  }
   ngAfterViewInit(){
      //  ($(".item")).gridalicious({
      //    width: 250,
      //    gutter: 10,
      //    animate: true,
      //    effect: 'fadeInOnAppear'
      //  }); 

      // ($(".galcolumn")).gridalicious({
      //    width: 240,
      //    gutter: 10,
      //    animate: true,
      //    effect: 'fadeInOnAppear'
      //  });    
      
       (<any>$("#container") ).gridalicious({selector: ".item"});

      console.log((<any>jQuery.fn).gridalicious);

    }

}
