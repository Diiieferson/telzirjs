import * as C from './styles'
import React from 'react'

// COMPONENTE PARA GUARDAR EM UM "HTML" CADA ITEM QUE SERÁ RENDERIZADO NA TABELA
export const SimulatorTableListItem = (props) => {

    return (
        <React.Fragment>
            <C.TableLine>
                <C.TableItem>{props.from}</C.TableItem>
                <C.TableItem>{props.destiny}</C.TableItem>
                <C.TableItem>{props.minutes}</C.TableItem>
                <C.TableItem>{props.plan}</C.TableItem>
                <C.TableItem>{props.withTalkMore}</C.TableItem>
                <C.TableItem>{props.withoutTalkMore}</C.TableItem>
            </C.TableLine>
        </React.Fragment>
    )
}