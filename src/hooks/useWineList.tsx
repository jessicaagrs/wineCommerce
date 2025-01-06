import getWineList from '@/service/wineService';
import { useQuery } from '@tanstack/react-query';

export default function useWineList() {
  const { isPending, isError, data, error } = useQuery({
    queryKey: ['wines'],
    queryFn: getWineList,
  });

  return { isPending, isError, data, error };
}
