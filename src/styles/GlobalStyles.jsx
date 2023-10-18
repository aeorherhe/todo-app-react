import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    
*,
::after,
::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  /* general variables */
  --box-shadow: 0 0 20px hsl(150, 100%, 66%);
  --transition: all 0.3s linear;
  --transition2: all 0.5s linear;
  --border-radius: 0.5rem;
  --border-radius-2: 1rem;
  --line-3: 2px solid rgb(9, 224, 88);

  /* variables for this project */
  --White: #ffffff;
  --Light-Cyan: hsl(193, 38%, 86%);
  --Neon-Green: hsl(150, 100%, 66%);
  --Grayish-Blue: hsl(217, 19%, 38%);
  --Dark-Grayish-Blue: hsl(217, 19%, 24%);
  --Dark-Blue: hsl(218, 23%, 16%);

    /* colors from the design */

--Bright-Blue: hsl(220, 98%, 61%);
--gradient-1: hsl(192, 100%, 67%);
--gradient-2: hsl(280, 87%, 65%);
--check-background: linear-gradient(var(--gradient-1), var(--gradient-2));

/* ### Light Theme */
--background: hsl(0, 0%, 98%);
--title-2: hsl(236, 33%, 92%);
--Light-Grayish-Blue: hsl(233, 11%, 84%);
--text-2: hsl(236, 9%, 61%);
--text: hsl(235, 19%, 35%);
--box-shadow-2: 0px 0px 5px var(--Light-Grayish-Blue);
  --line: 2px solid #d6d9e6;
  --line-2: 1px solid var(--text);
  --Very-Dark-Grayish-Blue: hsl(233, 14%, 35%);
}

/* ### Dark Theme */
.dark-mode {
  --background: hsl(235, 21%, 11%);
  --title-2: hsl(235, 24%, 19%);
  --text: hsl(234, 39%, 85%);
  --Light-Grayish-Blue-hover: hsl(236, 33%, 92%);
  --text-2: hsl(234, 11%, 52%);
  --Very-Dark-Grayish-Blue: hsl(233, 14%, 35%);
  --Very-Dark-Grayish-Blue: hsl(237, 14%, 26%);
  --box-shadow-2: 0px 1px 2px 0px var(--Very-Dark-Grayish-Blue);
  --line: 1.5px solid var(--Very-Dark-Grayish-Blue);
  --line-2: 1px solid var(--Very-Dark-Grayish-Blue);
}

body {
  font-family: "Ubuntu", "Open Sans", Arial, Helvetica, sans-serif;
  background-color: var(--background);
  color: var(--text);
  display: grid;
  height: 100%;
  place-items: center;
  height: 100vh;
}

 



  .btn{
    background-color: var(--Dark-Blue);
    color: var(--White);
    text-transform: capitalize;
    border: none;
    outline: none;
    font-size: 1rem;
    letter-spacing: 0.1rem;
    cursor: pointer;
    border-radius: 0.5rem;
  }

  .list-empty{
    text-align: center;
    font-size: 1.5rem;
    color: var(--text-2);
    padding: 2rem 0;
    text-transform: capitalize;
    letter-spacing: 0.1rem;
  }

`;

export default GlobalStyles;
