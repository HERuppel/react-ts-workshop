import React from 'react';
import { ItemProvider } from './Item';

const Provider: React.FC = ({ children }) => <ItemProvider>{children}</ItemProvider>;

export default Provider;
