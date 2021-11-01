import userState from "./userState";
import projectsState from "./projectsState";
import membersState from "./membersState";
import tasksState from "./tasksState";
import searchState from "./searchState";
import chatState from "./chatState";

const initialState = {
  ...userState,
  ...projectsState,
  ...membersState,
  ...tasksState,
  ...searchState,
  ...chatState,
  loading: true,
  feed: {},
};

export default initialState;
