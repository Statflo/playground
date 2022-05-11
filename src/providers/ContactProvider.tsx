import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import { Contact, ContactProviderState, ContactState } from "../types";
import { getStorageItem, saveStorageItem } from '../utils/storage';

const ContactContext = createContext<ContactProviderState>(null!);

export function useContacts() {
    return useContext(ContactContext);
}

export default function ContactProvider({ children }: { children: React.ReactNode }) {
    const [contacts, setContacts] = useState<ContactState>({});

    useEffect(() => {
        const contacts = getStorageItem('contact') as ContactState;
        setContacts(contacts);
    }, []);

    const updateContacts = (contact: Contact) => {
        const list = {
            ...contacts,
            [contact.id]: contact
        };
        setContacts(list);
        saveStorageItem('contact', list);
    }

    const deleteContact = (id: string) => {
        const list = { ...contacts }
        delete list[id];
        setContacts(list);
        saveStorageItem('contact', list);
    }

    const context = useMemo(() => ({
        contacts: Object.values(contacts),
        updateContacts,
        deleteContact
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }), [contacts]);

    return (
        <ContactContext.Provider value={context}>
            {children}
        </ContactContext.Provider>
    );
}