'use client';

import { Button } from '@/components/button';
import { SYSTEM_FIELDS } from '../systemFields';
import type { ColumnMapping, ParsedFile } from '../types';

interface ReviewStepProps {
  parsedFile: ParsedFile;
  mappings: ColumnMapping[];
  onConfirm: () => void;
  onBack: () => void;
}

const PREVIEW_ROWS = 5;

export function ReviewStep({ parsedFile, mappings, onConfirm, onBack }: ReviewStepProps) {
  const activeMappings = mappings.filter((m) => m.targetFieldId !== null);
  const skippedMappings = mappings.filter((m) => m.targetFieldId === null);
  const previewRows = parsedFile.rows.slice(0, PREVIEW_ROWS);

  return (
    <div className="flex flex-col gap-6">
      {/* Header */}
      <div>
        <h2 className="text-heading-md text-[var(--color-text-default)] mb-1">Review your import</h2>
        <p className="text-body-regular text-[var(--color-text-secondary)]">
          Everything looks good. Confirm the details below before importing.
        </p>
      </div>

      {/* Summary cards */}
      <div className="grid grid-cols-3 gap-4">
        {[
          { label: 'Total rows', value: parsedFile.totalRows.toLocaleString(), color: 'var(--color-text-default)' },
          { label: 'Columns mapped', value: activeMappings.length, color: 'var(--color-green-600)' },
          { label: 'Columns skipped', value: skippedMappings.length, color: 'var(--color-text-tertiary)' },
        ].map(({ label, value, color }) => (
          <div key={label} className="p-5 rounded-xl bg-[var(--color-bg-subtle)] border border-[var(--color-grey-200)]">
            <p className="text-small-semibold text-[var(--color-text-tertiary)] mb-1">{label}</p>
            <p className="text-heading-md" style={{ color }}>{value}</p>
          </div>
        ))}
      </div>

      {/* Mapping summary */}
      <div>
        <h3 className="text-compact-semibold text-[var(--color-text-secondary)] uppercase tracking-wide mb-3">
          Column mapping
        </h3>
        <div className="rounded-xl border border-[var(--color-grey-200)] overflow-hidden divide-y divide-[var(--color-grey-100)]">
          {activeMappings.map((m) => {
            const field = SYSTEM_FIELDS.find((f) => f.id === m.targetFieldId);
            return (
              <div key={m.sourceColumn} className="flex items-center gap-4 px-4 py-3">
                <span className="text-compact-medium text-[var(--color-text-secondary)] flex-1 truncate">
                  {m.sourceColumn}
                </span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="flex-shrink-0 text-[var(--color-grey-400)]">
                  <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <div className="flex items-center gap-2 flex-1">
                  <span className="text-compact-semibold text-[var(--color-text-default)]">{field?.label}</span>
                  {field?.required && (
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-[var(--color-coral-50)] text-small-semibold text-[var(--color-coral-600)]">
                      Required
                    </span>
                  )}
                </div>
              </div>
            );
          })}
          {skippedMappings.map((m) => (
            <div key={m.sourceColumn} className="flex items-center gap-4 px-4 py-3 opacity-50">
              <span className="text-compact-medium text-[var(--color-text-tertiary)] flex-1 truncate line-through">
                {m.sourceColumn}
              </span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="flex-shrink-0 text-[var(--color-grey-300)]">
                <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-compact-medium text-[var(--color-text-disabled)] flex-1">Not imported</span>
            </div>
          ))}
        </div>
      </div>

      {/* Data preview with mapped columns */}
      <div>
        <h3 className="text-compact-semibold text-[var(--color-text-secondary)] uppercase tracking-wide mb-3">
          Data preview (mapped fields only)
        </h3>
        <div className="rounded-xl border border-[var(--color-grey-200)] overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left min-w-max">
              <thead>
                <tr className="bg-[var(--color-bg-subtle)] border-b border-[var(--color-grey-200)]">
                  {activeMappings.map((m) => {
                    const field = SYSTEM_FIELDS.find((f) => f.id === m.targetFieldId);
                    return (
                      <th key={m.sourceColumn} className="px-4 py-3 text-small-semibold text-[var(--color-text-secondary)] whitespace-nowrap">
                        {field?.label}
                      </th>
                    );
                  })}
                </tr>
              </thead>
              <tbody>
                {previewRows.map((row, i) => (
                  <tr key={i} className="border-b border-[var(--color-grey-100)] last:border-0 hover:bg-[var(--color-bg-subtle)]">
                    {activeMappings.map((m) => (
                      <td key={m.sourceColumn} className="px-4 py-3 text-compact-medium text-[var(--color-text-default)]">
                        <span className="block truncate max-w-[160px]">
                          {row[m.sourceColumn] || <span className="text-[var(--color-text-disabled)]">—</span>}
                        </span>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {parsedFile.totalRows > PREVIEW_ROWS && (
            <div className="px-4 py-3 bg-[var(--color-bg-subtle)] border-t border-[var(--color-grey-200)] text-compact-medium text-[var(--color-text-tertiary)]">
              + {(parsedFile.totalRows - PREVIEW_ROWS).toLocaleString()} more rows
            </div>
          )}
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center justify-between pt-2">
        <Button variant="tertiary" onClick={onBack}>
          Back
        </Button>
        <Button variant="emphasis" onClick={onConfirm}>
          Import {parsedFile.totalRows.toLocaleString()} rows
        </Button>
      </div>
    </div>
  );
}
