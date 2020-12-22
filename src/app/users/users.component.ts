import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

interface User {
  id: number;
  name: string;
}

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.scss"]
})
export class UsersComponent implements OnInit {
  public users: User[] = [
    { name: "Pierre", id: 1 },
    { name: "Paul", id: 2 },
    { name: "Jacques", id: 3 }
  ];
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {}

  redirection(user: User) {
    this.router.navigate([user.id], {
      relativeTo: this.activatedRoute,
      queryParams: {
        name: user.name
      },
      queryParamsHandling: "merge",
      fragment: "foo"
    });
  }
}
