//importações:

import { useState } from "react";
import { Contact } from "./types/Contact";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";

//Função App:
function App(){
    const [contacts, setContacts ] = useState<Contact[]>([
        {
            id: '1',
            name: 'João Silva',
            email: 'joao@gmail.com',
            phone: '(11) 99999-9999',
            status: 'active'
        }
    ]);


return(
    <div>
        <ContactForm />
        <ContactList />
    </div>
)
}
export default App