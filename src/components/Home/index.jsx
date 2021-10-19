import * as C from './styles'
import { useHistory } from 'react-router-dom'

//COMPONENTE RESPONSÁVEL PARA CRIAR UM CABEÇALHO E DIRECIONAR AS ROTAS
export const HomePage = () => {
    const history = useHistory()
    function pagePrice() {
        history.push('/tabela-preco')
    }
    function pageSimulator() {
        history.push('/simulador')
    }
return (
        <C.Container>
            <C.Header>
                <C.HeaderText>Sistema simulador de chamadas</C.HeaderText>
                <C.Buttom onClick={pagePrice}>Tabela de Preço</C.Buttom>
                <C.Buttom onClick={pageSimulator}>Simulador</C.Buttom>
            </C.Header>

        </C.Container>

    )

}