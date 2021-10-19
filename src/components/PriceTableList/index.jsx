/* COMPONENTE PARA GUARDAR A TABELA INTEIRA (FAZENDO UM MAP NOS DADOS) EM UM "HTML" */
import * as C from './styles'
import { PriceTableListItem } from '../PriceTableListItem'

// COMPONENTE PARA GUARDAR EM UM "HTML" A TABELA DE PREÇO
export const PriceTableList = (props) => {

    return (
        <C.Table>
            <thead>
                <tr>
                    <C.TableHeadColumn>Origem</C.TableHeadColumn>
                    <C.TableHeadColumn>Destino</C.TableHeadColumn>
                    <C.TableHeadColumn>Preço</C.TableHeadColumn>
                </tr>
            </thead>

            <tbody>
                {props.list.map((item, index) => (

                    <PriceTableListItem
                        key={index}
                        from={item.from}
                        destiny={item.destiny}
                        price={item.price}>

                    </PriceTableListItem>

                )
                )}
            </tbody>

        </C.Table>
    )
}