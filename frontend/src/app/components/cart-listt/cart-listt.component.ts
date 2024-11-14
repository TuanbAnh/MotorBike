import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cart-listt',
  templateUrl: './cart-listt.component.html',
  styleUrl: './cart-listt.component.scss',
})
export class CartListtComponent {
  StudentArray: any[] = [];
  idBienxe: string = '';

  constructor(private http: HttpClient) {
    this.getAllStudent();
  }

  getAllStudent() {
    const url = this.idBienxe
      ? `http://localhost:3000/todos/${this.idBienxe}`
      : 'http://localhost:3000/todos';

    this.http.get(url).subscribe((resultData: any,) => {
      this.StudentArray = resultData.map((m: any) => {
        console.log(m);
        return {
          ...m,
          ngayvao: m.ngayvao ? this.formatDate(new Date(m.ngayvao)) : null,
          ngayra: m.ngayra ? this.formatDate(new Date(m.ngayra)) : null,
        };
      });
      console.log(this.StudentArray);
    });
  }


  formatDate(date: Date) {
    return date.toISOString().split('T')[0];
  }
}
