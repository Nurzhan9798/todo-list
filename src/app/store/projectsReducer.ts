import { Project } from "entity/Project/model/types/project";

interface ProjectState {
  projects: Project[];
  loading: boolean;
  error: string | null;
}

const defaultState: ProjectState = {
  projects: [
    {
      id: 1,
      title: "Project 1",
      createdAt: "31/01/23",
    },
    {
      id: 2,
      title: "Project 2",
      createdAt: "31/01/23",
    },
    {
      id: 3,
      title: "Project 3",
      createdAt: "31/01/23",
    },
    {
      id: 4,
      title: "Project 4",
      createdAt: "31/01/23",
    },
  ],
  loading: false,
  error: "",
};

type ProjectAction =
  | FetchProjectsAction
  | FetchProjectsSuccessAction
  | FetchProjectsErrorAction
  | AddProjectAction
  | RemoveProjectAction;

export enum ProjectActionTypes {
  FETCH_PROJECTS = "FETCH_PROJECTS",
  FETCH_PROJECTS_SUCCESS = "FETCH_PROJECTS_SUCCESS",
  FETCH_PROJECTS_ERROR = "FETCH_PROJECTS_ERROR",
  ADD_PROJECT = "ADD_PROJECT",
  REMOVE_PROJECT = "REMOVE_PROJECT",
}

interface FetchProjectsAction {
  type: ProjectActionTypes.FETCH_PROJECTS;
}

interface FetchProjectsSuccessAction {
  type: ProjectActionTypes.FETCH_PROJECTS_SUCCESS;
  payload: Project[];
}

interface FetchProjectsErrorAction {
  type: ProjectActionTypes.FETCH_PROJECTS_ERROR;
  payload: string;
}

interface AddProjectAction {
  type: ProjectActionTypes.ADD_PROJECT;
  payload: Project;
}

interface RemoveProjectAction {
  type: ProjectActionTypes.REMOVE_PROJECT;
  payload: number; // projectId
}

export const projectsReducer = (
  state = defaultState,
  action: ProjectAction,
): ProjectState => {
  switch (action.type) {
    case ProjectActionTypes.FETCH_PROJECTS:
      return { loading: true, projects: [], error: null };
    case ProjectActionTypes.FETCH_PROJECTS_SUCCESS:
      return { loading: false, projects: action.payload, error: null };
    case ProjectActionTypes.FETCH_PROJECTS_ERROR:
      return { loading: false, projects: [], error: action.payload };
    case ProjectActionTypes.ADD_PROJECT:
      return { ...state, projects: [...state.projects, action.payload] };
    case ProjectActionTypes.REMOVE_PROJECT:
      return {
        ...state,
        projects: state.projects.filter(
          (project) => project.id !== action.payload,
        ),
      };
    default:
      return state;
  }
};
