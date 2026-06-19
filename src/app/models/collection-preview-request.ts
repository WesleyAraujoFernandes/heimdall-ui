export interface CollectionPreviewRequest {
  collectionType: string;
  dbms: string;
  databaseServerUrl: string;
  databaseUsername: string;
  databasePassword: string;
  databaseName: string;
  databaseServerPort: string;
  databaseTableName: string;
  databaseIdColumn: string;
  databaseQuery: string;
  databaseResultsPerPage: number;
}
