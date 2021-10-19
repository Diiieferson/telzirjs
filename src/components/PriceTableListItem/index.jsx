// import { items } from '../../data/prices'
import * as C from './styles'


/* COMPONENTE QUE APENAS GUARDA OS ITENS DA TABELA EM UM "HTML" */
export const PriceTableListItem = (Props) => {

    return (
        <C.TableLine>
            <C.TableColumn>{Props.from}</C.TableColumn>
            <C.TableColumn>{Props.destiny}</C.TableColumn>
            <C.TableColumn>{Props.price}</C.TableColumn>
        </C.TableLine>
    )
}