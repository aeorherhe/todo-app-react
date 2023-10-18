/* eslint-disable react/prop-types */
import styled, { css } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import {
  clearCompleted,
  showCompleted,
  showActive,
  showAll,
} from "../../features/todosSlice";

const ControlBar = () => {
  const dispatch = useDispatch();
  const { itemsLeft, active, list } = useSelector((store) => store.todos);

  if (list.length === 0) return <p className="list-empty"> list empty</p>;

  return (
    <>
      <StyledControlBar type={active}>
        <div className="status-ctn">
          <p>
            {`${itemsLeft === 0 ? "no item left" : `${itemsLeft} items left`}`}
          </p>
          <div className="desktop">
            <Buttons
              dispatch={dispatch}
              showAll={showAll}
              showActive={showActive}
              showCompleted={showCompleted}
              clearCompleted={clearCompleted}
            />
          </div>
          <button
            className="btn clear"
            onClick={() => dispatch(clearCompleted())}
          >
            clear completed
          </button>
        </div>
        <div className="mobile">
          <Buttons
            dispatch={dispatch}
            showAll={showAll}
            showActive={showActive}
            showCompleted={showCompleted}
            clearCompleted={clearCompleted}
          />
        </div>
      </StyledControlBar>
    </>
  );
};
export default ControlBar;

function Buttons({ dispatch, showAll, showActive, showCompleted }) {
  return (
    <>
      <div className="status">
        <button className="btn" onClick={() => dispatch(showAll())}>
          all
        </button>
        <button className="btn" onClick={() => dispatch(showActive())}>
          active
        </button>
        <button className="btn" onClick={() => dispatch(showCompleted())}>
          completed
        </button>
      </div>
    </>
  );
}

/****************** styled component ***************/
/****************** styled component ***************/

const StyledControlBar = styled.div`
  text-transform: capitalize;
  color: var(--text-2);

  .desktop {
    display: none;
  }

  .status-ctn {
    display: flex;
    justify-content: space-between;
    letter-spacing: 0.15rem;
    padding: 1rem 2rem;
    margin: 2rem 0;
    gap: 2rem;
    border-top: var(--line);
    border-bottom: var(--line);
  }

  .status {
    display: grid;
    grid-template-columns: repeat(3, auto);
    justify-content: center;
    gap: 1rem;
  }

  .drag-drop {
    text-align: center;
    font-size: 1rem;
    letter-spacing: 0.1rem;
    padding: 1rem 0;
    border: var(--line);
  }

  .btn {
    cursor: pointer;
    color: currentColor;
    background: none;
    border: none;
    outline: none;
    cursor: pointer;

    &:hover {
      color: var(--text);
    }
  }

  ${(props) =>
    props.type === "all" &&
    css`
      .status .btn:nth-child(1) {
        color: var(--Bright-Blue);
      }
    `}
  ${(props) =>
    props.type === "active" &&
    css`
      .status .btn:nth-child(2) {
        color: var(--Bright-Blue);
      }
    `}
  ${(props) =>
    props.type === "completed" &&
    css`
      .status .btn:nth-child(3) {
        color: var(--Bright-Blue);
      }
    `}
  ${(props) =>
    props.type === "clear" &&
    css`
      .clear {
        color: var(--Bright-Blue);
      }
    `}


  @media (min-width: 50rem) {
    .status-ctn {
      display: grid;
      grid-template-columns: auto 1fr auto;
    }

    .desktop {
      display: block;
    }

    .mobile {
      display: none;
    }
  }
`;
