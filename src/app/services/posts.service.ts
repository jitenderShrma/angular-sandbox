import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Post } from '../models/Post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  posts: Post[];
  httpUrl: string = "https://jsonplaceholder.typicode.com/posts";
  httpOption = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }
  constructor(private http: HttpClient) {}
  getPosts():Observable<Post[]>{
    return this.http.get<Post[]>(this.httpUrl);
  }
  savePost(post: Post):Observable<Post>{
    return this.http.post<Post>(this.httpUrl, post, this.httpOption);
  }
  updatePost(post:Post): Observable<Post>{
    const url = `${this.httpUrl}/${post.id}`
    return this.http.put<Post>(url, post, this.httpOption);
  }
  deletePost(post:Post | number): Observable<Post>{
    const id = typeof post === 'number' ? post : post.id;
    const url = `${this.httpUrl}/${id}`;
    return this.http.delete<Post>(url, this.httpOption);
  }
}
