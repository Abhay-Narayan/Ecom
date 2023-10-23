import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: #CE8D66;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;
//#C3BF6D-Citron
//#D9594C-Pinkish
//#E55934-orange and Pinkish
//#B7B868-dark citron
const Announcement = () => {
  return <Container>Super Deal! Free Shipping on Orders Over $50</Container>;
};

export default Announcement;