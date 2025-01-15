import { PaginationContext } from '@/contexts/PaginationProvider';
import { useContext } from 'react';

export default function usePaginationContext() {
  return useContext(PaginationContext);
}
