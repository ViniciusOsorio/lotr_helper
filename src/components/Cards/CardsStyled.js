import styled from "styled-components";

export const OuterWrapper = styled.div`
    border: 3px solid black;
    width: 150px;
    height: 280px;
    display: flex;
    flex-wrap: wrap;
    padding: 5px;
    flex-direction: column;
    align-items: center;
    margin: 5px 2px;
    padding-top: 10px;
    background-color: white;

`

export const ImgWrapper = styled.div`
    height: 120px;
    width: 110px;
    border: 2px solid black;
`

export const HealthWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-end;
    margin-bottom: 10px;
    width: 120px;
    height: 40px;
`

export const HealthPoint = styled.div`
    margin-top: 8px;
    border: 2px solid black;
    background-color: red;
    width: 10px;
    height: 10px;
    transform: rotate(45deg);
`

export const DamagePoint = styled.div`
    margin-top: 8px;
    border: 2px solid black;
    background-color: grey;
    width: 10px;
    height: 10px;
    transform: rotate(45deg);
    
`

export const ArmorPoint = styled.div`
    margin-top: 8px;
    border: 2px solid black;
    background-color: yellow;
    width: 10px;
    height: 10px;
    transform: rotate(45deg);
`

export const MagicPoint = styled.div`
    margin-top: 8px;
    border: 2px solid black;
    background-color: blue;
    width: 10px;
    height: 10px;
    transform: rotate(45deg);
`

export const NameWrapper = styled.div`
    margin-top: 5px;
    font-size: 18px;
`

export const DefenseWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 120px;
    justify-content: flex-end;
`

export const MagicWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`

export const ArmorWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`

export const AddButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    height: 150px;
    width: 150px;
    font-size: 160px;
    &:hover{
        cursor: pointer;
    }
    /* background-color: grey; */
`

export const ButtonWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    height: 100%;
    margin-bottom: 10px;
`

export const Separator = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
`

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: row;
`
export const Icon = styled.div`
    width: 24px;
    height: 24px;
    background-image: url(${props => props.icon});
`