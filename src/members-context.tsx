import React from "react";
import { MemberEntity } from "./models";

interface IMembersContext {
  members: MemberEntity[];
  organization: string;
  setOrganization: (value: string) => void;
  fetchMembers: () => void;
}

export const MembersContext = React.createContext<IMembersContext>({
  members: [],
  organization: "",
  setOrganization: undefined,
  fetchMembers: undefined,
});

export const MembersContextProvider = (props) => {
  const [members, setMembers] = React.useState<MemberEntity[]>([]);
  const [organization, setOrganization] = React.useState<string>("lemoncode");

  console.log(organization);

  const fetchMembers = () => {
    return fetch(`https://api.github.com/orgs/${organization}/members`)
      .then((response) => response.json())
      .then((json) => setMembers(json));
  };

  React.useEffect(() => {
    fetchMembers();
  }, []);

  return (
    <MembersContext.Provider
      value={{
        members,
        organization,
        setOrganization,
        fetchMembers,
      }}
    >
      {props.children}
    </MembersContext.Provider>
  );
};
