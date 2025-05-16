import React from "react";
import useDebounce from "../../hooks/useDebounce";
import { RickAndMortyComponent } from "./rick-and-morty.component";
import { RickAndMortyCharacter } from "./rick-and-morty.vm";

export const RickAndMortyContainer: React.FC = () => {
  const [characters, setCharacters] = React.useState<RickAndMortyCharacter[]>(
    []
  );
  const [filter, setFilter] = React.useState<string>("");
  const [debouncedFilter] = useDebounce(filter, 500);

  const charactersMapper = (characters) => {
    return characters.map(({ id, name, image }) => ({
      id,
      name,
      image,
    }));
  };

  React.useEffect(() => {
    fetch(
      filter
        ? `https://rickandmortyapi.com/api/character/?name=${filter}`
        : `https://rickandmortyapi.com/api/character`
    )
      .then((response) => response.json())
      .then(
        (json) =>
          json.results?.length && setCharacters(charactersMapper(json.results))
      );
  }, [debouncedFilter]);

  return (
    <RickAndMortyComponent
      characters={characters}
      filter={filter}
      setFilter={setFilter}
    />
  );
};
