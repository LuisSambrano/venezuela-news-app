/* eslint-disable @typescript-eslint/no-explicit-any */
import { buildPrisonerSearchQuery } from '../src/lib/search';

// Mock implementation of Supabase client builder pattern
class MockQueryBuilder {
  public query: any = { type: 'select', filters: [] };

  constructor(table: string) {
    this.query.table = table;
  }

  select(columns: string) {
    this.query.columns = columns;
    return this;
  }

  ilike(column: string, pattern: string) {
    this.query.filters.push({ method: 'ilike', column, pattern });
    return this;
  }

  textSearch(column: string, query: string, options: any) {
    this.query.filters.push({ method: 'textSearch', column, query, options });
    return this;
  }
}

// Mock Supabase Client
const mockClient: any = {
  from: (table: string) => new MockQueryBuilder(table)
};

function runTest(testName: string, query: string, expectedFilter: any) {
  console.log(`Running test: ${testName}`);
  const builder: any = buildPrisonerSearchQuery(mockClient, query);
  const filters = builder.query.filters;

  // Simple deep equality check
  const expected = JSON.stringify(expectedFilter);
  const actual = JSON.stringify(filters);

  if (expected === actual) {
    console.log('✅ Passed');
  } else {
    console.error('❌ Failed');
    console.error('Expected:', JSON.stringify(expectedFilter, null, 2));
    console.error('Received:', JSON.stringify(filters, null, 2));
    throw new Error('Test Failed');
  }
}

// Test Cases
try {
  runTest(
    'Numeric Query (ID Search)',
    '12345',
    [{ method: 'ilike', column: 'national_id', pattern: '12345%' }]
  );

  runTest(
    'Text Query (Name Search)',
    'Juan Perez',
    [{ method: 'textSearch', column: 'full_name', query: 'Juan Perez', options: { type: 'websearch', config: 'spanish' } }]
  );

  runTest(
    'Empty Query',
    '   ',
    []
  );

  console.log('All tests passed!');
} catch (e) {
  console.error(e);
  throw e;
}
