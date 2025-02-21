import React, { createContext, useContext, useState, ReactNode } from "react";

interface Recipe {
  id: number;
  imageUrl: string | null;
  title: string;
  description: string;
  prepTime: number;
  ingredients: string;
}

interface RecipeContextProps {
  recipes: Recipe[];
  activeRecipe: Recipe | null;
  setActiveRecipe: (recipe: Recipe) => void;
  addRecipe: (recipe: Recipe) => void;
  getRecipeById: (id: number) => Recipe | undefined;
}

const RecipeContext = createContext<RecipeContextProps | undefined>(undefined);

export const RecipeProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [activeRecipe, setActiveRecipeState] = useState<Recipe | null>(null);

  const addRecipe = (recipe: Recipe) => {
    setRecipes((prevRecipes) => [...prevRecipes, recipe]);
  };

  const getRecipeById = (id: number) => {
    return recipes.find((recipe) => recipe.id === id);
  };

  const setActiveRecipe = (recipe: Recipe) => {
    setActiveRecipeState(recipe);
  };

  return (
    <RecipeContext.Provider
      value={{
        recipes,
        activeRecipe,
        setActiveRecipe,
        addRecipe,
        getRecipeById,
      }}
    >
      {children}
    </RecipeContext.Provider>
  );
};

export const useRecipe = (): RecipeContextProps => {
  const context = useContext(RecipeContext);
  if (!context) {
    throw new Error("useRecipe must be used within a RecipeProvider");
  }
  return context;
};

export default RecipeProvider;
