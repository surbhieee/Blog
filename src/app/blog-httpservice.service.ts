import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable({
  providedIn: 'root'
})
export class BlogHTTPServiceService {
  private baseURL:String = "https://blogapp.edwisor.com/api/v1/blogs/";
  private authenticationToken = "?authToken=MmEzMGU0YWMwYTQ5OWQzY2MwOWMyYTkzYmQyNTg5NmE4NzQxYWJhN2ZhMTExYzEyYTM0MjYzODllMzM3Y2JiOTBkZjZkMDcyZTc5NzIzOGY1YzEzM2UwNDc1OTBkOGI4ZDFlYTBiMzViMjQzNDgyOTExY2VmZWU5ZTI1MmJlNDg0Mg==";
  private allBlogs:String = "all";
  private blog:String = "view/";
  private editBlogs:String = "/edit";
  private createBlogs:String = "create";
  private deleteBlogs:String = "/delete";
  constructor(private _http: HttpClient) { }
  getAllBlogs(){
    console.log((`${this.baseURL}${this.allBlogs}${this.authenticationToken}`));
    return this._http.get(`${this.baseURL}${this.allBlogs}${this.authenticationToken}`);
  }
  getBlogDetails(blogId){
    console.log(`${this.baseURL}${this.blog}${blogId}${this.authenticationToken}`);
    return this._http.get(`${this.baseURL}${this.blog}${blogId}${this.authenticationToken}`);
  }
  createBlog(blogData){
    console.log(blogData);
    return this._http.post(`${this.baseURL}${this.createBlogs}${this.authenticationToken}`, blogData);
  }
  editBlog(blogId, blogData){
    console.log(blogData);
    return this._http.put(`${this.baseURL}${blogId}${this.editBlogs}${this.authenticationToken}`, blogData);
  }
  deleteBlog(blogId){
    return this._http.post(`${this.baseURL}${blogId}${this.deleteBlogs}${this.authenticationToken}`, {});
  }
}
