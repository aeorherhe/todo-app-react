/* eslint-disable react/prop-types */
import { useSelector, useDispatch } from "react-redux";
import styled, { css } from "styled-components";
import { deleteTodo, toggleComplete } from "../../features/todosSlice";

const TodoItems = () => {
  const { list } = useSelector((store) => store.todos);

  return (
    <StyledTodoItems>
      {list.map((item) => {
        return <SingleItem key={item.id} {...item} />;
      })}
    </StyledTodoItems>
  );
};
export default TodoItems;

// single item
function SingleItem({ item, id, completed }) {
  const dispatch = useDispatch();

  return (
    <StyledLi
      type={completed.toString()}
      onClick={() => {
        dispatch(toggleComplete({ id, completed }));
      }}
    >
      <div className="checkbox">
        {completed && (
          <img src="/images/icon-check.svg" alt="check" className="check" />
        )}
      </div>
      <p className="item">{item}</p>
      <div className="delete" onClick={() => dispatch(deleteTodo(id))}>
        <img src="/images/icon-cross.svg" alt="" />
      </div>
    </StyledLi>
  );
}

/****************** styled component ***************/
/****************** styled component ***************/

const StyledTodoItems = styled.ul`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

const StyledLi = styled.li`
  display: grid;
  grid-template-columns: auto 4fr auto;
  align-items: center;
  gap: 1rem;
  padding: 1rem 0;
  list-style-type: none;
  cursor: pointer;
  text-transform: capitalize;
  border-bottom: var(--line);

  .checkbox {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2rem;
    width: 2rem;
    border-radius: 50%;
    outline: var(--line);

    .check {
      width: 100%;
    }
  }

  .delete {
    visibility: hidden;
    /* cursor: pointer; */
    transition: visibility 0.2s ease-in-out;
  }

  ${(props) =>
    props.type === "true" &&
    css`
      .item {
        text-decoration: line-through;
        color: var(--text-2);
      }

      .checkbox {
        background-image: var(--check-background);
      }
    `}

  &:hover {
    .delete {
      visibility: visible;
    }
  }

  @media (min-width: 45rem) {
    font-size: 1.2rem;
  }
`;
