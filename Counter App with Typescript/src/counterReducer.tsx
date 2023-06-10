export type ACTIONTYPE = { 
  type: "increment" | "decrement" | "count" | "reset",
  payload?: number 
}
export interface stateReducer {
  count: number,
  amount: number
}

export const initialCounter: stateReducer = { count: 0, amount: 1 };

export default function counterReducer(stateCounter: stateReducer, action: ACTIONTYPE): stateReducer {
  switch (action.type) {
    case "increment": {
      return { ...stateCounter, amount: stateCounter.amount + action.payload! };
    }
    case "decrement": {
      return { ...stateCounter, amount: stateCounter.amount + action.payload! };
    }
    case "count": {
      return { ...stateCounter, count: stateCounter.count + action.payload! };
    }
    case "reset": {
      return { ...stateCounter, count: 0, amount: 1};
    }
    default: {
      throw new Error(`Unknow action: ${action.type}`);
    }
  }
}
