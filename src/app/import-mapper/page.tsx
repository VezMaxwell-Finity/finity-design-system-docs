import { ImportMapper } from '@/components/import-mapper/ImportMapper';
import { MOCK_FILE, MOCK_MAPPINGS } from '@/components/import-mapper/mockData';
import type { ImportStep } from '@/components/import-mapper/types';

export const metadata = { title: 'Import Mapper' };

const VALID_STEPS: ImportStep[] = ['upload', 'preview', 'mapping', 'review', 'complete'];

export default async function ImportMapperPage({
  searchParams,
}: {
  searchParams: Promise<{ step?: string }>;
}) {
  const { step } = await searchParams;
  const previewStep = VALID_STEPS.includes(step as ImportStep)
    ? (step as ImportStep)
    : undefined;

  const needsMockData = previewStep && previewStep !== 'upload';

  return (
    <ImportMapper
      initialStep={previewStep}
      initialFile={needsMockData ? MOCK_FILE : undefined}
      initialMappings={needsMockData ? MOCK_MAPPINGS : undefined}
    />
  );
}
