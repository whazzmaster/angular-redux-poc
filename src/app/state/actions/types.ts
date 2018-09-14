type FunctionType = (...args: any[]) => any;
// tslint:disable interface-over-type-literal
type ActionCreatorsMapObject = { [actionCreator: string]: FunctionType };

export type ActionsUnion<A extends ActionCreatorsMapObject> = ReturnType<A[keyof A]>;
