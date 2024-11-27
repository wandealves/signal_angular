import { Component, inject } from '@angular/core';
import { Store } from '../store';

@Component({
  selector: 'app-contador-v3',
  standalone: true,
  imports: [],
  templateUrl: './contador-v3.component.html',
  styleUrl: './contador-v3.component.css'
})
export class ContadorV3Component {
 protected store = inject(Store);
}
