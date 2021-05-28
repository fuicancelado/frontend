export const IsCancelado = (balance: number) => {
    return balance > 1
}

export const RenderCancelometerText = (isCancelado: boolean) => {
    if(isCancelado)
        return "CANCELADO";
    else    
        return "De Boa";
}