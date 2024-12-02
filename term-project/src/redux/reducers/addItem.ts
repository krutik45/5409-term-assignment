interface CartItem {
  id: number;
  [key: string]: any;
}

interface Action {
  type: string;
  payload?: CartItem;
}

const addItem: CartItem[] = [];

const addItems = (state: CartItem[] = addItem, action: Action): CartItem[] => {
  switch (action.type) {
    case "ADDITEM":
      return [...state, action.payload as CartItem];

    case "DELITEM":
      return state.filter((item) => item.id !== action.payload?.id);

    case "CLEAR_CART":
      return [];

    default:
      return state;
  }
};

export default addItems;
