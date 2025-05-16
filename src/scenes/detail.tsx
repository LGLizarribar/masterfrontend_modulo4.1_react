import { Card } from "@mui/material";
import React from "react";
import { Link, useParams } from "react-router-dom";

export const DetailPage: React.FC = () => {
  const { id } = useParams();

  return (
    <>
      <h2>Hello from Detail page</h2>
      <Card sx={{ padding: "20px", backgroundColor: "beige" }}>
        User Id: {id}
      </Card>
      <Link to="/list">Back to list page</Link>
    </>
  );
};
