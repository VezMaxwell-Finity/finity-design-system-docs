'use client';

import { useState } from 'react';
import { StepIndicator } from './StepIndicator';
import { UploadStep } from './steps/UploadStep';
import { PreviewStep } from './steps/PreviewStep';
import { MappingStep } from './steps/MappingStep';
import { ReviewStep } from './steps/ReviewStep';
import { CompleteStep } from './steps/CompleteStep';
import { autoMapColumns } from './utils';
import type { ImportStep, ParsedFile, ColumnMapping } from './types';

interface ImportMapperProps {
  initialStep?: ImportStep;
  initialFile?: ParsedFile;
  initialMappings?: ColumnMapping[];
}

export function ImportMapper({ initialStep, initialFile, initialMappings }: ImportMapperProps = {}) {
  const [step, setStep] = useState<ImportStep>(initialStep ?? 'upload');
  const [parsedFile, setParsedFile] = useState<ParsedFile | null>(initialFile ?? null);
  const [mappings, setMappings] = useState<ColumnMapping[]>(initialMappings ?? []);

  const handleFileUploaded = (file: ParsedFile) => {
    setParsedFile(file);
    setMappings(autoMapColumns(file));
    setStep('preview');
  };

  const reset = () => {
    setStep('upload');
    setParsedFile(null);
    setMappings([]);
  };

  return (
    <div className="min-h-screen bg-[var(--color-bg-subtle)]">
      {/* Top nav */}
      <header className="h-14 bg-[var(--color-base-white)] border-b border-[var(--color-grey-200)] flex items-center px-8 gap-4">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-lg bg-[var(--color-grey-900)] flex items-center justify-center">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <rect x="1" y="1" width="5" height="5" rx="1" fill="white" opacity="0.8"/>
              <rect x="8" y="1" width="5" height="5" rx="1" fill="white" opacity="0.5"/>
              <rect x="1" y="8" width="5" height="5" rx="1" fill="white" opacity="0.5"/>
              <rect x="8" y="8" width="5" height="5" rx="1" fill="white" opacity="0.3"/>
            </svg>
          </div>
          <span className="text-compact-semibold text-[var(--color-text-default)]">Import</span>
        </div>
        <div className="h-4 w-px bg-[var(--color-grey-200)]" />
        <span className="text-compact-medium text-[var(--color-text-tertiary)]">Column Mapper</span>
      </header>

      <main className="max-w-4xl mx-auto px-8 py-10 flex flex-col gap-10">
        {/* Step indicator — hidden on complete */}
        {step !== 'complete' && (
          <div className="flex justify-center">
            <StepIndicator currentStep={step} />
          </div>
        )}

        {/* Step card */}
        <div className="bg-[var(--color-base-white)] rounded-2xl border border-[var(--color-grey-200)] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]">
          {step === 'upload' && (
            <div className="px-[9px] pt-[9px] pb-px">
              <UploadStep onNext={handleFileUploaded} />
            </div>
          )}

          {step === 'preview' && parsedFile && (
            <div className="p-6">
              <PreviewStep
                parsedFile={parsedFile}
                onNext={() => setStep('mapping')}
                onBack={() => setStep('upload')}
              />
            </div>
          )}

          {step === 'mapping' && parsedFile && (
            <div className="p-6">
              <MappingStep
                parsedFile={parsedFile}
                mappings={mappings}
                onChange={setMappings}
                onNext={() => setStep('review')}
                onBack={() => setStep('preview')}
              />
            </div>
          )}

          {step === 'review' && parsedFile && (
            <div className="p-6">
              <ReviewStep
                parsedFile={parsedFile}
                mappings={mappings}
                onConfirm={() => setStep('complete')}
                onBack={() => setStep('mapping')}
              />
            </div>
          )}

          {step === 'complete' && parsedFile && (
            <div className="p-6">
              <CompleteStep
                parsedFile={parsedFile}
                mappings={mappings}
                onStartOver={reset}
              />
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
