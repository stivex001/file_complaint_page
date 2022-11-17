import styled from "styled-components";

const TopicWrapper = styled.section`
  margin: 146px 114px auto;

//   .container {
//     display: flex;
//     flex-direction: column;
//     justify-content: center
//     align-items: center
//     margin: 0 auto;
//   }

  .container h1 {
    font-weight: 400;
    font-size: 3.125rem;
    line-height: 3.8rem;
    text-align: center;
    color: #0062ff;
  }

  .container p {
    font-style: normal;
    font-weight: 400;
    font-size: 1.56rem;
    line-height: 1.875rem;
    text-align: center;
    max-width: 45rem;
    color: #000000;
    margin: 0 auto;
  }

  @media screen and (max-width: 600px) {
    .container h1 {
        font-size: 1.3rem;
        line-height: 1.68rem;
        text-align: center;
      }
      .container p {
        font-size: 1rem;
        line-height: 1.1rem;
        text-align: center;
        max-width: 15rem;
        // margin: 0 auto;
      }
    
  }
`;

export default TopicWrapper;


