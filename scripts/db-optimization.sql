-- Database Optimization Script for Prisoners Search
-- Run this in your Supabase SQL Editor

-- 1. Create B-Tree index on national_id for fast prefix search
-- Using text_pattern_ops allows the index to be used for LIKE 'pattern%' queries regardless of collation
CREATE INDEX CONCURRENTLY IF NOT EXISTS idx_prisoners_national_id ON prisoners (national_id text_pattern_ops);

-- 2. Create GIN index on full_name for Full Text Search
-- This enables efficient textSearch('spanish', query) execution
CREATE INDEX CONCURRENTLY IF NOT EXISTS idx_prisoners_full_name_fts ON prisoners USING GIN (to_tsvector('spanish', full_name));

-- Notes:
-- - The application logic has been updated to use prefix search for numeric queries (National ID)
--   and Full Text Search for text queries (Name).
-- - Ensure that the 'prisoners' table exists and has 'national_id' and 'full_name' columns.
