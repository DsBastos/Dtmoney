import logoImg from '../../assets/logo.svg'
import { Container, Content } from './styles'

<<<<<<< HEAD
interface HeaderProps {
    onOpenNewTransactionModal: () => void;
}

export function Header({ onOpenNewTransactionModal }: HeaderProps) {
=======
export function Header() {
>>>>>>> 7e74b6b5ac63eaa83313ae412decc6f5fc68f177
    return (
        <Container>
            <Content>
                <img src={logoImg} alt="dt money" />
<<<<<<< HEAD
                <button type="button" onClick={onOpenNewTransactionModal}>
                    Nova transação
                </button>


=======
                <button type="button">
                    Nova transação
            </button>
>>>>>>> 7e74b6b5ac63eaa83313ae412decc6f5fc68f177
            </Content>
        </Container>
    )
}