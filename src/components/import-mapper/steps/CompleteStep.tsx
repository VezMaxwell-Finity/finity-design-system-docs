'use client';

import { Button } from '@/components/button';
import type { ColumnMapping, ParsedFile } from '../types';

interface CompleteStepProps {
  parsedFile: ParsedFile;
  mappings: ColumnMapping[];
  onStartOver: () => void;
}

export function CompleteStep({ parsedFile, mappings, onStartOver }: CompleteStepProps) {
  const importedColumns = mappings.filter((m) => m.targetFieldId !== null).length;

  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] gap-8 text-center">
      {/* Success icon */}
      <div className="relative">
        <div className="w-20 h-20 rounded-full bg-[var(--color-green-100)] flex items-center justify-center">
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
            <path
              d="M7 18L14.5 25.5L29 10"
              stroke="var(--color-green-600)"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        {/* Decorative ring */}
        <div className="absolute inset-0 -m-2 rounded-full border-2 border-[var(--color-green-200)] animate-ping opacity-30" />
      </div>

      <div className="max-w-md">
        <h2 className="text-heading-md text-[var(--color-text-default)] mb-3">
          Import complete!
        </h2>
        <p className="text-body-regular text-[var(--color-text-secondary)]">
          Successfully imported {parsedFile.totalRows.toLocaleString()} records from{' '}
          <span className="text-body-semibold text-[var(--color-text-default)]">{parsedFile.fileName}</span>{' '}
          using {importedColumns} mapped fields.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 w-full max-w-md">
        {[
          { label: 'Records imported', value: parsedFile.totalRows.toLocaleString(), icon: '📥' },
          { label: 'Fields mapped', value: importedColumns, icon: '🔗' },
          { label: 'File processed', value: parsedFile.fileName.split('.').pop()?.toUpperCase(), icon: '📄' },
        ].map(({ label, value, icon }) => (
          <div key={label} className="p-4 rounded-xl bg-[var(--color-bg-subtle)] border border-[var(--color-grey-200)] flex flex-col items-center gap-1">
            <span className="text-xl">{icon}</span>
            <p className="text-heading-sm text-[var(--color-text-default)]">{value}</p>
            <p className="text-small-semibold text-[var(--color-text-tertiary)]">{label}</p>
          </div>
        ))}
      </div>

      {/* Actions */}
      <div className="flex gap-3">
        <Button variant="secondary" onClick={onStartOver}>
          Import another file
        </Button>
        <Button variant="primary">
          View imported data
        </Button>
      </div>
    </div>
  );
}
