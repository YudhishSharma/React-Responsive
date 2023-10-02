import styled from "styled-components"

const Rules = () => {
  return (
    <RulesContainer>
        <h2>How to play dice game</h2>
        <div className="text">
            <p>Select any number.</p>
            <p>Click on dice image.</p>
            <p>After clicking on the dice if the selected number is equal to the dice number you will get same point as dice else 2 points will be dedcuted.  </p>
        </div>
    </RulesContainer>
  )
}

export default Rules

const RulesContainer = styled.div`
    max-width: 800px;
    margin: 0 auto;
    margin-top: 40px;
    margin-bottom: 40px;
    border-radius: 10px;
    background-color: #FBF1F1;
    padding: 20px;
    h2 {
        font-size: 24px;
    }
    text {
        margin-top: 24px;
    }
`