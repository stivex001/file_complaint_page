import styled from "styled-components";

const CardWrapper = styled.section`
  margin-top: 70px;
  margin-left: 30px;

  .card-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 35px;
  }

  .card-container {
    background: grey;
    border-radius: 12px;
    cursor: pointer;
  }

  .wrapper {
    padding: 48px 32px;
    text-align: center;
  }

  .wrapper h1 {
    font-weight: 400;
    font-size: 2rem;
    line-height: 2.43rem;
    text-align: center;
    color: #0062ff;
  }

  .wrapper p {
    font-weight: 400;
    font-size: 1.37rem;
    line-height: 1.68rem;
    text-align: center;
    color: #000000;
  }

  @media (max-width: 600px) {
    margin-top: 58px;
    margin-right: auto;
    // margin-left: auto;
    .card-wrapper {
      grid-template-columns: auto;
    }

    .card-container {
      border-radius: 8px;
      width: 257px;
    }
    .wrapper {
      padding: 24px 16px;
      text-align: center;
    }

    .wrapper h1 {
      font-size: 1.5rem;
      line-height: 1.8rem;
      text-align: center;
    }

    .wrapper p {
      font-size: 1rem;
      line-height: 1.1rem;
      text-align: center;
    }

    @media (max-width: 1000px){
        .card-wrapper {
            grid-template-columns: auto;
          }
    }

  }
`;

export default CardWrapper;
