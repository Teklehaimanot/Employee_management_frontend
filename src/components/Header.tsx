import Button from "./Button"
interface Props{
    onToggle: () => void
    showAdd:boolean
}
const Header:React.FC<Props>= ({onToggle, showAdd}) => {
    return (
        <header className="header">
            <h1>EMPLOYEE LIST</h1>
            <Button color={showAdd?'red':'Green'} text={showAdd?'CANCEL':'ADD'} onToggle = {onToggle}/>
        </header>
    )
}

export default Header
