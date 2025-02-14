const BASE_URL = "http://192.168.1.170:3000";

const API_ROUTES = {
  RECIPES: `${BASE_URL}/recipes`,
  RECIPES_BY_USER: `${BASE_URL}/recipes/user`,
  LOGIN: `${BASE_URL}/users/login`,
  USERGROUPS: `${BASE_URL}/groups`,
  // Agrega más rutas según sea necesario
};

export { BASE_URL, API_ROUTES };
