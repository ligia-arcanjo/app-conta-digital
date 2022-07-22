export async function getAllStocks() {
  try {
    const response = await fetch(
      './stocks.json',
      { headers: { Accept: 'application/json' } },
    );

    const data = await response.json();

    return data;
  } catch (error) {
    return [];
  }
}

export async function getUserStocks() {
  try {
    const response = await fetch(
      './userStocks.json',
      { headers: { Accept: 'application/json' } },
    );

    const data = await response.json();

    return data;
  } catch (error) {
    return [];
  }
}
