/// <reference types="react" />
import { IEventsMap } from '../interface';
declare function generatorComponentMap<T extends Record<string, React.ReactNode>>(customComponents: T, eventHandleMap: IEventsMap): T;
export default generatorComponentMap;
