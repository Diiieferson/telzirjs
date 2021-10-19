
import styled from "styled-components";

export const Container = styled.div `
    display: flex;
    flex-basis: auto;   
    align-items: center;
    margin: 0% 25%;

    input {
        border:1px solid #CCC;
        border-radius:15px;        
        outline:0;
        background:transparent !important;
        padding: 10px;
        margin:10px auto;
        font-style: italic;
    }
    select {
        border:1px solid #CCC;
        border-radius:15px;        
        outline:0;
        background:transparent !important;
        padding: 10px 50px;
        margin:10px 10px;
        font-style: italic;
    }
    button { 
        cursor:pointer;
        border: solid 1px #CCC;
        border-radius: 15px;
        font-size:28px;
        margin:10px auto;
        padding: 0px 5px;  
    }
`
export const Body = styled.div`
    margin: auto;
    max-width:480px;
    margin-bottom: 50px;
    display: flex;

`