import ApiError from '@/service/model/error';
import getWineList from '@/service/wineService';
import { describe, expect, jest, test } from '@jest/globals';
import axios from 'axios';

describe('wine - service', () => {
  test('should return a list of wines from the API', async () => {
    // Arrange
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

    // Act
    const result = await getWineList();

    // Assert
    expect(result).toEqual(mockWineList);
    expect(result).toHaveLength(1);
    expect(result[0]).toHaveProperty('winery');
    expect(result[0]).toHaveProperty('wine');
    expect(result[0]).toHaveProperty('rating');
    expect(result[0].rating).toHaveProperty('average');
    expect(result[0].rating).toHaveProperty('reviews');
    expect(result[0]).toHaveProperty('location');
    expect(result[0]).toHaveProperty('image');
    expect(result[0]).toHaveProperty('id');
  });

  test('should return an empty list if the API does not return any data', async () => {
    // Arrange
    jest.spyOn(axios, 'get').mockResolvedValue({ data: [] });

    // Act
    const result = await getWineList();

    // Assert
    expect(result).toEqual([]);
  });

  test('should return an error if the API fails', async () => {
    // Arrange
    jest.spyOn(axios, 'get').mockRejectedValue(new ApiError('API error', 500, 'Falha ao buscar os vinhos'));

    // Act
    try {
      await getWineList();
    } catch (error : any) {
      // Assert
      expect(error).toBeInstanceOf(ApiError);
      expect(error).toHaveProperty('message');
      expect(error).toHaveProperty('statusCode');
      expect(error).toHaveProperty('details');
    }
  });
});
