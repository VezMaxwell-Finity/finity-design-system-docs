'use client';

import { Button } from '@/components/button';
import { formatFileSize } from '../utils';
import type { ParsedFile } from '../types';

interface PreviewStepProps {
  parsedFile: ParsedFile;
  onNext: () => void;
  onBack: () => void;
}

const PREVIEW_ROWS = 5;

export function PreviewStep({ parsedFile, onNext, onBack }: PreviewStepProps) {
  const previewRows = parsedFile.rows.slice(0, PREVIEW_ROWS);

  return (
    <div className="flex flex-col gap-6">
      {/* File info bar */}
      <div className="flex items-center gap-4 p-4 rounded-xl bg-[var(--color-bg-subtle)] border border-[var(--color-grey-200)]">
        <div className="w-10 h-10 rounded-lg bg-[var(--color-grey-900)] flex items-center justify-center flex-shrink-0">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M4 2H13L17 6V18C17 18.55 16.55 19 16 19H4C3.45 19 3 18.55 3 18V3C3 2.45 3.45 2 4 2Z" fill="white" fillOpacity="0.15" stroke="white" strokeWidth="1.5"/>
            <path d="M13 2V6H17" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-body-semibold text-[var(--color-text-default)] truncate">{parsedFile.fileName}</p>
          <p className="text-compact-medium text-[var(--color-text-tertiary)]">
            {formatFileSize(parsedFile.fileSize)} · {parsedFile.totalRows.toLocaleString()} rows · {parsedFile.headers.length} columns
          </p>
        </div>
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--color-green-100)] text-small-semibold text-[var(--color-green-700)]">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-green-500)]" />
          Parsed
        </span>
      </div>

      {/* Header */}
      <div>
        <h2 className="text-heading-md text-[var(--color-text-default)] mb-1">
          Preview your data
        </h2>
        <p className="text-body-regular text-[var(--color-text-secondary)]">
          Showing the first {Math.min(PREVIEW_ROWS, parsedFile.totalRows)} of {parsedFile.totalRows.toLocaleString()} rows. Confirm this looks right before mapping.
        </p>
      </div>

      {/* Table */}
      <div className="rounded-xl border border-[var(--color-grey-200)] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-max">
            <thead>
              <tr className="bg-[var(--color-bg-subtle)] border-b border-[var(--color-grey-200)]">
                <th className="px-4 py-3 text-small-semibold text-[var(--color-text-tertiary)] uppercase tracking-wide w-10 border-r border-[var(--color-grey-200)]">
                  #
                </th>
                {parsedFile.headers.map((header) => (
                  <th
                    key={header}
                    className="px-4 py-3 text-small-semibold text-[var(--color-text-secondary)] whitespace-nowrap max-w-[200px]"
                  >
                    <span className="inline-flex items-center gap-2">
                      {header}
                    </span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {previewRows.map((row, rowIdx) => (
                <tr
                  key={rowIdx}
                  className="border-b border-[var(--color-grey-100)] last:border-0 hover:bg-[var(--color-bg-subtle)] transition-colors"
                >
                  <td className="px-4 py-3 text-small-semibold text-[var(--color-text-tertiary)] border-r border-[var(--color-grey-100)]">
                    {rowIdx + 1}
                  </td>
                  {parsedFile.headers.map((header) => (
                    <td
                      key={header}
                      className="px-4 py-3 text-compact-medium text-[var(--color-text-default)] max-w-[200px]"
                    >
                      <span className="block truncate">
                        {row[header] || <span className="text-[var(--color-text-disabled)]">—</span>}
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
            + {(parsedFile.totalRows - PREVIEW_ROWS).toLocaleString()} more rows not shown
          </div>
        )}
      </div>

      {/* Columns summary */}
      <div className="p-4 rounded-xl bg-[var(--color-bg-subtle)] border border-[var(--color-grey-200)]">
        <p className="text-compact-semibold text-[var(--color-text-secondary)] mb-3">
          Detected columns ({parsedFile.headers.length})
        </p>
        <div className="flex flex-wrap gap-2">
          {parsedFile.headers.map((h) => (
            <span
              key={h}
              className="inline-flex items-center px-3 py-1 rounded-full bg-[var(--color-base-white)] border border-[var(--color-grey-200)] text-compact-medium text-[var(--color-text-default)]"
            >
              {h}
            </span>
          ))}
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center justify-between pt-2">
        <Button variant="tertiary" onClick={onBack}>
          Back
        </Button>
        <Button variant="primary" onClick={onNext}>
          Continue to mapping
        </Button>
      </div>
    </div>
  );
}
