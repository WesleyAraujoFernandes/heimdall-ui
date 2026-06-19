import { Component, OnInit, inject } from '@angular/core';
import { DataTableComponent } from '../../components/data-table/data-table.component';
import { CollectionPreviewService } from '../../services/collection-preview.service';
import { PreviewResponse } from '../../models/preview-response';
import { CollectionPreviewRequest } from '../../models/collection-preview-request';
import { SettingsService } from '../../services/settings.service';
@Component({
  selector: 'app-collection-preview',
  imports: [DataTableComponent],
  templateUrl: './collection-preview.component.html',
  styleUrl: './collection-preview.component.scss'
})
export class CollectionPreviewComponent implements OnInit {
  private service = inject(CollectionPreviewService)
  private settingsService = inject(SettingsService)

  tableData?: PreviewResponse;

  ngOnInit(): void {
    const settings = this.settingsService.load();
    console.log('SETTINGS:', settings)
    if (!settings) {
      console.log('Nenhuma configuração encontrada')
      return;
    }

    this.service.preview(settings)
      .subscribe({
        next: response => {
          console.log(response);
          this.tableData = response;
        }
      })
    /*
  const request: CollectionPreviewRequest = {
    collectionType: 'DATABASE',
    dbms: 'POSTGRESQL',
    databaseServerUrl: 'localhost',
    databaseUsername: 'postgres',
    databasePassword: 'postgres',
    databaseName: 'inventory_db',
    databaseServerPort: '5432',
    databaseTableName: 'products',
    databaseIdColumn: 'ID',
    databaseQuery: `
      SELECT
        id,
        minimum_stock,
        name,
        sale_price
      FROM products
      LIMIT 10
    `,
    databaseResultsPerPage: 10
  };

  this.service.preview(request)
    .subscribe({
      next: response => {
        this.tableData = response;
      },
      error: error => {
        console.error(error);
      }
    });
    */
  }

}
