import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { SettingsService } from '../../services/settings.service';
@Component({
  selector: 'app-settings',
  imports: [ReactiveFormsModule],
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
    collectionType: ['', Validators.required],
    dataSource: ['', Validators.required],
    dbms: ['', Validators.required],
    databaseServerUrl: ['', Validators.required],
    databaseServerPort: ['', Validators.required],
    databaseName: ['', Validators.required],
    databaseUsername: ['', Validators.required],
    databasePassword: ['', Validators.required],
    databaseTableName: ['', Validators.required],
    databaseIdColumn: ['', Validators.required],
    databaseQuery: ['', Validators.required],
    databaseResultsPerPage: [10]
  })

  save(): void {
    this.settingsService.save(
      this.form.getRawValue() as any
    )
    alert('Configurações salvas')
  }
}
