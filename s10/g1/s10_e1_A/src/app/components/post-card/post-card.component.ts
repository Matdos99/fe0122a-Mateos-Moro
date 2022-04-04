import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/interface/post';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss'],
})
export class PostCardComponent implements OnInit {
  @Input() post!: Post;
  //@Input() bgColor!: string;

  constructor() {}

  ngOnInit(): void {}
}