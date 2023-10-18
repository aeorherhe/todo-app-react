import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { addTodo, updateInputField } from "../../features/todosSlice";

const Search = () => {
  const { inputField } = useSelector((store) => store.todos);
  const dispatch = useDispatch();

  return (
    <StyledForm
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(addTodo(e.target[0].value));
      }}
    >
      <div className="checkbox"></div>
      <input
        type="text"
        placeholder="Create a new todo"
        value={inputField}
        onChange={(e) => dispatch(updateInputField(e.target.value))}
      />
    </StyledForm>
  );
};
export default Search;

/****************** styled component ***************/
/****************** styled component ***************/

const StyledForm = styled.form`
  margin: 2rem 0rem;
  padding: 1rem;
  border-radius: 0.5rem;
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 1rem;
  align-items: center;
  background-color: var(--background);

  input[type="text"] {
    padding: 0.25rem 0.5rem;
    font-size: 1.2rem;
    border: none;
    border-radius: 0.5rem;
    background-color: var(--background);
    color: var(--text);

    &:focus {
      outline: none;
    }
  }

  .checkbox {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2rem;
    width: 2rem;
    border-radius: 50%;
    outline: var(--line-2);

    .check {
      width: 100%;
    }
  }
`;
