import useWineList from '@/hooks/useWineList';
import { describe, expect, jest, test } from '@jest/globals';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { renderHook, waitFor } from '@testing-library/react';
import axios from 'axios';

describe('useWineList - hook', () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

  const wrapper = ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );

  test('should return a list of wines from the API', async () => {
    //Arrange
    const mockWineList = [
      {
        winery: 'Maselva',
        wine: 'Emporda 2012',
        rating: {
          average: '4.9',
          reviews: '88 ratings',
        },
        location: 'Spain\n·\nEmpordà',
        image:
          'https://images.vivino.com/thumbs/ApnIiXjcT5Kc33OHgNb9dA_375x500.jpg',
        id: 1,
      },
    ];

    jest.spyOn(axios, 'get').mockResolvedValue({ data: mockWineList });

    const { result } = renderHook(() => useWineList(1), { wrapper });

    await waitFor(() => expect(result.current.isPending).toBe(false));
    await waitFor(() => expect(result.current.data).toEqual(mockWineList));

    expect(result.current.isError).toBe(false);
    expect(result.current.error).toBe(null);
  });
});
