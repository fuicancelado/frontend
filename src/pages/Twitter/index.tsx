import { Container } from "./styles"
import { ToneBoard } from "./components/toneBoard"
import { SearchButton } from "../../components/SearchButton"
import { useState } from "react";
import { SearchModal } from "../../components/SearchModal";

export function Twitter () {
    const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);

    function handleToggleSearchModal() {
        setIsSearchModalOpen(!isSearchModalOpen);
    }

    return (
        <Container>
            <div>
                <input type="text"/>
                <SearchButton openSearchModal={handleToggleSearchModal}/>
            </div>
            <ToneBoard/>
            <SearchModal isOpen={isSearchModalOpen} onRequestClose={handleToggleSearchModal}/>
        </Container>
    )
}