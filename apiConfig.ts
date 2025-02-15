const BASE_URL = "http://192.168.1.170:3000";

const API_ROUTES = {
  //----------------------------- GET -----------------------------//
  //USER
  LOGIN: `${BASE_URL}/users/login`,

  //RECIPES
  RECIPES: `${BASE_URL}/recipes`, //TODAS LAS RECETAS
  RECIPE_BY_ID: `${BASE_URL}/recipes/:id`, //RECETA POR ID
  RECIPES_BY_USER: `${BASE_URL}/recipes/user/:id`, //RECETAS DEL USUARIO

  //GROUPS
  USERGROUPS: `${BASE_URL}/groups`, //GRUPOS DEL USUARIO
  GROUP_BY_ID: `${BASE_URL}/groups/:id/recipes`, //GRUPO POR ID

  //----------------------------- POST -----------------------------//

  // Agrega más rutas según sea necesario
};

export { BASE_URL, API_ROUTES };
