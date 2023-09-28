import { composeWithDevTools } from "@redux-devtools/extension";
import { projectsReducer } from "app/store/projectsReducer";
import { combineReducers, createStore } from "redux";

const rootReducer = combineReducers({
  projects: projectsReducer,
});
export const store = createStore(rootReducer, composeWithDevTools());
export type RootState = ReturnType<typeof rootReducer>;
