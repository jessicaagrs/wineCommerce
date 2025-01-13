import getWineList from '@/service/wineService';
import { useQuery } from '@tanstack/react-query';

export default function useWineList(page: number, limit: number = 50) {
  const { isPending, isError, data, error } = useQuery({
    queryKey: ['wines', page],
    queryFn: getWineList,
  });

  const paginatedData = data
    ? data.slice((page - 1) * limit, page * limit)
    : [];

  return { isPending, isError, data: paginatedData, error };
}
