declare module 'bss-hw-api' {
  export interface JWT {
      workflowContext: string;
      accessLevel: number;
      locale: string;
      sub: string;
      exp: number;
      iat: number;
  }
  export interface AuthenticateInput {
      login: string;
      password: string;
  }
  export interface TokenAction {
      type: string;
      token: string;
  }
  export interface QueryFilter {
    keyword?: string
    assignmentFilter: string
    columns: string
    clauses: QueryClause[]
  }
  export interface QueryClause {
    join: string
    column: string
    operator: string
    value: string
  }
  export interface ITask {
    title: string
    identificationKey: string
    creator: string
    payload: string
    systemAttributes: IAttributes
  }
  export interface IAttributes {
    state: string
    assignees: IAssignee[]
    assignedDate: number
    taskId: string
    taskDefinitionId: string
    systemMessageAttributes: IMessageAttributes
  }
  export interface IAssignee {
    id: string
    displayName: string
    type: string
    systemVersionFlag: string
  }
  export interface IMessageAttributes {
    textAttribute1: string
    textAttribute2: string
    textAttribute3: string
  }
  export function decodeToken(token: any): JWT;
  export const TOKEN_UPDATED: string;
  export class HumanWorkflow {
      apiUrl: string;
      private token;
      subscribe(cb: Function): void;
      private subscribers;
      constructor(apiUrl?: string);
      authenticate(input: AuthenticateInput): Promise<string>;
      queryTasks(token: string, query: QueryFilter): Promise<ITask[]>
      queryTasksByPage(token: string, query: QueryFilter, skip: number, limit: number): Promise<ITask[]>
      queryTasksCount(token: string, query: QueryFilter): Promise<number>
      getTaskDetailsById(token: string, taskId: string): Promise<ITask>
      updateTask(token: string, task: any): Promise<any>;
  }
}
