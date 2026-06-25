import { Component, inject } from '@angular/core';
import { FilesystemPreviewService } from '../../services/filesystem-preview.service';
import { SettingsService } from '../../services/settings.service';
import { PreviewResponse } from '../../models/preview-response';
import { DataTableComponent } from "../../components/data-table/data-table.component";

@Component({
  selector: 'app-filesystem-preview',
  imports: [DataTableComponent],
  templateUrl: './filesystem-preview.component.html',
  styleUrl: './filesystem-preview.component.scss'
})
export class FilesystemPreviewComponent {
  private service = inject(FilesystemPreviewService)
  private settingsService = inject(SettingsService)

  tableData?: PreviewResponse;

  ngOnInit() {
    const settings = this.settingsService.load();
    console.log('SETTINGS:', settings)
  }
}
