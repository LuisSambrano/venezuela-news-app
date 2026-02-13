import { SupabaseClient } from '@supabase/supabase-js';

/**
 * Builds an optimized search query for prisoners.
 *
 * Strategy:
 * - If the query is numeric, it's likely a National ID search.
 *   We use a prefix match (ilike 'query%') which can use a B-tree index.
 * - If the query is text, it's likely a Name search.
 *   We use Full Text Search (textSearch) on 'full_name' which uses a GIN index.
 *
 * This avoids the performance pitfall of `ilike '%query%'` which forces a full table scan.
 */
export function buildPrisonerSearchQuery(client: SupabaseClient, query: string) {
  const queryBuilder = client.from('prisoners').select('*');

  const cleanQuery = query.trim();
  if (!cleanQuery) return queryBuilder;

  // Check if query consists only of digits
  if (/^\d+$/.test(cleanQuery)) {
    // Optimized for National ID: Prefix search
    // This assumes a B-Tree index on national_id
    return queryBuilder.ilike('national_id', `${cleanQuery}%`);
  } else {
    // Optimized for Name: Full Text Search
    // This assumes a GIN index on to_tsvector('spanish', full_name)
    // using 'websearch' type for better handling of natural language (quotes, etc.)
    return queryBuilder.textSearch('full_name', cleanQuery, {
      type: 'websearch',
      config: 'spanish'
    });
  }
}
