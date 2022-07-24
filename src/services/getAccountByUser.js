import { getUserData } from '../utils/userData';

export default async function getAccountByUser() {
  const { token } = getUserData();

  if (token) {
    try {
      const response = await fetch(
        './mocks/accountInfo.json',
        { headers: { Accept: 'application/json' } },
      );
      const data = await response.json();

      return data[0];
    } catch (error) {
      return [];
    }
  }

  throw new Error('Token not found');
}
