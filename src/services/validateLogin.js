export default async function validateLogin() {
  try {
    const response = await fetch(
      './mocks/login.json',
      { headers: { Accept: 'application/json' } },
    );

    const data = await response.json();

    return data[0];
  } catch (error) {
    return [];
  }
}
