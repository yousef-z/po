import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {

  //to access route parameters eg. 'id' in profiles/:id we need to inject ActivatedRoute class in our component
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    let id = this.route.paramMap
      .subscribe(params => {
        let username = params.get('username')
        console.log(username)
        console.log(params)
      })
  }
  submit(){
    this.router.navigate(['/followers'], {
      queryParams: {
        page: 1,
        order: 'newest'
      }
    } )
  }
}
