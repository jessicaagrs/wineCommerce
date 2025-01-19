import TypeFilter from '@/enum/enums';
import getWineList from '@/service/wineService';
import { Wine } from '@/types/wineModel';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import usePaginationContext from './usePaginationContext';

export default function useWineList(
  page: number,
  limit: number = 50,
  typeFilter: TypeFilter = TypeFilter.NOFILTER,
  search: string = '',
) {
  const { setTotalPages } = usePaginationContext();
  const [content, setContent] = useState<Wine[]>([]);

  const { isPending, isError, data, error } = useQuery({
    queryKey: ['wines', page],
    queryFn: getWineList,
  });

  useEffect(() => {
    if (data) {
      const totalPages = data.length;
      setTotalPages(Math.ceil(totalPages / limit));

      const paginatedData = data
        ? data.slice((page - 1) * limit, page * limit)
        : [];

      setContent(paginatedData);

      if (typeFilter !== TypeFilter.NOFILTER) {
        const filteredData = paginatedData?.filter(
          (wine) =>
            parseInt(wine.rating.average) < parseInt(typeFilter.toString()),
        );
        setContent(filteredData);
      }

      if (search) {
        const filteredData = content?.filter((wine) =>
          wine.wine.toLowerCase().includes(search.toLowerCase()),
        );
        setContent(filteredData);
      }
    }
  }, [data, limit, setTotalPages, setContent, page, typeFilter, search]);

  return { isPending, isError, data: content, error };
}
