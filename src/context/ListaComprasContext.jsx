import { useState, useContext, createContext } from "react";

const ListaComprasContext = createContext([[], () => {}]);

export function ListaComprasProvider(props) {
  const [items, setItems] = useState([]);

  return <ListaComprasContext.Provider value={[items, setItems]} {...props} />;
}

export function useListaCompras() {
  const context = useContext(ListaComprasContext);
  if (context === undefined) {
    throw new Error(`useListaCompras must be used within a ListaComprasProvider`);
  }
  return context;
}

export function generateId() {
  return Math.random().toString(36).substr(2, 9);
}
