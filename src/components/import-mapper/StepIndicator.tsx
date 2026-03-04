'use client';

import type { ImportStep } from './types';

const STEPS: { id: ImportStep; label: string }[] = [
  { id: 'upload', label: 'Upload' },
  { id: 'preview', label: 'Preview' },
  { id: 'mapping', label: 'Map Columns' },
  { id: 'review', label: 'Review' },
  { id: 'complete', label: 'Complete' },
];

const STEP_ORDER: ImportStep[] = ['upload', 'preview', 'mapping', 'review', 'complete'];

function stepIndex(step: ImportStep) {
  return STEP_ORDER.indexOf(step);
}

interface StepIndicatorProps {
  currentStep: ImportStep;
}

export function StepIndicator({ currentStep }: StepIndicatorProps) {
  const currentIndex = stepIndex(currentStep);

  return (
    <div className="flex items-start">
      {STEPS.map((step, i) => {
        const isDone = i < currentIndex;
        const isActive = i === currentIndex;

        return (
          <div key={step.id} className="flex items-start">
            {/* Step: dot + label stacked */}
            <div className="flex flex-col items-center gap-[2px]">
              {/* Dot with number */}
              <div className="relative flex items-center justify-center">
                <div
                  className={`w-2 h-2 rounded-full flex-shrink-0 ${
                    isDone || isActive
                      ? 'bg-[var(--color-grey-900)]'
                      : 'bg-[var(--color-grey-200)]'
                  }`}
                />
                {/* Number sits centered over the dot, overflows intentionally */}
                <span
                  className={`absolute text-[12px] leading-[16px] font-semibold tracking-[0.3px] whitespace-nowrap pointer-events-none ${
                    isDone || isActive
                      ? 'text-white'
                      : 'text-[var(--color-text-tertiary)]'
                  }`}
                  style={{ fontSize: '7px', lineHeight: 1 }}
                >
                  {isDone ? '✓' : i + 1}
                </span>
              </div>
              {/* Label */}
              <span
                className={`text-small-semibold whitespace-nowrap ${
                  isActive
                    ? 'text-[var(--color-text-default)]'
                    : isDone
                    ? 'text-[var(--color-text-secondary)]'
                    : 'text-[var(--color-text-tertiary)]'
                }`}
              >
                {step.label}
              </span>
            </div>

            {/* Connector line aligned to dot center */}
            {i < STEPS.length - 1 && (
              <div className="h-px w-3 bg-[var(--color-grey-200)] mt-1 mx-0" />
            )}
          </div>
        );
      })}
    </div>
  );
}
