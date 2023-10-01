import styled from "styled-components";
const StartGame = ({toggle}) => {
  return (
    <Container>
        <div>
            <img src="/images/dices 1.png" alt="dice-image" />
        </div>
        <div className="content">
            <h1>DICE GAME</h1>
            <Button onClick={toggle}>Play Now</Button>
        </div>
    </Container>
  )
}

export default StartGame

const Container = styled.div`
    max-width: 1180px;
    display: flex;
    margin: 0 auto;
    height: 100vh;
    align-items: center;

    .content h1 {
        font-size: 96px;
        white-space: nowrap;
    }
`;

const Button = styled.button`
    padding: 10px 18px;
    min-width: 220px;
    border-radius: 5px;
    border: none;
    background: #000;
    color: white;
    font-size: 16px;
    border: 1px solid transparent;
    transition: 0.3s background ease-in;
    cursor: pointer;

    &:hover {
        background-color: white;
        border: 1px solid black;
        color: black;
        transition: 0.2s background ease-in;
    }
`;