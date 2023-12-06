export const getUser = (state) => state.user.name;
export const isAdmin = (state) => state.user.role?.toLowerCase() === 'admin';
