import { useContext } from "react";
import { GetTogetherContext } from '../../providers/Get-together'
import { GraduationContext } from '../../providers/Graduation'
import { MarriageContext } from '../../providers/Marriage'
import { MenuContext } from '../../providers/Menu'
import { Btn } from "./styles";

const Button = ({ type, drink, local }) => {

    const { addGetTogether, removeGetTogether } = useContext(GetTogetherContext);
    const { addGraduation, removeGraduation } = useContext(GraduationContext);
    const { addMarriage, removeMarriege } = useContext(MarriageContext)
    const { addMenu, removeMenu } = useContext(MenuContext)
    const text = local === 'menu' ? "Adicionar ao Carrinho" : "Remover do carrinho"

    const handleClick = () => {
        switch (local) {
            case 'menu':
                if (type === 'Confraternização') {
                    addGetTogether(drink)
                    removeMenu(drink)
                } else if (type === 'Formatura') {
                    addGraduation(drink)
                    removeMenu(drink)
                } else {
                    addMarriage(drink)
                    removeMenu(drink)
                }
                break;
            case 'gettogether':
                removeGetTogether(drink)
                addMenu(drink)
                break;
            case 'graduation':
                removeGraduation(drink)
                addMenu(drink)
                break;
            case 'marriage':
                removeMarriege(drink)
                addMenu(drink)
                break;
            default:
                break;
        }
    }
    return (<Btn onClick={() => handleClick()}>{text}</Btn>)
}

export default Button;