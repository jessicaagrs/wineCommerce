import getWineList from '@/service/wineService';
import { useQuery } from '@tanstack/react-query';
import usePaginationContext from './usePaginationContext';
import { useEffect } from 'react';

export default function useWineList(page: number, limit: number = 50) {
  const { setTotalPages } = usePaginationContext();

  const { isPending, isError, data, error } = useQuery({
    queryKey: ['wines', page],
    queryFn: getWineList,
  });

  const paginatedData = data
    ? data.slice((page - 1) * limit, page * limit)
    : [];

  useEffect(() => {
    if (data) {
      const totalPages = data.length;
      setTotalPages(Math.ceil(totalPages / limit));
    }
  }, [data, limit, setTotalPages]);

  return { isPending, isError, data: paginatedData, error };
}
