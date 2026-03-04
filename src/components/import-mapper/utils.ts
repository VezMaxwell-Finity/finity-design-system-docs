import type { ParsedFile, ColumnMapping } from './types';
import { SYSTEM_FIELDS } from './systemFields';

export function formatFileSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

/** Auto-map source columns to system fields by fuzzy matching aliases */
export function autoMapColumns(parsedFile: ParsedFile): ColumnMapping[] {
  return parsedFile.headers.map((header) => {
    const normalized = header.toLowerCase().trim();
    const match = SYSTEM_FIELDS.find((field) =>
      field.aliases.some((alias) => alias === normalized)
    );

    const sampleValues = parsedFile.rows
      .slice(0, 3)
      .map((row) => row[header] ?? '')
      .filter(Boolean);

    return {
      sourceColumn: header,
      targetFieldId: match?.id ?? null,
      sampleValues,
    };
  });
}

/** Parse a CSV file using papaparse */
export async function parseCSV(file: File): Promise<ParsedFile> {
  const { default: Papa } = await import('papaparse');

  return new Promise((resolve, reject) => {
    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: (result) => {
        const headers = result.meta.fields ?? [];
        const rows = result.data as Record<string, string>[];
        resolve({
          fileName: file.name,
          fileSize: file.size,
          headers,
          rows,
          totalRows: rows.length,
        });
      },
      error: (err: Error) => reject(err),
    });
  });
}

/** Parse an Excel file using xlsx */
export async function parseExcel(file: File): Promise<ParsedFile> {
  const XLSX = await import('xlsx');

  const buffer = await file.arrayBuffer();
  const workbook = XLSX.read(buffer, { type: 'array' });
  const sheetName = workbook.SheetNames[0];
  const sheet = workbook.Sheets[sheetName];
  const raw = XLSX.utils.sheet_to_json<Record<string, string>>(sheet, { defval: '' });

  const headers = raw.length > 0 ? Object.keys(raw[0]) : [];

  return {
    fileName: file.name,
    fileSize: file.size,
    headers,
    rows: raw,
    totalRows: raw.length,
  };
}

export async function parseFile(file: File): Promise<ParsedFile> {
  const ext = file.name.split('.').pop()?.toLowerCase();
  if (ext === 'csv') return parseCSV(file);
  if (ext === 'xlsx' || ext === 'xls') return parseExcel(file);
  throw new Error(`Unsupported file type: .${ext}`);
}

export function getMappingCoverage(mappings: ColumnMapping[]) {
  const mapped = mappings.filter((m) => m.targetFieldId !== null).length;
  return { mapped, total: mappings.length };
}

export function getRequiredFieldsMissing(mappings: ColumnMapping[]) {
  const mappedFieldIds = new Set(mappings.map((m) => m.targetFieldId).filter(Boolean));
  return SYSTEM_FIELDS.filter((f) => f.required && !mappedFieldIds.has(f.id));
}
