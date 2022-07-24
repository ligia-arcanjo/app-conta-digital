function getData() {
  const accessInfo = localStorage.getItem('accessInfo');

  if (accessInfo != null) {
    const userData = JSON.parse(accessInfo);

    return userData;
  }

  return false;
}

function hasUserData() {
  return Boolean(getData());
}

function getUserData() {
  const userData = getData();

  if (!userData) {
    window.location = '/';
  }

  return userData;
}

export { hasUserData, getUserData };
