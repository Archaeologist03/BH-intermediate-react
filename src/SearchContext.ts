/* tslint:disable no-empty */
import React from "react";

const SearchContext = React.createContext({
  location: "Seattle, WA",
  animal: "",
  breed: "",
  breeds: [] as string[],
  handleAnimalChange(event: React.KeyboardEvent<HTMLInputElement>) {},
  handleBreedChange(event: React.ChangeEvent<HTMLInputElement>) {},
  handleLocationChange(event: React.KeyboardEvent<HTMLInputElement>) {},
  getBreeds() {}
});

export const Provider = SearchContext.Provider;
export const Consumer = SearchContext.Consumer;
