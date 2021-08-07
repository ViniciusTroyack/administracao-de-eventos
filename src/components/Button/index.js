import { useContext } from "react";
import { GetTogetherContext } from '../../providers/Get-together'
import { GraduationContext } from '../../providers/Graduation'
import { MarriageContext } from '../../providers/Marriage'

const Button = ({ type = 'add', drink }) => {

    const { addGetTogether, removeGetTogether } = useContext(GetTogetherContext);
    const { addGraduation, removeGraduation } = useContext(GraduationContext);
    const { addMarriage, removeMarriege } = useContext(MarriageContext)


    const handleClick = () => {
        if (type === "Casamento") {
            addMarriage(drink)
        } else if (type === "Confraternização") {
            addGetTogether(drink)
        } else if (type === "Formatura") {
            addGraduation(drink)
        }
    }


    return (<button onClick={handleClick}>Add</button>)
}

export default Button;