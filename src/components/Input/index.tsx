import { Container } from "./styles";

interface InputProps {
    label?: string,
    type: string,
    onChange?: any,
    value: any
}

export function Input({ label, type, value, onChange}: InputProps) {
    
    return(
        <Container>
            {label &&
                <span>{label}</span>}
            <input type={type} value={value} onChange={e => onChange(e.target.value)}/>
        </Container>
    )
}