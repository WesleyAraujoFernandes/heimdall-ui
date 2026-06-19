export interface Column {
  field: string;
  label: string
}
export interface TableData {
  columns: Column[];
  rows: Record<string, any>[];
}
