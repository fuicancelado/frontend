import { SearchBtn } from './styles';
import { FaSearch} from 'react-icons/fa'

interface SearchButtonProps {
    openSearchModal: () => void;
}

export const SearchButton = ({ openSearchModal }: SearchButtonProps) => {
    return(
        <SearchBtn onClick={openSearchModal}>
            <FaSearch/>
            Search...
        </SearchBtn>
    )
}