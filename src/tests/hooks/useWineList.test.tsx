import { renderHook, waitFor } from '@testing-library/react';
import { describe, expect, test, jest } from '@jest/globals';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import axios from 'axios';
import useWineList from '@/hooks/useWineList';
import getWineList from '@/service/wineService';

describe('useWineList - hook', () => {
  const queryClient = new QueryClient();

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

    await getWineList();

    const { result } = renderHook(() => useWineList(), { wrapper });

    //Act
    await waitFor(() => expect(result.current.data).toBeDefined());

    const { data, isError, isPending, error } = result.current;

    // Assert
    expect(data).toEqual(mockWineList);
    expect(isError).toBe(false);
    expect(isPending).toBe(false);
    expect(error).toBe(null);
  });
});
