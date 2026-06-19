import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PreviewResponse } from '../models/preview-response';
import { CollectionPreviewRequest } from '../models/collection-preview-request';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CollectionPreviewService {
  private http = inject(HttpClient);
  private readonly url = "http://localhost:8585/heimdall-api/collections/preview"


  constructor() {
  }

  preview(
    request: CollectionPreviewRequest
  ): Observable<PreviewResponse> {
    const token = 'eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJYM0V5LVBmVU1NRmE2LV9INklCdW16LUlSTjNqVWxvdmsxdFh1Z1dSNExRIn0.eyJleHAiOjI2NDIwNjk5MDcsImlhdCI6MTc3ODE1NjMwNywianRpIjoib25ydHJvOjVmODgzN2M3LTg0MzAtMzFiOC1hOWQ1LTk0MDhmNmY1ZjU2ZCIsImlzcyI6Imh0dHA6Ly8xMC4xLjEuNDA6ODA5MC9yZWFsbXMvZGV2IiwiYXVkIjoiYWNjb3VudCIsInN1YiI6IjNjOTRjOGU1LTMzMGQtNDA5OS1hMjA2LTY0OGMwMTZkYmRkNCIsInR5cCI6IkJlYXJlciIsImF6cCI6ImhlaW1kYWxsLWFwcCIsInNpZCI6Ijc1NDA2YTYzLWQ4ZmYtNDA5NS04NmViLTk2ODY3ZDYxNGMwYyIsImFjciI6IjEiLCJhbGxvd2VkLW9yaWdpbnMiOlsibG9jYWxob3N0IiwibG9jYWxob3N0OjgwIiwiKiJdLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsiZGVmYXVsdC1yb2xlcy1kZXYiLCJvZmZsaW5lX2FjY2VzcyIsImFkbWluIiwidW1hX2F1dGhvcml6YXRpb24iXX0sInJlc291cmNlX2FjY2VzcyI6eyJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX0sImhlaW1kYWxsLWFwcCI6eyJyb2xlcyI6WyJvd25lciJdfX0sInNjb3BlIjoicHJvZmlsZSBlbWFpbCIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJuYW1lIjoiQWRtaW4gQWRtaW4iLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJhZG1pbiIsImdpdmVuX25hbWUiOiJBZG1pbiIsImZhbWlseV9uYW1lIjoiQWRtaW4iLCJlbWFpbCI6ImFkbWluQHZpYWFwaWEuY29tLmJyIn0.aJ2rqVgUUNDQeJo63v-b2lD4XNxd6j7kWwftzKp07_AP-fat_5OOpPZyFurc51D_iOYRXd5IU55xhiGhx81cZef2fAQIGs0MX9KpkrT7xaWZnguqyX9EB5c7T2dHpbKVCQw8fxfr9uXwVQbh-DXUO_FbekFsmaQRhjpWgKsjV5wZg_Fmty7P9w895KGSopOXBCg74ii34bEUM4vhg3dk9aoYwRilwOz6Bfwi47Bp4S7zfWUU5VGfa1uYgj-vTdHbCA5OxYpsE4ZmdYbQ85Y7_z3KYFRMEY4YvVh9odrzBhLJwqmZeAZNLtAyqB6b7drZRRXXHWgVBuzM6P5-iL8Cxg';
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    };
    return this.http.post<PreviewResponse>(
      this.url, request, { headers }
    )
  }
}
