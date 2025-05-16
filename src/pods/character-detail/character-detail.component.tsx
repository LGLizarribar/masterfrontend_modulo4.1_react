import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { CharacterDetail } from "./character-detail.vm";

interface Props {
  selectedCharacter: CharacterDetail;
}

export const CharacterDetailComponent: React.FC<Props> = (props) => {
  const { selectedCharacter } = props;

  return (
    <>
      <Link to="/rick-and-morty">Back to characters page</Link>
      <div className="rick-and-morty-component-list">
        <Card
          sx={{ minWidth: 250, width: 250, height: 400, margin: "5px" }}
          key={selectedCharacter.id}
        >
          <CardMedia
            sx={{ height: 250 }}
            image={selectedCharacter.image}
            title={`${selectedCharacter.name} image`}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {selectedCharacter.name}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              Species: {selectedCharacter.species}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              Status: {selectedCharacter.status}
            </Typography>
          </CardContent>
        </Card>
      </div>
    </>
  );
};
