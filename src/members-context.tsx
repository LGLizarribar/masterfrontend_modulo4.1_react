import React from "react";
import { MemberEntity } from "./models";

interface IMembersContext {
  members: MemberEntity[];
  organization: string;
  setOrganization: (value: string) => void;
  fetchMembers: () => void;
  handlePreviousPage: () => void;
  handleNextPage: () => void;
  currentPage: number;
  totalPages: number;
}

export const MembersContext = React.createContext<IMembersContext>({
  members: [],
  organization: "",
  setOrganization: undefined,
  fetchMembers: undefined,
  handlePreviousPage: undefined,
  handleNextPage: undefined,
  currentPage: 0,
  totalPages: 0,
});

const itemsPerPage = 10;

export const MembersContextProvider = (props) => {
  const [members, setMembers] = React.useState<MemberEntity[]>([]);
  const [organization, setOrganization] = React.useState<string>("lemoncode");
  const [currentPage, setCurrentPage] = React.useState<number>(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentMembers = members?.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(members.length / itemsPerPage);

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const fetchMembers = () => {
    return fetch(`https://api.github.com/orgs/${organization}/members`)
      .then((response) => response?.json())
      .then((json) => json.length && setMembers(json));
  };

  React.useEffect(() => {
    fetchMembers();
  }, []);

  return (
    <MembersContext.Provider
      value={{
        members: currentMembers,
        organization,
        setOrganization,
        fetchMembers,
        handlePreviousPage,
        handleNextPage,
        currentPage,
        totalPages,
      }}
    >
      {props.children}
    </MembersContext.Provider>
  );
};
