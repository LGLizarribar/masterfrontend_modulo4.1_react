import React from "react";
import { Link } from "react-router-dom";
import { MembersContext } from "./members-context";
import { PaginationButtons } from "./pagination-buttons";

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
      <form onSubmit={handleFilter} className={"filter-input"}>
        <label>Organization: </label>
        <input
          value={organization}
          onChange={(e) => setOrganization(e.target.value)}
        />
        <button type="submit">Filter</button>
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
