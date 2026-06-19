import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TableData } from '../../models/table-data';
import { PreviewResponse } from '../../models/preview-response';

@Component({
  selector: 'app-data-table',
  imports: [CommonModule],
  templateUrl: './data-table.component.html',
  styleUrl: './data-table.component.scss'
})
export class DataTableComponent {
  @Input({ required: true })
  data!: PreviewResponse
}
