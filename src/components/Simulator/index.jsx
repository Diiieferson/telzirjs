import * as C from './styles'
import { HomePage } from '../Home'
import { useState } from 'react'
import React from 'react'
import { SimulatorTableForm } from '../SimulatorTableForm'
import { SimmulatorTableList } from '../SimulatorTableList'
//import { Data } from '../../data/DataSimulator'

//COMPONENTE PARA RENDERIZAR HOME PAGE, INPUT DO USUÁRIO E A TABELA DE APRESENTAÇÃO DE CÁLCULO
export const Simulator = (Props) => {
    const [list, setList] = useState([])

    return (
        <>
            <HomePage></HomePage>
            <C.Container>

                <SimulatorTableForm list={list} setList={setList}></SimulatorTableForm>
                <SimmulatorTableList list={list}></SimmulatorTableList>

            </C.Container>
        </>
    )
}