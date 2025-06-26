
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  query = '';
  products: any[] = [];

  constructor(private http: HttpClient) {}

  search() {
    if (!this.query.trim()) return;
    this.http.get<any[]>(`http://localhost:5000/api/product/${this.query}`)
      .subscribe(data => this.products = data);
  }
}
