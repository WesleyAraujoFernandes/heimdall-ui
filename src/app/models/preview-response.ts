export interface Column {
  field: string;
  label: string;
}

export interface PreviewResponse {
  columns: Column[];
  rows: Record<string, any>[];
}
