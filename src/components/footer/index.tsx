import { Container } from "./style"
import { NewsLatter } from './NewsLetter/index';
import { InfoFooter } from "./infoFooter";
import { ListCategory } from "./ListCategory";
import { Direct } from "./direct";

export function Footer(){

    return(
        <Container>
           <NewsLatter/>
           <InfoFooter/>
           <ListCategory/>
           <Direct/>
        </Container>
    )
    
}