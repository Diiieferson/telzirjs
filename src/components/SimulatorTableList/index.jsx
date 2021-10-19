import * as C from './styles'
import { SimulatorTableListItem } from '../SimulatorTableListItem'
import React from 'react'

// COMPONENTE PARA GUARDAR EM "HTML" A TABELA DE RESULTADO QUE SERÁ APRESENTADA PARA O USUÁRIO
export const SimmulatorTableList = (props) => {

    return (
        <>
            <C.Container>
                <C.Table>
                    <thead>
                        <tr>
                            <C.TableHeadColumn>Origem</C.TableHeadColumn>
                            <C.TableHeadColumn>Destino</C.TableHeadColumn>
                            <C.TableHeadColumn>Minutos</C.TableHeadColumn>
                            <C.TableHeadColumn>Plano</C.TableHeadColumn>
                            <C.TableHeadColumn>Com Plano</C.TableHeadColumn>
                            <C.TableHeadColumn>Sem Plano</C.TableHeadColumn>
                        </tr>
                    </thead>
                    <tbody>
                        {props.list.map((item, index) => (
                            <SimulatorTableListItem
                                key={index}
                                from={item.from}
                                destiny={item.destiny}
                                minutes={item.minutes}
                                plan={item.plan}
                                withTalkMore={item.withTalkMore}
                                withoutTalkMore={item.withoutTalkMore}>

                            </SimulatorTableListItem>
                        ))}
                    </tbody>
                </C.Table>
            </C.Container>
        </>

    )

}