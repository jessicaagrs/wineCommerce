import ApiError from '@/service/model/error';
import { Wine } from '@/types/wineModel';
import axios from 'axios';

export default async function getWineList() {
  try {
    const response = await axios.get<Wine[]>(
      'https://api.sampleapis.com/wines/reds',
    );

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new ApiError(
        error.response?.data?.message || 'Erro desconhecido',
        error.response?.status ?? 500,
        error.response?.data || null,
      );
    }
    throw error;
  }
}
