import noop from 'lodash/noop';
import * as presetComponents from './components/index'

export class ViewEngineProps {
  public onClick: (id: string, diffs: IViewDataItemProps, componentName: string, itemProps: IViewDataItemProps)=> void = noop
  public onSubmit: (id: string, diffs: IViewDataItemProps, componentName: string, itemProps: IViewDataItemProps)=> void = noop
  public onChange: (id: string, diffs: IViewDataItemProps, componentName: string, itemProps: IViewDataItemProps, viewData: IViewData) => void = noop
  public customComponents: Record<string, React.ReactNode> = {}
  public viewData: IViewData = {};
  public viewLayout: IViewLayout = [];
  public style: Record<string, string> = {};
  public className = '';
  public noneLabel = false;
  public disabled = false;
}

export interface IEventsMap {
  handleClick: IEventHandler;
  handleChange: IEventHandler;
  handleSubmit: IEventHandler;
}

export interface IViewData {
  [id: string]: IViewDataItem,
}

export interface ViewEngineState {
  componentsMap: Record<string, React.ReactNode>,
  resetKey: number
}

export interface IViewDataItem {
  id?: string
  type?: keyof typeof presetComponents | string
  label?: string
  customLabel?: (props: IViewDataItem) => React.ReactNode;
  span?: number
  props?: IViewDataItemProps & Record<string, any>
  children?: IViewData
  hidden?: boolean
  layout?: IViewLayout
}

export interface IViewDataItemProps {
  value?: string | number | undefined | Array<string | number>,
  disable?: boolean;
  className?: string,
  style?: React.CSSProperties,
  options?: Array<Record<string, string | number>>,
  errorMsg?: string
}

// type Recursive<T> = | T | Array<Recursive<T>>;

// type Flatten<T> = T extends Recursive<infer R> ? R : never;

// declare function flatInfinity<T>(xs: ReadonlyArray<T>): Flatten<T>

// flatInfinity([1, [2, 3], [[4, [true]], { abc: 'efg' }], ''])

type RecursiveArray<T> = Array<T | RecursiveArray<T>>;
interface ArrayLike<T> {
 readonly length: number
 readonly [n: number]: T
}

type RecursiveArraysList<T> = ArrayLike<T | RecursiveArray<T>>

export type IViewLayout = RecursiveArraysList<string>

// const viewLayout:IViewLayout = [['a',['a']],'a',false]

export interface DiffViewData {
  value: any;
  type?: string,
  label?: string
}

export type IEventHandler = (id: string, diffs: DiffViewData, componentName: string, itemProps: IViewDataItemProps) => void


export interface LayoutSchema {
  title: string | React.ReactNode,
  label: string,
  name: string | null,
  span: number,
  className: string;
  children?: LayoutSchema[],
}


