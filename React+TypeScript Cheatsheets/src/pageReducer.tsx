export type ActionType = {
  type: string,
  payload: string
}
export type InitialPageType = {
  page: string,
  link_1: string,
  link_2: string,
  link_3: string,
  isDisplayed: string
}

export const initialPage: InitialPageType = {
  page: "home",
  link_1: "Basic",
  link_2: "Setup",
  link_3: "",
  isDisplayed: "Setup"
}

export function pageReducer(statePage: InitialPageType, action: ActionType): InitialPageType {
  switch (action.type) {
    case "change_page": {
      return { ...statePage, page: action.payload };
    }
    case "change_link_1": {
      return { ...statePage, link_1: action.payload };
    }
    case "change_link_2": {
      return { ...statePage, link_2: action.payload };
    }
    case "change_link_3": {
      return { ...statePage, link_3: action.payload };
    }
    case "change_isDisplayed": {
      return { ...statePage, isDisplayed: action.payload };
    }
    default: {
      throw new Error("Unknown action" + action.type);
    }
  }
}