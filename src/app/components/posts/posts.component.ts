import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import {Post } from '../../models/Post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts: Post [];
  isEdit: boolean = false;
  currentPost:Post = {
    id: 0,
    title: '',
    body: ''
  }
  constructor(private postsService: PostsService) { }

  ngOnInit() {
    this.postsService.getPosts().subscribe(posts => this.posts=posts);
  }
  onNewPost(post:Post){
    this.posts.unshift(post);
    this.currentPost = {
      id: 0,
      title: '',
      body:''
    }
  }
  onEdit(post: Post){
    this.currentPost = post;
    this.isEdit = true;
  }
  onUpdatedPost(post:Post){
    this.postsService.updatePost(post).subscribe((updatedPost) => {
      this.posts.forEach((cur, index) => {
        if(cur.id === post.id){
          this.posts.splice(index, 1);
          this.posts.unshift(updatedPost);
          this.isEdit = false;
        }
      });
      this.currentPost = {
        id: 0,
        title: '',
        body: ''
      }
    })
  }
  onDelete(post:Post){
    this.postsService.deletePost(post).subscribe(() => {
      this.posts.forEach((cur, index) => {
        if(cur.id === post.id){
          this.posts.splice(index, 1);
        }
      });
    })
  }
}
