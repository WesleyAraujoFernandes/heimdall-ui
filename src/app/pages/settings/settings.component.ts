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

  form = this.fb.group({
    collectionType: ['DATABASE'],
    dbms: ['POSTGRESQL'],
    databaseServerUrl: ['localhost', Validators.required],
    databaseServerPort: ['5432', Validators.required],
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
