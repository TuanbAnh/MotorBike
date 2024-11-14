import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrl: './add.component.scss',
})
export class AddComponent implements OnInit {
  StudentArray: any[] = [];
  isResultLoaded = false;
  isUpdateFormActive = false;
  bienxe: string = '';
  maubien: string = '';
  loaixe: string = '';
  baoduong: string = '';
  chuxe: string = '';
  ngayvao: string = '';
  ngayra: string = '';
  currentStudentID = '';
  constructor(private http: HttpClient) {
    this.getAllStudent();
  }
  ngOnInit(): void {}
  getAllStudent() {
    this.http
      .get('http://localhost:3000/todos')
      .subscribe((resultData: any) => {
        this.isResultLoaded = true;
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
  register() {
    let bodyData = {
      bienxe: this.bienxe,
      maubien: this.maubien,
      loaixe: this.loaixe,
      baoduong: this.baoduong,
      chuxe: this.chuxe,
      ngayvao: this.ngayvao,
      ngayra: this.ngayra,
    };
    this.http.post('http://localhost:3000/todos', bodyData).subscribe({
      next: (resultData: any) => {
        alert('Employee Registered Successfully');
        this.getAllStudent();
      },
      error: (err) => {
        console.error('Error: ', err);
        alert('An error occurred while registering the employee');
      },
    });
  }
  setUpdate(data: any) {
    this.bienxe = data.bienxe;
    this.maubien = data.maubien;
    this.loaixe = data.loaixe;
    this.baoduong = data.baoduong;
    this.chuxe = data.chuxe;
    this.ngayvao = data.ngayvao;
    this.ngayra = data.ngayra;
    this.currentStudentID = this.bienxe;

    console.log(this.ngayra);
    console.log(this.ngayvao);
  }
  formatDate(date: Date) {
    return date.toISOString().split('T')[0];
  }
  UpdateRecords() {
    let bodyData = {
      maubien: this.maubien,
      loaixe: this.loaixe,
      baoduong: this.baoduong,
      chuxe: this.chuxe,
      ngayvao: this.ngayvao,
      ngayra: this.ngayra,
    };
    console.log('update: ' + bodyData);
    this.http
      .put(
        'http://localhost:3000/todos' + '/' + this.currentStudentID,
        bodyData
      )
      .subscribe((resultData: any) => {
        console.log(resultData);
        alert('Student Registered Updateddd');
        this.getAllStudent();
      });
  }
  save() {
    if (this.currentStudentID == '') {
      this.register();
    } else {
      this.UpdateRecords();
    }
    this.bienxe = '';
    this.maubien = '';
    this.loaixe = '';
    this.baoduong = '';
    this.chuxe = '';
    this.ngayvao = '';
    this.ngayra = '';
    this.currentStudentID = '';
  }
  setDelete(data: any) {
    this.http
      .delete('http://localhost:3000/todos' + '/' + data.bienxe)
      .subscribe((resultData: any) => {
        console.log(resultData);
        alert('Student Deletedddd');
        this.getAllStudent();
      });
  }
}
