import React from "react";
import { useParams } from "react-router-dom";
import { CharacterDetailComponent } from "./character-detail.component";
import { CharacterDetail } from "./character-detail.vm";

export const CharacterDetailContainer: React.FC = () => {
  const { id } = useParams();
  const [selectedCharacter, setSelectedCharacter] =
    React.useState<CharacterDetail | null>(null);

  const characterMapper = (character: CharacterDetail) => {
    const { id, name, status, image, species } = character;
    return { id, name, status, image, species };
  };

  React.useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => response.json())
      .then((json) => {
        return json && setSelectedCharacter(characterMapper(json));
      });
  }, []);

  return (
    selectedCharacter && (
      <CharacterDetailComponent selectedCharacter={selectedCharacter} />
    )
  );
};
