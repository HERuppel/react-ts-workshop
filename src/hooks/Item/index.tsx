import React, { createContext, useCallback, useContext, useState } from 'react';
import { Item } from '../../@types/Item';

interface ItemContextData {
  items: Item[];
  addItem: (newItem: Item) => void;
  updateItem: (updatedItem: Item) => void;
  removeItem: (removedItem: Item) => void;
}

const ItemContext = createContext<ItemContextData>({} as ItemContextData);

export const ItemProvider: React.FC = ({ children }) => {
  const [items, setItems] = useState<Item[]>(() => {
    const storageItems = localStorage.getItem('@krud:items');

    if (storageItems) {
      return { ...JSON.parse(storageItems) };
    }
    return {} as Item[];
  });

  const addItem = useCallback((newItem: Item) => {
    setItems(prev => [...prev, newItem]);
  }, []);

  const updateItem = useCallback((updatedItem: Item) => {
    setItems(prev => {
      const newItems = prev.map(item => (item.name === updatedItem.name ? updatedItem : item));
      return newItems;
    });
  }, []);

  const removeItem = useCallback((removedItem: Item) => {
    setItems(prev => {
      const newItems = prev.filter(item => item.name !== removedItem.name);
      return newItems;
    });
  }, []);

  return (
    <ItemContext.Provider
      value={{
        items,
        addItem,
        updateItem,
        removeItem,
      }}
    >
      {children}
    </ItemContext.Provider>
  );
};

export const useItem = (): ItemContextData => {
  const context = useContext(ItemContext);

  if (!context) {
    throw new Error('');
  }

  return context;
};
