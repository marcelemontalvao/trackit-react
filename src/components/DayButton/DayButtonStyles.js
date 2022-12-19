import styled from "styled-components";

export const ButtonStyle = styled.button`
    width: 30px;
    height: 30px;
    background-color: ${props => props.isSelected ? "#CFCFCF" : "#FFFFFF"};
    border: 1px solid #D4D4D4;
    border-radius: 5px;
    font-size: 20px;
    line-height: 25px;
    color: ${props => props.isSelected ? "#FFFFFF" : "#CFCFCF"};
    margin-right: 4px;
    cursor: pointer;
`