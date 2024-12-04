import { createContext, useState, useContext, useEffect } from 'react';

const ContactContext = createContext();

export function ContactProvider({ children }) {
  const [contactData, setContactData] = useState({
    email: '',
    nombre: '',
    apellidos: '',
    direccion: '',
    numeroExterior: '',
    ciudad: '',
    codigoPostal: '',
    municipio: '',
    region: '',
  });

  // Esto asegura que solo se intente leer el localStorage en el cliente
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedData = localStorage.getItem('contactData');
      if (storedData) {
        setContactData(JSON.parse(storedData));
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('contactData', JSON.stringify(contactData));
    }
  }, [contactData]);

  return (
    <ContactContext.Provider value={{ contactData, setContactData }}>
      {children}
    </ContactContext.Provider>
  );
}

export function useContact() {
  return useContext(ContactContext);
}
