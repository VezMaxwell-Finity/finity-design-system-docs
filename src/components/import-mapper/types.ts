export type ImportStep = 'upload' | 'preview' | 'mapping' | 'review' | 'complete';

export interface SystemField {
  id: string;
  label: string;
  required: boolean;
  group: string;
  aliases: string[]; // Common column names that auto-map to this field
}

export interface ColumnMapping {
  sourceColumn: string;
  targetFieldId: string | null; // null = "Do not import"
  sampleValues: string[];
}

export interface ParsedFile {
  fileName: string;
  fileSize: number;
  headers: string[];
  rows: Record<string, string>[];
  totalRows: number;
}

export interface ImportMapperState {
  step: ImportStep;
  parsedFile: ParsedFile | null;
  columnMappings: ColumnMapping[];
}
