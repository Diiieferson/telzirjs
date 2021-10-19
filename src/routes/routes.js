import { Switch, Route, BrowserRouter } from 'react-router-dom'
import { HomePage } from '../../src/components/Home'
import { PriceTable } from '../../src/components/PriceTable'
import { Simulator } from '../components/Simulator'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/tabela-preco" component={PriceTable}/>
                <Route path="/simulador" component={Simulator} />
            </Switch>
        </BrowserRouter>
    )
}