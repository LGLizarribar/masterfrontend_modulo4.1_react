import { Button, Card, CardActions, CardMedia } from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { RickAndMortyCharacter } from "./rick-and-morty.vm";

interface Props {
  characters: RickAndMortyCharacter[];
  filter: string;
  setFilter: (value: string) => void;
}

export const RickAndMortyComponent: React.FC<Props> = (props) => {
  const { characters, filter, setFilter } = props;
  const navigate = useNavigate();

  const handleFilter = (value: string) => {
    setFilter(value);
  };

  return (
    <>
      <Link to="/list">Back to list page</Link>
      <div className="rick-and-morty-component-filter">
        <h2>Filter by character name:</h2>
        <input value={filter} onChange={(e) => handleFilter(e.target.value)} />
      </div>
      <div className="rick-and-morty-component-list">
        {characters.map((character) => (
          <Card
            sx={{ minWidth: 250, width: 250, height: 300, margin: "5px" }}
            key={character.id}
          >
            <CardMedia
              sx={{ height: 250 }}
              image={character.image}
              title={`${character.name} image`}
            />
            <CardActions>
              <Button
                size="small"
                onClick={() => navigate(`/rick-and-morty/${character.id}`)}
              >
                {character.name}
              </Button>
            </CardActions>
          </Card>
        ))}
      </div>
    </>
  );
};
