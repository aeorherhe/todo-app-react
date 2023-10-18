import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { toggleDarkMode } from "../../features/themesSlice";

const Header = () => {
  const { darkMode } = useSelector((store) => store.themes);
  const dispatch = useDispatch();

  return (
    <StyledHeader>
      <h1>todo</h1>
      <div
        className="themes"
        onClick={() => {
          document.documentElement.classList.toggle("dark-mode");
          dispatch(toggleDarkMode());
        }}
      >
        {darkMode ? (
          <img src="/images/icon-moon.svg" alt="" />
        ) : (
          <img src="/images/icon-sun.svg" alt="" />
        )}
      </div>
      <div className="hero"></div>
    </StyledHeader>
  );
};
export default Header;

/****************** styled component ***************/
/****************** styled component ***************/

const StyledHeader = styled.header`
  margin: 5rem auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-transform: uppercase;
  letter-spacing: 1rem;
  padding: 0rem 2rem;
  color: var(--White);

  .themes {
    cursor: pointer;
  }

  .hero {
    position: absolute;
    width: 100%;
    height: 40vh;
    background-image: url("/images/bg-desktop-light.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    z-index: -1;
    inset: 0;
  }
`;
