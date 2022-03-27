import { Component, OnInit } from '@angular/core';
import { Posts } from '../models/posts';
import { leggi } from '../posts.service';

@Component({
    selector: 'app-inactive-posts',
    templateUrl: './inactive-posts.component.html',
    styleUrls: ['./inactive-posts.component.scss'],
})
export class InactivePostsComponent implements OnInit {
    posts!: Posts[];

    constructor() {
        leggi().then((posts) => {
            this.posts = posts;
        });
    }

    ngOnInit(): void {}
}
