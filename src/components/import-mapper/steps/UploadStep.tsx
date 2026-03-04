'use client';

import { useRef, useState, useCallback } from 'react';
import { Button } from '@/components/button';
import { parseFile } from '../utils';
import type { ParsedFile } from '../types';

interface UploadStepProps {
  onNext: (parsed: ParsedFile) => void;
}

const TIPS = [
  'Make sure your file has a header row with column names',
  'Column names will be auto-matched to system fields where possible',
  'You can review and adjust all mappings before importing',
];

export function UploadStep({ onNext }: UploadStepProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [dragging, setDragging] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleFile = useCallback(async (file: File) => {
    setError(null);
    setLoading(true);
    try {
      const parsed = await parseFile(file);
      if (parsed.headers.length === 0) {
        setError('The file appears to be empty or has no column headers.');
        return;
      }
      onNext(parsed);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to parse file.');
    } finally {
      setLoading(false);
    }
  }, [onNext]);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) handleFile(file);
  }, [handleFile]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) handleFile(file);
  };

  return (
    <div className="flex flex-col items-center justify-center py-2 gap-2">
      {/* Header */}
      <div className="text-center w-[448px]">
        <h2 className="text-heading-md text-[var(--color-text-default)] mb-[2px]">
          Upload your file
        </h2>
        <p className="text-body-regular text-[var(--color-text-secondary)]">
          Upload a CSV or Excel file to get started. We&apos;ll help you map the columns to the correct fields.
        </p>
      </div>

      {/* Drop zone — coral border always visible */}
      <div
        onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
        onDragLeave={() => setDragging(false)}
        onDrop={handleDrop}
        onClick={() => inputRef.current?.click()}
        className={`
          w-[512px] h-[162px] rounded-2xl border-2 border-solid cursor-pointer
          flex flex-col items-center justify-center gap-1 p-[2px]
          transition-colors select-none
          ${dragging
            ? 'border-[var(--color-coral-600)] bg-[var(--color-coral-50)]'
            : 'border-[var(--color-coral-500)] bg-[var(--color-bg-subtle)] hover:bg-[var(--color-coral-50)]'
          }
        `.replace(/\s+/g, ' ').trim()}
      >
        {/* Upload icon */}
        <div className="w-14 h-14 rounded-full bg-[var(--color-grey-200)] flex items-center justify-center">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" stroke="var(--color-grey-500)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <polyline points="17,8 12,3 7,8" stroke="var(--color-grey-500)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <line x1="12" y1="3" x2="12" y2="15" stroke="var(--color-grey-500)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

        <div className="text-center">
          <p className="text-body-semibold text-[var(--color-text-default)]">
            {dragging ? 'Drop your file here' : 'Drag & drop your file here'}
          </p>
          <p className="text-compact-medium text-[var(--color-text-tertiary)]">
            or click to browse
          </p>
        </div>

        <div className="flex gap-[2px]">
          {['CSV', 'XLS', 'XLSX'].map((ext) => (
            <span key={ext} className="inline-flex items-center px-[2px] py-1 rounded-full bg-[var(--color-grey-200)] text-small-semibold text-[var(--color-grey-700)]">
              .{ext}
            </span>
          ))}
        </div>

        <input
          ref={inputRef}
          type="file"
          accept=".csv,.xls,.xlsx"
          className="hidden"
          onChange={handleInputChange}
        />
      </div>

      {/* Tips */}
      <div className="w-[512px] flex flex-col gap-3">
        <p className="text-small-semibold text-[var(--color-text-tertiary)] uppercase tracking-wide">Tips</p>
        <ul className="flex flex-col gap-[2px]">
          {TIPS.map((tip) => (
            <li key={tip} className="flex items-center gap-[2px] h-5">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="flex-shrink-0">
                <circle cx="8" cy="8" r="7" stroke="var(--color-grey-400)" strokeWidth="1.5"/>
                <path d="M5 8L7 10.5L11 5.5" stroke="var(--color-grey-400)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-compact-medium text-[var(--color-grey-700)]">{tip}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Error */}
      {error && (
        <div className="flex items-start gap-3 p-4 rounded-xl bg-[var(--color-red-50)] border border-[var(--color-red-200)] w-[512px]">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="mt-0.5 flex-shrink-0">
            <path d="M9 1.5C4.86 1.5 1.5 4.86 1.5 9C1.5 13.14 4.86 16.5 9 16.5C13.14 16.5 16.5 13.14 16.5 9C16.5 4.86 13.14 1.5 9 1.5ZM9.75 12.75H8.25V11.25H9.75V12.75ZM9.75 9.75H8.25V5.25H9.75V9.75Z" fill="var(--color-red-500)"/>
          </svg>
          <p className="text-compact-medium text-[var(--color-red-700)]">{error}</p>
        </div>
      )}

      {loading && (
        <div className="flex items-center gap-3 text-compact-medium text-[var(--color-text-secondary)]">
          <svg className="animate-spin" width="18" height="18" viewBox="0 0 24 24" fill="none">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
          </svg>
          Parsing file...
        </div>
      )}

      <Button
        variant="secondary"
        size="medium"
        onClick={() => inputRef.current?.click()}
        loading={loading}
      >
        Browse files
      </Button>
    </div>
  );
}
