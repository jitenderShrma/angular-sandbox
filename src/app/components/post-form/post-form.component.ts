import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Observable } from 'rxjs';
import {Post} from '../../models/Post';
import {PostsService} from '../../services/posts.service';
@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {
  @Output() newPost: EventEmitter<Post> = new EventEmitter();
  @Output() updatedPost: EventEmitter<Post> = new EventEmitter();
  @Input() currentPost: Post;
  @Input() isEdit: boolean;
  constructor(private postsService: PostsService) { }

  ngOnInit() {
  }
  addPost(title, body){
    if(title == '' || body == '' ){
      alert('Pleas fill the post')
    } else {
      // call your service method here.
      this.postsService.savePost({title, body} as Post).subscribe(post => {
        this.newPost.emit(post);
      });
    }
  }
  onUpdatePost(){
    this.postsService.updatePost(this.currentPost).subscribe(post => {
      // this.isEdit = false;
      this.updatedPost.emit(post);
    })
  }
}
