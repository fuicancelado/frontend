import { Container } from "./styles";
import { FaSearch } from 'react-icons/fa'

interface InputProps {
    type: string,
    onChange?: any,
    value: any,
    onKeyPress: any,
}

export function SearchInput({ type, value, onChange, onKeyPress}: InputProps) {
    
    return(
        <Container>
            <FaSearch/>
            <input 
                type={type}
                value={value} 
                onChange={e => onChange(e.target.value)} 
                onKeyPress={e => onKeyPress(e)}
                placeholder="Search..."
            />
        </Container>
    )
}