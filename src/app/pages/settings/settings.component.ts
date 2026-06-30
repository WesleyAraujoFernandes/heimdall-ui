import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { SettingsService } from '../../services/settings.service';
import { CollectionPreviewComponent } from "../collection-preview/collection-preview.component";
@Component({
  selector: 'app-settings',
  imports: [ReactiveFormsModule, CollectionPreviewComponent],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss'
})
export class SettingsComponent {
  private fb = inject(FormBuilder)
  private settingsService = inject(SettingsService)

  collectionTypeOptions = [
    { value: "DATABASE", label: 'Database' },
    { value: "FILESYSTEM", label: "File System" }
  ]

  dbmsOptions = [
    { value: 'POSTGRESQL', label: 'PostgreSQL' },
    { value: 'MYSQL', label: 'MySQL' },
    { value: 'SQLSERVER', label: 'Microsoft SQL Server' },
    { value: 'ORACLE', label: 'Oracle' },
    { value: 'MONGODB', label: 'MongoDB' },
  ]

  form = this.fb.group({
    collectionType: ['DATABASE', Validators.required],
    dataSource: ['SQLSERVER', Validators.required],
    dbms: ['SQLSERVER', Validators.required],
    databaseServerUrl: ['10.1.1.27', Validators.required],
    databaseServerPort: ['1433', Validators.required],
    databaseName: ['CHRONUS_CEUB_2025', Validators.required],
    databaseUsername: ['ChronusCEUB', Validators.required],
    databasePassword: ['ChronusCEUB', Validators.required],
    databaseTableName: ['TITULO', Validators.required],
    databaseIdColumn: ['ID_TITULO', Validators.required],/*
    databaseQuery: ['select id_titulo, str_titulo_alfabetado titulo_alfabetado, str_titulo titulo, a.str_nome_autorizado nome_autorizado from titulo t, autor a where t.id_autor = a.id_autor', Validators.required],*/
    filesystemPath: ['\\\\10.1.1.4\\NASShare2\\compartilhamentos', Validators.required],
    databaseResultsPerPage: [10]
  })

  save(): void {
    this.settingsService.save(
      this.form.getRawValue() as any
    )
    alert('Configurações salvas')
  }

  get isDatabase(): boolean {
    return this.form.get('dataSource')?.value === 'DATABASE';
  }

  get isFilesystem(): boolean {
    return this.form.get('dataSource')?.value === 'FILESYSTEM'
  }
}
