import { Injectable } from '@angular/core';
import { DatabaseSettings } from '../models/database-setting';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private readonly STORAGE_KEY = 'heimdall-settings'

  constructor() { }

  save(settings: DatabaseSettings): void {
    console.log("--------------------------------------")
    console.log("settings:", settings);
    console.log("--------------------------------------")
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(settings))
  }

  load(): DatabaseSettings | null {
    const value = localStorage.getItem(this.STORAGE_KEY);
    return value ? JSON.parse(value) : null;
  }
}
