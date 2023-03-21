import react, { useState, useEffect } from "react";
import { ImgWrapper, 
         HealthPoint, 
         OuterWrapper,
         HealthWrapper,
         NameWrapper,
         DamagePoint,
         ArmorPoint,
         MagicPoint, 
         DefenseWrapper,
         ArmorWrapper,
         MagicWrapper,
         AddButton,
         ButtonWrapper, 
         ContentWrapper,
         Separator,
         Icon } from "./CardsStyled";
import Atk from '../../images/sword.png';
import HeartPoint from '../../images/heart.png';
import Def from '../../images/shield.png';

const Card = (props) => {

    const [totalHp, setTotalHp] = useState();

    useEffect(() => {
        setTotalHp(props.health + props.armor + props.magic)
    },[])

    const calcHealth = (hp) => {
        let health = []
        for(let i=0; i < hp; i++){
            health.push(<HealthPoint/>);
        }
        return health;
    }

    const calcArmor = (ar) => {
        let armor = []
        for(let i=0; i < ar; i++){
            armor.push(<ArmorPoint/>);
        }
        return armor;
    }

    const calcMagic = (mag) => {
        let magic = []
        for(let i=0; i < mag; i++){
            magic.push(<MagicPoint/>);
        }
        return magic;
    }
    
    return (        
        <OuterWrapper>
        {(props.new) ? 
            <ButtonWrapper>
                <AddButton onClick={()=>props.onClick}>
                    +
                </AddButton>
            </ButtonWrapper>
            :
            <>
            <ImgWrapper />
            <NameWrapper>
                {props.name}
            </NameWrapper>
            <Separator>
                <Icon icon={HeartPoint} />
                <HealthWrapper>
                    {calcHealth(props.health)}
                </HealthWrapper>
            </Separator>
            <Separator>
                <Icon icon={Def} />
                <DefenseWrapper>                
                    <ArmorWrapper>
                        {calcArmor(props.armor)}
                    </ArmorWrapper>
                    <MagicWrapper>
                        {calcMagic(props.magic)}
                    </MagicWrapper>
                </DefenseWrapper>
            </Separator>
            </>
        }          
        </OuterWrapper>
    )
}

export default Card;