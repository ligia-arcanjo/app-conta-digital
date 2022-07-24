import { getUserData } from '../utils/userData';

export async function getAllStocks() {
  try {
    const response = await fetch(
      './mocks/stocks.json',
      { headers: { Accept: 'application/json' } },
    );

    const data = await response.json();

    return data;
  } catch (error) {
    return [];
  }
}

export async function getUserStocks() {
  const { token } = getUserData();

  if (token) {
    try {
      const response = await fetch(
        './mocks/userStocks.json',
        { headers: { Accept: 'application/json' } },
      );
      const data = await response.json();

      return data;
    } catch (error) {
      return [];
    }
  }

  throw new Error('Token not found');
}

export async function getUserStockById(id) {
  const { token } = getUserData();

  if (token) {
    try {
      const response = await fetch(
        '../mocks/userStocks.json',
        { headers: { Accept: 'application/json' } },
      );
      const data = await response.json();

      return data.filter((stock) => stock.id === id);
    } catch (error) {
      return [];
    }
  }

  throw new Error('Token not found');
}

export async function getStockById(id) {
  const { token } = getUserData();

  if (token) {
    try {
      const response = await fetch(
        '../mocks/stocks.json',
        { headers: { Accept: 'application/json' } },
      );
      const data = await response.json();

      return data.filter((stock) => stock.id === id);
    } catch (error) {
      return [];
    }
  }

  throw new Error('Token not found');
}
