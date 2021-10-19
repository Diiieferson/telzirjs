/*import * as C from './styles'
import { useState } from 'react'
//import { Data } from '../../data/DataSimulator'
import React from 'react'
import { DataTableTalkMore } from '../../data/DataTableTalkMore'
import { items } from '../../data/prices'

export const SimulatorTableForm = (props) => {

    const [fromInput, setFromInput] = useState('')
    const [destinyInput, setDestinyInput] = useState('')
    const [minutesInput, setMinutesInput] = useState(0)
    const [planSelect, setPlanSelect] = useState('')

    const handleSimulator = () => {
        const data = {
            from: fromInput,
            destiny: destinyInput,
            minutes: minutesInput,
            plan: planSelect,
            withTalkMore: 0,
            withoutTalkMore: 0
        }
        props.setList([...props.list, data]);

        const timeoutPlan = (plan, minutes) => {
            const tablePrices = items

            let timePlan = tablePrices.find(timeoutPlan => (tablePrices.from === data.from && tablePrices.destiny === data.destiny));

            console.log(timePlan)
            console.log(timeoutPlan(data.plan, data.minutes))

        }

        const calculate = async (remainingCharge, plan, from, destiny) => {
        };

        // price = price * remainingCharge;

        const getCharge = async (minutes, plan, from, destiny) => {
            if (minutes > DataTableTalkMore.plan.timeout) {
                const remainingCharge = minutes - DataTableTalkMore.plan.timeout;
                return await calculate(remainingCharge, DataTableTalkMore.plan.timeout, from, destiny)
            }
            else {
                return 0
            };

        };

        getCharge(data.minutes, data.plan, data.from, data.destiny);


    };
    return (
        <>

            <C.Container>

                <input
                    className="fromInput"
                    value={fromInput}
                    type="text"
                    placeholder="origem"
                    onChange={e => setFromInput(e.target.value)}

                />
                <input
                    className="destinyInput"
                    value={destinyInput}
                    type="text"
                    placeholder="destino"
                    onChange={e => setDestinyInput(e.target.value)}
                />
                <input
                    className="minutesInput"
                    value={minutesInput}
                    type="number"
                    placeholder="Tempo"
                    onChange={e => setMinutesInput(parseInt(e.target.value))}
                />
                <select
                    className="planSelect"
                    value={planSelect}
                    placeholder="Preço"
                    onChange={e => setPlanSelect(e.target.value)}
                >
                    <option>Fale Mais 30</option>
                    <option>Fale Mais 60</option>
                    <option>Fale Mais 120</option>
                </select>

                <button onClick={handleSimulator} className="insert" >Simular</button>

            </C.Container>

        </>
    )

};*/

import * as C from './styles'
import { useState } from 'react'
import React from 'react'
import { items } from '../../data/prices'

// COMPONENTE PARA GUARDAR O INPUT DO USUÁRIO E CÁLCULOS RELACIONADOS A TABELA
export const SimulatorTableForm = (item) => {
    const [fromInput, setFromInput] = useState([])
    const [destinyInput, setDestinyInput] = useState([])
    const [minutesInput, setMinutesInput] = useState(0)
    const [planSelect, setPlanSelect] = useState('')

    const handleSimulator = () => {

        let price = items.find((charge) => (charge.from === fromInput && charge.destiny === destinyInput))
        console.log(price)

        let priceWithPlan = 0
        let priceWithoutPlan = 0
        switch (planSelect) {
            case 'Fale Mais 30':
                priceWithPlan = (minutesInput - 30) * price.price
                priceWithoutPlan = minutesInput * price.price
                break;
            case 'Fale Mais 60':
                priceWithPlan = (minutesInput - 60) * price.price
                priceWithoutPlan = minutesInput * price.price
                break;
            case 'Fale Mais 120':
                priceWithPlan = (minutesInput - 120) * price.price
                priceWithoutPlan = minutesInput * price.price
                break;
            default:
        }

        if (priceWithPlan <= 0) {
            priceWithPlan = 0
        }

        const inputData = {
            from: fromInput,
            destiny: destinyInput,
            minutes: minutesInput,
            plan: planSelect,
            withTalkMore: priceWithPlan.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }),
            withoutTalkMore: priceWithoutPlan.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
        }
        item.setList([...item.list, inputData])
    }
    return (
        <>
            <C.Container>
                <select
                    className="fromInput"
                    value={fromInput}
                    type="text"
                    placeholder="origem"
                    onChange={e => setFromInput(e.target.value)}>
                    <option>Origem</option>
                    {items.map((item, index) => (
                        <option>{item.from}</option>
                    ))}
                </select>

                <select
                    className="destinyInput"
                    value={destinyInput}
                    type="text"
                    placeholder="destino"
                    onChange={e => setDestinyInput(e.target.value)}>
                    <option>Destino</option>
                    {items.map((item, index) => (
                        <option>{item.destiny}</option>
                    ))}
                </select>
                <input
                    className="minutesInput"
                    value={minutesInput}
                    type="number"
                    placeholder="Tempo"
                    onChange={e => setMinutesInput(parseInt(e.target.value))}

                />
                <select
                    className="planSelect"
                    value={planSelect}
                    placeholder="Preço"
                    onChange={e => setPlanSelect(e.target.value)}>
                    <option>Selecione um plano</option>
                    <option>Fale Mais 30</option>
                    <option>Fale Mais 60</option>
                    <option>Fale Mais 120</option>
                </select>

                <button onClick={handleSimulator} className="insert" >Simular</button>

            </C.Container>

        </>);

}

