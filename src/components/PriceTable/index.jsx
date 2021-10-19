/* COMPONENTE PARA RENDERIZAR A TABELA DE PREÇO PADRÃO JÁ COM POSSÍVEIS INCLUSÕES */
import * as C from './styles';
import { PriceTableList } from '../PriceTableList'
import { items } from '../../data/prices'
import { useState } from 'react'
import { HomePage } from '../Home'
import { PriceTableForm } from '../PriceTableForm'

export const PriceTable = () => {
    const [list, setList] = useState(items);

    const handleAddItem = (item) => {
        const newList = [...list];
        newList.push(item);
        setList(newList);
    };
    return (
        <>
            <C.Container>
                <HomePage />
            </C.Container>

            <C.Body>
                <PriceTableForm onAdd={handleAddItem} ></PriceTableForm>
                <PriceTableList list={list} />
            </C.Body>
        </>
    )
}