import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
movie: any;
  constructor(private service: MoviesService,
              private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(params => {
      const id = params.imdbID;
      this.service.getMovieDetaisl(id).subscribe(resp => this.movie = resp);
    });
  }
  goBack(){
    window.history.back();
  }

}
