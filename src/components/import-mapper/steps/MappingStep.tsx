'use client';

import { useState } from 'react';
import { Button } from '@/components/button';
import { SYSTEM_FIELDS, FIELD_GROUPS } from '../systemFields';
import { getMappingCoverage, getRequiredFieldsMissing } from '../utils';
import type { ColumnMapping, ParsedFile } from '../types';

interface MappingStepProps {
  parsedFile: ParsedFile;
  mappings: ColumnMapping[];
  onChange: (mappings: ColumnMapping[]) => void;
  onNext: () => void;
  onBack: () => void;
}

function FieldSelect({
  value,
  onChange,
}: {
  value: string | null;
  onChange: (val: string | null) => void;
}) {
  return (
    <div className="relative">
      <select
        value={value ?? ''}
        onChange={(e) => onChange(e.target.value === '' ? null : e.target.value)}
        className={`
          w-full appearance-none h-10 pl-4 pr-10 rounded-lg border text-compact-medium
          bg-[var(--color-base-white)] cursor-pointer
          focus:outline-none focus:ring-2 focus:ring-[var(--color-grey-900)] focus:border-transparent
          transition-colors
          ${value
            ? 'border-[var(--color-grey-900)] text-[var(--color-text-default)]'
            : 'border-[var(--color-grey-300)] text-[var(--color-text-tertiary)]'
          }
        `.replace(/\s+/g, ' ').trim()}
      >
        <option value="">Do not import</option>
        {FIELD_GROUPS.map((group) => (
          <optgroup key={group} label={group}>
            {SYSTEM_FIELDS.filter((f) => f.group === group).map((field) => (
              <option key={field.id} value={field.id}>
                {field.label}{field.required ? ' *' : ''}
              </option>
            ))}
          </optgroup>
        ))}
      </select>
      {/* Chevron */}
      <svg
        className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[var(--color-text-tertiary)]"
        width="16" height="16" viewBox="0 0 16 16" fill="none"
      >
        <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  );
}

function SampleValues({ values }: { values: string[] }) {
  if (values.length === 0) return <span className="text-[var(--color-text-disabled)]">No data</span>;
  return (
    <div className="flex flex-wrap gap-1">
      {values.map((v, i) => (
        <span key={i} className="inline-block max-w-[120px] truncate px-2 py-0.5 rounded-md bg-[var(--color-grey-100)] text-small-semibold text-[var(--color-text-secondary)]">
          {v}
        </span>
      ))}
    </div>
  );
}

export function MappingStep({ parsedFile, mappings, onChange, onNext, onBack }: MappingStepProps) {
  const [filter, setFilter] = useState<'all' | 'mapped' | 'unmapped'>('all');

  const updateMapping = (index: number, targetFieldId: string | null) => {
    const next = mappings.map((m, i) => (i === index ? { ...m, targetFieldId } : m));
    onChange(next);
  };

  const { mapped, total } = getMappingCoverage(mappings);
  const missingRequired = getRequiredFieldsMissing(mappings);

  const filtered = mappings.filter((m) => {
    if (filter === 'mapped') return m.targetFieldId !== null;
    if (filter === 'unmapped') return m.targetFieldId === null;
    return true;
  });

  const canProceed = missingRequired.length === 0;

  return (
    <div className="flex flex-col gap-6">
      {/* Header */}
      <div>
        <h2 className="text-heading-md text-[var(--color-text-default)] mb-1">Map your columns</h2>
        <p className="text-body-regular text-[var(--color-text-secondary)]">
          Match each column from your file to the correct field. We&apos;ve auto-mapped what we can — review and adjust as needed.
        </p>
      </div>

      {/* Stats bar */}
      <div className="flex items-center gap-4 p-4 rounded-xl bg-[var(--color-bg-subtle)] border border-[var(--color-grey-200)]">
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <span className="text-compact-medium text-[var(--color-text-secondary)]">
              {mapped} of {total} columns mapped
            </span>
            <span className="text-compact-semibold text-[var(--color-text-default)]">
              {Math.round((mapped / total) * 100)}%
            </span>
          </div>
          <div className="h-1.5 rounded-full bg-[var(--color-grey-200)] overflow-hidden">
            <div
              className="h-full rounded-full bg-[var(--color-grey-900)] transition-all duration-300"
              style={{ width: `${(mapped / total) * 100}%` }}
            />
          </div>
        </div>

        {missingRequired.length > 0 && (
          <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[var(--color-yellow-50)] border border-[var(--color-yellow-200)]">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 1.5L14.5 13.5H1.5L8 1.5Z" stroke="var(--color-yellow-600)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M8 6V9" stroke="var(--color-yellow-600)" strokeWidth="1.5" strokeLinecap="round"/>
              <circle cx="8" cy="11.5" r="0.5" fill="var(--color-yellow-600)" stroke="var(--color-yellow-600)"/>
            </svg>
            <span className="text-small-semibold text-[var(--color-yellow-700)]">
              {missingRequired.map((f) => f.label).join(', ')} required
            </span>
          </div>
        )}
      </div>

      {/* Filter tabs */}
      <div className="flex gap-1 p-1 rounded-lg bg-[var(--color-bg-muted)] w-fit">
        {(['all', 'mapped', 'unmapped'] as const).map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`
              px-4 py-1.5 rounded-md text-compact-semibold capitalize transition-colors
              ${filter === f
                ? 'bg-[var(--color-base-white)] text-[var(--color-text-default)] shadow-sm'
                : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-default)]'
              }
            `.replace(/\s+/g, ' ').trim()}
          >
            {f}
            {f === 'unmapped' && (total - mapped) > 0 && (
              <span className="ml-1.5 inline-flex items-center justify-center w-4 h-4 rounded-full bg-[var(--color-grey-300)] text-small-semibold text-[var(--color-text-secondary)]">
                {total - mapped}
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Mapping table */}
      <div className="rounded-xl border border-[var(--color-grey-200)] overflow-hidden">
        {/* Table header */}
        <div className="grid grid-cols-[1fr_16px_1fr_1fr] gap-4 px-4 py-3 bg-[var(--color-bg-subtle)] border-b border-[var(--color-grey-200)]">
          <span className="text-small-semibold text-[var(--color-text-tertiary)] uppercase tracking-wide">Your column</span>
          <span />
          <span className="text-small-semibold text-[var(--color-text-tertiary)] uppercase tracking-wide">System field</span>
          <span className="text-small-semibold text-[var(--color-text-tertiary)] uppercase tracking-wide">Sample data</span>
        </div>

        {/* Rows */}
        <div className="divide-y divide-[var(--color-grey-100)]">
          {filtered.map((mapping) => {
            const globalIndex = mappings.findIndex((m) => m.sourceColumn === mapping.sourceColumn);
            const isMapped = mapping.targetFieldId !== null;
            const targetField = SYSTEM_FIELDS.find((f) => f.id === mapping.targetFieldId);

            return (
              <div
                key={mapping.sourceColumn}
                className={`grid grid-cols-[1fr_16px_1fr_1fr] gap-4 px-4 py-4 items-center hover:bg-[var(--color-bg-subtle)] transition-colors ${isMapped ? '' : 'opacity-70'}`}
              >
                {/* Source column */}
                <div className="flex items-center gap-3">
                  <div className={`w-2 h-2 rounded-full flex-shrink-0 ${isMapped ? 'bg-[var(--color-green-400)]' : 'bg-[var(--color-grey-300)]'}`} />
                  <div>
                    <p className="text-compact-semibold text-[var(--color-text-default)]">
                      {mapping.sourceColumn}
                    </p>
                    {targetField?.required && (
                      <span className="text-small-semibold text-[var(--color-coral-500)]">Required</span>
                    )}
                  </div>
                </div>

                {/* Arrow */}
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className={isMapped ? 'text-[var(--color-grey-500)]' : 'text-[var(--color-grey-300)]'}>
                  <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>

                {/* Target field */}
                <FieldSelect
                  value={mapping.targetFieldId}
                  onChange={(val) => updateMapping(globalIndex, val)}
                />

                {/* Sample values */}
                <div className="min-w-0">
                  <SampleValues values={mapping.sampleValues} />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center justify-between pt-2">
        <Button variant="tertiary" onClick={onBack}>
          Back
        </Button>
        <div className="flex items-center gap-3">
          {!canProceed && (
            <p className="text-compact-medium text-[var(--color-text-secondary)]">
              Map required fields to continue
            </p>
          )}
          <Button variant="primary" onClick={onNext} disabled={!canProceed}>
            Review import
          </Button>
        </div>
      </div>
    </div>
  );
}
