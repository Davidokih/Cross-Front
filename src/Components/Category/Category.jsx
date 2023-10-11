import React from "react";
import styled from "styled-components";
import {NavLink} from "react-router-dom"

const Category = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <Head>Buying & Selling made easy <div>accross Africa!</div></Head>
          <Holder>
            {/* <Card>
              <Imaged>
                <TextHold>
                  <Title>Electronics.</Title>
                  <Content>
                    Buying made easy, get TV, home theatre, system and
                    electronics at the comfort of your home.
                  </Content>
                  <NavLink to="/electronics" style={{textDecoration: "none", color: "white"}}><Button>Buy Now</Button></NavLink>
                </TextHold>
              </Imaged>
            </Card> */}
            <Card>
              {/* <img src="/Frame 2.png" /> */}

              <Images>
                <TextHold>
                  <Title>Mobile Phones.</Title>
                  <Content>
                    Buying made easy, get used phones, laptops, chargers etc..
                    at the comfort of your home
                  </Content>
                  <NavLink to="/phone" style={{textDecoration: "none", color: "white"}}><Button>Buy Now</Button></NavLink>
                </TextHold>
              </Images>
            </Card>
            {/* <Card>
              <Imagee>
                <TextHold>
                  <Title>Clothing & Fashion.</Title>
                  <Content>
                    Buying made easy, get Trendy and classic wears at the
                    comfort of your home.
                  </Content>
                  <NavLink to="/clothing" style={{textDecoration: "none", color: "white"}}><Button>Buy Now</Button></NavLink>
                </TextHold>
              </Imagee>
            </Card> */}
            <Card>
              <Image>
                <TextHold>
                  <Title>Food & Groceries.</Title>
                  <Content>
                    Buying made easy, food and groceries are all available, get
                    them all at the comfort of your home.
                  </Content>
                  <NavLink to="/food" style={{textDecoration: "none", color: "white"}}><Button>Buy Now</Button></NavLink>
                </TextHold>
              </Image>
            </Card>
          </Holder>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Category;

const Button = styled.button`
  margin-bottom: 20px;
  border: 0px;
  outline: none;
  background: #ee65cc;
  padding: 10px 30px;
  color: white;
  font-weight: 600;
  cursor: pointer;
`;
const Image = styled.div`
  width: 100%;
  height: 100%;
  color: white;
  padding: 0px 18px;
  margin: 0 -17px;
  display: flex;
  align-items: flex-end;
  background-image: linear-gradient(
      to bottom,
      rgba(61, 61, 62, 0.52),
      rgba(2, 2, 2, 0.73)
    ),
    url("/Frame 115.png");
  background-repeat: no-repeat;
  background-size: cover;
`;
const Images = styled.div`
  width: 100%;
  height: 100%;
  color: white;
  padding: 0px 18px;
  margin: 0 -17px;
  display: flex;
  align-items: flex-end;
  background-image: linear-gradient(
      to bottom,
      rgba(61, 61, 62, 0.52),
      rgba(2, 2, 2, 0.73)
    ),
    url("/Frame 113.png");
  background-repeat: no-repeat;
  background-size: cover;
`;
const Content = styled.div`
  font-size: 20px;
  font-weight: 400;
  margin-bottom: 20px;
`;

const Title = styled.div`
  font-size: 35px;
  font-weight: 400;
  margin-bottom: 20px;
`;
const TextHold = styled.div`
  /* background-color: gold; */
  margin-bottom: 20px;
  height: 227px;
  width: 400px;
`;
const Card = styled.div`
  width: 550px;
  height: 650px;
  color: white;
  padding: 0px 18px;
  margin: 10px 0px;

  display: flex;
  align-items: flex-end;
  img {
    width: 100%;
    object-fit: cover;
    height: 100%;
    border-radius: 5px;
  }
  @media (max-width: 1300px){
    width: 500px;
  }
  @media (max-width: 1190px){
    width: 450px;
  }
  @media (max-width: 1080px){
    width: 400px;
  }
  @media (max-width: 980px){
    margin: 10px;
    width: 100%;
  }
`;
const Holder = styled.div`
  width: 100%;
  /* background-color: gold; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  @media (max-width: 980px){
    justify-content: center;
  }
`;
const Head = styled.div`
  /* background-color: gold; */
  width: 100%;
  font-size: 20px;
  font-weight: 700;
  margin-top: 30px;
  margin-bottom: 20px;
  /* width: 300px; */
  /* color: ; */
`;
const Wrapper = styled.div`
  width: 90%;
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  
`;
const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 35px;
`;
