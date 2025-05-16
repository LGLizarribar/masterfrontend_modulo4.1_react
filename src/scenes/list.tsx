import { Button, Input, TextField } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { MembersContext } from "../context/members-context";
import { PaginationButtons } from "../components/pagination-buttons";

export const ListPage: React.FC = () => {
  const { members, organization, setOrganization, fetchMembers } =
    React.useContext(MembersContext);

  const handleFilter = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetchMembers();
  };

  return (
    <>
      <h2>Hello from List page</h2>
      <Link to="/rick-and-morty">Navigate to Rick and Morty page</Link>
      <form onSubmit={handleFilter} className={"filter-input"}>
        <label>Organization: </label>
        <TextField
          size="small"
          value={organization}
          onChange={(e) => setOrganization(e.target.value)}
        />
        <Button type="submit">Filter</Button>
      </form>
      <div className="list-user-list-container">
        <span className="list-header">Avatar</span>
        <span className="list-header">Id</span>
        <span className="list-header">Name</span>
        {members?.map((member) => (
          <>
            <img src={member.avatar_url} />
            <span>{member.id}</span>
            <Link to={`/detail/${member.login}`}>{member.login}</Link>
          </>
        ))}
      </div>
      <PaginationButtons />
      <Link to="/detail">Navigate to detail page</Link>
    </>
  );
};
