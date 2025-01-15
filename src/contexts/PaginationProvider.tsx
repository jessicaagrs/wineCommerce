'use client';
import TypeFilter from '@/enum/enums';
import { createContext, useMemo, useState } from 'react';

export const PaginationContext = createContext({
  currentPage: 0,
  typeFilter: TypeFilter.NOFILTER,
  setCurrentPage: (value: number) => {},
  setTypeFilter: (value: TypeFilter) => {},
});

interface ProviderProps {
  readonly children: React.ReactNode;
}

export function PaginationContextProvider({ children }: ProviderProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [typeFilter, setTypeFilter] = useState(TypeFilter.NOFILTER);

  const value = useMemo(() => ({
    currentPage,
    setCurrentPage,
    typeFilter,
    setTypeFilter,
  }), [currentPage, typeFilter]);

  return (
    <PaginationContext.Provider value={value}>
      {children}
    </PaginationContext.Provider>
  );
}