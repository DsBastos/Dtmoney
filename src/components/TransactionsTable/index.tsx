<<<<<<< HEAD
import { useEffect } from "react";
import { api } from "../../services/api"
import { Container } from "./styles";

export function TransactionsTable() {

    useEffect(() => {
        api.get('transactions')
            .then(data => console.log(data))
    }, []);

=======
import { Container } from "./styles";

export function TransactionsTable() {
>>>>>>> 7e74b6b5ac63eaa83313ae412decc6f5fc68f177
    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Desenvolvimento de website</td>
                        <td className="deposit">R$12.800</td>
                        <td>Desenvolvimento</td>
                        <td>20/02/2021</td>
                    </tr>
                    <tr>
                        <td>Aluguel</td>
                        <td className="withdraw">- R$1.100</td>
                        <td>Casa</td>
                        <td>17/02/2021</td>
                    </tr>
                </tbody>
            </table>
        </Container>

    );
}