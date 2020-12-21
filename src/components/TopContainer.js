import styled from "styled-components";

export default styled.div`
    display: flex;
    /* flex-wrap: wrap; */
    flex-direction: row;
    padding: 10px;
    align-items: center;
    @media (max-width: 768px) {
    flex-direction: column;
  }
`;