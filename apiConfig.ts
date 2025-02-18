const BASE_URL = "http://192.168.1.170:3000"; //Sarajevo
// const BASE_URL = "http://172.20.10.8:3000"; //Troco

const API_ROUTES = {
  //----------------------------- GET -----------------------------//

  //RECIPES
  RECIPES: `${BASE_URL}/recipes`, //TODAS LAS RECETAS
  RECIPE_BY_ID: `${BASE_URL}/recipes`, //RECETA POR ID
  RECIPES_BY_USER: `${BASE_URL}/recipes/user/2`, //RECETAS DEL USUARIO

  //GROUPS
  GROUPS_BY_USER: `${BASE_URL}/groups`, //GRUPOS DEL USUARIO
  GROUP_BY_ID: `${BASE_URL}/groups`, //GRUPO POR ID

  //----------------------------- POST -----------------------------//

  //USER
  LOGIN: `${BASE_URL}/users/login`,
  SIGNUP: `${BASE_URL}/users/signup`,
  //RECIPES
  ADD_RECIPE: `${BASE_URL}/recipes`, //AGREGAR RECETA
  //GROUPS
  ADD_GROUP: `${BASE_URL}/groups`, //GRUPOS DEL USUARIO

  //-------------------------- PUT | PATCH --------------------------//

  //USER
  UPDATE_USER: `${BASE_URL}/users`, //ACTUALIZAR USUARIO
  //RECIPES
  UPDATE_RECIPE: `${BASE_URL}/recipes/:id`, //ACTUALIZAR RECETA
  //GROUPS
  UPDATE_GROUP: `${BASE_URL}/groups/:id`, //ACTUALIZAR GRUPO

  //----------------------------- DELETE -----------------------------//

  //USER
  DELETE_USER: `${BASE_URL}/users`, //ELIMINAR USUARIO
  //RECIPES
  DELETE_RECIPE: `${BASE_URL}/recipes/:id`, //ELIMINAR RECETA
  //GROUPS
  DELETE_GROUP: `${BASE_URL}/groups/:id`, //ELIMINAR GRUPO
};

export { BASE_URL, API_ROUTES };
