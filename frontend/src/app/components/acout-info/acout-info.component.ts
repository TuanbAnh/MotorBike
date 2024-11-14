import { Component } from '@angular/core';

@Component({
  selector: 'app-acount-info',
  templateUrl: './acout-info.component.html',
  styleUrl: './acout-info.component.scss',
})
export class AcountInfoComponent {
  save() {
    alert('Hệ thống ghi nhận và cập nhật sau 24h.');
  }
}
