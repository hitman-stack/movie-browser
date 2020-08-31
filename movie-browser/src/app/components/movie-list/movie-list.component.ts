import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
 movies: any[];
  constructor() { }

  ngOnInit(): void {
    this.movies = [
      {
        "Title": "John Wick",
      "Year" : "2019",
    "Poster" : "https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_QL50_SY1000_CR0,0,666,1000_AL_.jpg"
      },
      {
        "Title": "John Wick",
      "Year" : "2019",
    "Poster" : "https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_QL50_SY1000_CR0,0,666,1000_AL_.jpg"
      },
      {
        "Title" : "Iron Man",
      "Year" : "2010",
    "Poster" : "https://i.redd.it/a2r78nqjes531.png"
      }

    ];
    }
  }


