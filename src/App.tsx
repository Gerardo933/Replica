import React from "react";
import logo from './logo.svg';
import styled from "styled-components";
import { FaBox, FaShoppingCart, FaHome,FaCalendar,FaPlus} from 'react-icons/fa';
import './test.js';
import './App.css';

const Spanl = styled.span`
  font-size: 22px;
  white-space: nowrap;
  font-weight: bold;
`
const Span = styled.span`
  font-size: 20px;
`
const Container = styled.div`
  padding-left: 20%;
  padding-bottom: 20%;
  margin-top: 5%;
  `
  const Container2 = styled.div`
  padding-left: 20%;
  padding-bottom: 20%;
  margin-top: 5%;
  `
const Header = styled.img`
  width: 55px;
  height: 55px;
  border-radius: 50%;
  margin: 20px;
  `
const Div = styled.div`
  float: left;
  margin-top: 3%;
  margin-right:0%;
  border-top: 1px solid #c6c6c6;
  border-bottom: 1px double #b5b5b5;
`
const Li = styled.p`
  font-size: 14px;
  padding-bottom: 12px;
  color: gray;
`
const Ul = styled.ul`
  padding-left: 24px;

`
const H3 = styled.h3`
  padding-left: 12px;
`
const Lisub = styled.p`
  color: gray;
  padding-left: 34px;
  font-size: 14px;
`
const ps = styled.p`
   font-size: 14px;
`
const Banner = styled.div`
  padding-left: 24%;
  padding-bottom: 0px;
  font-size: 22px;
  text-decoration: underline;
  border-bottom: 1px solid green;
  border-color: #4d9f60;
`
const U = styled.u`
    border-color: #00721b;

`
const Caja = styled.div`
  align-items: baseline;
  margin-bottom: 3%;
    margin-left: 24%;
    margin-top: 2%;

`
const ContHover= styled.div`
  float: left;
    position:relative;
  margin-top: 3%;
  size: 20PX;
`
const ContHover2= styled.div`
    float: left;

  position:relative;
  margin-left: 2%;
  margin-top: 3%;
  size: 20PX;
`
const ContHovera= styled.div`
    position:relative;
  margin-top: 3%;
  
  size: 20PX;
`
const ContHoverb= styled.div`
   float: left;
  margin-top: -2.4%;
  margin-left: 4%;
  size: 200PX;
  color: blue;
  transition: background-color .5s;

  #a:hover {
  color: orange;
}
`
const Mas=styled.div`
margin-top: .8%;
  position: absolute;
  width: 20px;
  height: 40px;
  margin-left: 15px;
  font-size: 20px;
  font-weight: bold;
  align-items: center;
  color: gray;
  background-image: "https://es.letrag.com/caracteres/2b.png";
`

function App() {
  
  return (
    <Container>
        <Span>Configuradores</Span>
        <Spanl> ▶Ubicaciones</Spanl>
        <Banner>
          <U>Crear ubicaciones </U>     
        </Banner>
        <Div>
         
          <Span>➤Mi empresa de negocios</Span>
          <Ul>
            <Li>➤ Organizacion Nivel 2</Li>
            <Lisub> Organizacion Ni... </Lisub>
            <Li>➤ Organizacion Nivel 2</Li>
            <Li>Organizacion Nivel 2</Li>
            <Li>➤ Organizacion Nivel 2</Li>
          </Ul> 
        </Div>
        <Caja> Mi empresa de empeños / Organización nivel 2 / Organizacion nivel 1-2
        <Mas><FaPlus></FaPlus></Mas>
            <ContHover>                      
                <a href="#"><FaBox></FaBox></a>
            </ContHover>
            <ContHover2>
            <a href="#">  <FaBox></FaBox></a>
            </ContHover2>

            <ContHovera>                      
            <a href="#"> <FaBox></FaBox> </a>
            </ContHovera>

            <ContHoverb>                      
            <a href="#"> <FaBox></FaBox> </a> 
            </ContHoverb>
            
            
            
        </Caja>
    </Container>

  );
}

export default App;
