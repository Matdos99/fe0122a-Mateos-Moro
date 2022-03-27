import { Component, OnInit } from '@angular/core';
import { Posts } from '../models/posts';
import { leggi } from '../posts.service';

@Component({
    selector: 'app-active-posts',
    templateUrl: './active-posts.component.html',
    styleUrls: ['./active-posts.component.scss'],
})
export class ActivePostsComponent implements OnInit {
    posts!: Posts[];

    constructor() {
        leggi().then((posts) => {
            this.posts = posts;
        });
    }

    ngOnInit(): void {}
}
