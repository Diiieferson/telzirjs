
/* COMPONENTE PARA CRIAR O FORM PARA INCLUSÃO DE NOVOS ITENS */
/* JUNTO COM UMA FUNÇÃO DE CLICK PARA GUARDAR AS INFORMAÇÕES DIGITADAS PELO USUÁRIO EM UM ITEM */
import * as C from './styles'
import { useState } from 'react'

export const PriceTableForm = (props) => {
    const [inputFrom, setInputFrom] = useState('');
    const [inputDestiny, setInputDestiny] = useState('');
    const [inputPrice, setInputPrice] = useState(0);

    const handleAddItem = () => {
        const item = {
            from: inputFrom,
            destiny: inputDestiny,
            price: inputPrice
        };
        props.onAdd(item);
    }

    return (
        <>
            <C.Container>
                <input
                    className="from"
                    type="text"
                    placeholder="Adicionar origem"
                    value={inputFrom}
                    onChange={e => setInputFrom(e.target.value)}
                />
                <input
                    className="destiny"
                    type="text"
                    placeholder="Adicionar destino"
                    value={inputDestiny}
                    onChange={e => setInputDestiny(e.target.value)}
                />
                <input
                    className="price"
                    type="number"
                    placeholder="Adicionar Preço"
                    value={inputPrice}
                    onChange={e => setInputPrice(e.target.value)}
                />
                <div onClick={handleAddItem} className="image" >Incluir</div>

            </C.Container>
        </>

    )

}