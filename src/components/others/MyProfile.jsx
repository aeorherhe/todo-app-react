import styled, { css } from "styled-components";
import { Links } from "./Links";
import { MyProfileData } from "./MyProfileData";
import { useSelector } from "react-redux";

export const MyProfile = () => {
  const { darkMode } = useSelector((store) => store.themes);

  return (
    <StyledMyProfile type={darkMode.toString()}>
      Challenge by :
      <Links
        address="https://frontendmentor.io?ref=challenge"
        text="Frontend Mentor"
      />
      Coded by :
      <Links address="https://aeorherhe.netlify.app" text="Abraham Orherhe" />
      <div className="my-profile-icons">
        {MyProfileData.map(({ icon, id, href }) => (
          <Links key={id} address={href} text={icon} />
        ))}
      </div>
    </StyledMyProfile>
  );
};

/********************* styled component *************************/
/********************* styled component *************************/

const StyledMyProfile = styled.section`
  align-self: self-end;
  align-items: center;
  color: var(--White);
  display: flex;
  font-size: 1rem;
  gap: 1.5rem;
  justify-content: center;
  padding: 0.75rem;
  text-align: center;
  width: 100%;
  background-color: var(--Very-Dark-Grayish-Blue);

  ${(props) =>
    props.type === "true" &&
    css`
      background-color: var(--background);
    `}

  > a {
    white-space: normal;
    cursor: pointer;
    color: var(--Bright-Blue);
    text-decoration: none;
  }

  .my-profile-icons a {
    cursor: pointer;
    color: var(--White);
    display: inline-block;
    margin: 0 5px;
  }

  @media screen and (max-width: 45rem) {
    font-size: 1rem;
    margin-top: 2rem;

    .my-profile-icons a:first-of-type,
    .my-profile-icons a:last-of-type {
      display: none;
    }
  }
`;
