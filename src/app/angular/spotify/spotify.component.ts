import { Component, OnInit } from '@angular/core';
import { createApi } from 'unsplash-js';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';
import { DomSanitizer } from '@angular/platform-browser';

const unsplash = createApi({
  accessKey: 'eToLZt_Rnou3GnckrSacXhm_hsWmQ_HOm_bAS55neRg',
});

const httpOptions = {
  headers: new HttpHeaders({
    Accept: 'application/json',
    'Content-Type': 'application/json',
  }),
};

@Component({
  selector: 'app-spotify',
  templateUrl: './spotify.component.html',
  styleUrls: ['./spotify.component.css'],
})
export class SpotifyComponent implements OnInit {
  loaded = false;
  playlistName = '';
  images: any = [];
  selectedImagesWords = [];
  songsArray = [];
  songsUris = '';
  page = '';
  spotify_url = 'https://api.spotify.com/v1';
  client_Id = '0346a39ad40a405395f08edf3b1c5def';
  user_id = '';
  playlist_id = '';
  playlist_url: any;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.loaded = false;
    const token = this.route.fragment['value']
      .split('access_token=')[1]
      .split('&token_type')[0];
    httpOptions.headers = httpOptions.headers.append(
      'Authorization',
      `Bearer ${token}`
    );
    this.getRandomPhotos().then((res) => {
      this.images = res.response;
      this.loaded = true;
    });
    this.http
      .get(`${this.spotify_url}/me`, httpOptions)
      .pipe(take(1))
      .subscribe(
        (res) => {
          this.user_id = res['id'];
        },
        (error) => console.log('error :>> ', error)
      );
  }

  getRandomPhotos() {
    return unsplash.photos.getRandom(
      { count: 5, orientation: 'portrait' }
      // `fetch` options to be sent only with _this_ request
      // { headers: { 'X-Custom-Header-2': 'bar' } },
    );
  }

  choosePhoto(option) {
    if (this.selectedImagesWords.length < 4) {
      this.loaded = false;
      this.addOptionToSelected(option);

      // this.getRandomPhotos();
      // from(this.getRandomPhotos).pipe(
      //   map((res) => res.response),
      //   take(1)
      // ).subscribe(res => this.images$ = res.);
      this.getRandomPhotos().then((res) => {
        setTimeout(() => {
          this.images = res.response;
          this.loaded = true;
        }, 500);
      });
    } else {
      this.addOptionToSelected(option);
      this.getMusic();
    }
  }

  addOptionToSelected(option) {
    this.selectedImagesWords.push(
      option.alt_description
        ? option.alt_description
            .split(' ')
            .filter(
              (w) => w !== 'and' && w !== 'in' && w !== 'a' && w !== 'the'
            )[0]
        : option.location.name
        ? option.location.name
            .split(' ')
            .filter(
              (w) => w !== 'and' && w !== 'in' && w !== 'a' && w !== 'the'
            )[0]
        : 'null'
    );
  }

  getMusic() {
    this.loaded = false;
    this.selectedImagesWords.forEach((w) => {
      this.http
        .get(
          `${this.spotify_url}/search?q=${w}&type=track&market=us&limit=1`,
          httpOptions
        )
        .pipe(take(1))
        .subscribe(
          (res) => {
            this.songsArray.push(res['tracks'].items[0].uri);
            this.songsUris = this.songsArray.join(',');
            this.page = 'playlist';
          },
          (err) => console.log('err :>> ', err),
          () => (this.loaded = true)
        );
    });
  }

  createPlaylist(name) {
    const payload = {
      name: name,
      description: "New playlist from Ana's portfolio",
      public: false,
    };
    this.http
      .post(
        `${this.spotify_url}/users/${this.user_id}/playlists`,
        payload,
        httpOptions
      )
      .pipe(take(1))
      .subscribe(
        (res) => {
          this.playlist_id = res['id'];
          this.http
            .post(
              `${this.spotify_url}/playlists/${this.playlist_id}/tracks?uris=${this.songsUris}`,
              null,
              httpOptions
            )
            .pipe(take(1))
            .subscribe(
              (res) => {
                this.playlist_url =
                  this.sanitizer.bypassSecurityTrustResourceUrl(
                    `https://open.spotify.com/embed/playlist/${this.playlist_id}`
                  );
                this.page = 'result';
              },
              (error) => console.log('error :>> ', error)
            );
        },
        (error) => console.log('error :>> ', error)
      );
  }
}
