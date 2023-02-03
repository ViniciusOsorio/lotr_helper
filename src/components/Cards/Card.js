import react from "react";
import { ImgWrapper, 
         HealthPoint, 
         OuterWrapper,
         HealthWrapper } from "./CardsStyled";

const Card = (props) => {

    const calcHealth = (hp) => {
        let health = []
        for(let i=0; i <= hp; i++){
            health.push(<HealthPoint/>);
        }
        return health;
    }

    return (
        <OuterWrapper>
            <ImgWrapper />
            <HealthWrapper>
                {calcHealth(props.health)}
            </HealthWrapper>
        </OuterWrapper>
    )
}

export default Card;