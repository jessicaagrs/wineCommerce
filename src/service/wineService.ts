import { Wine } from '@/types/wineModel';
import axios from 'axios';

export default async function getWineList() {
  try {
    const response = await axios.get<Wine[]>(
      'https://api.sampleapis.com/wines/reds',
    );

    return response.data;
  } catch (error) {
    throw new Error('Erro ao buscar a lista de vinhos');
  }
}
