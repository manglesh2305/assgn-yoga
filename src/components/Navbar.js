import { Link } from "react-router-dom";
import styled from "styled-components";
export default function Navbar() {


    return (
        <Container>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='login'>Login</Link></li>
                <li><Link to='/product'>Product</Link></li>
                <li><Link to='/batch-slot'>Purchase</Link></li>
            </ul>
        </Container>
    )
}

const Container = styled.div`
ul{
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: relative;
    height: 2rem;
    width: 100vw;
    background-color: whitesmoke;
}

li{
    list-style: none;
    margin: 2re;
}
li > *{
    text-decoration: none;
    font-family: cursive;
    color: palevioletred;
}`