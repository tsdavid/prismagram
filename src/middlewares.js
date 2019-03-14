export const isAuthenticated = request => {
  if (!request.user) {
    throw Error ('You need to li=og in to pereform this action');
  }
  return;
};
