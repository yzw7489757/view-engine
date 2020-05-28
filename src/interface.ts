import noop from 'lodash/noop';

export class ViewEngineProps {
  public onClick: (...args: any[]) => void = noop
  public onSubmit: (...args: any[]) => void = noop
  public onChange: (...args: any[]) => void = noop
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

export interface IViewDataItem {
  id?: string,
  type?: string,
  label?: string,
  props?: IViewDataItemProps & Record<string, any>,
  children?: IViewData
}

export interface IViewDataItemProps {
  value?: string | number | undefined | Array<string | number>,
  disable?: boolean;
  className?: string,
  style?: Record<string, string>,
}

export type IViewLayout = string[] 

export interface DiffViewData {
  value: any;
  type?: string,
  label?: string
}

export type IEventHandler = (id: string, diffs: DiffViewData, componentName: string, itemProps: IViewDataItemProps) => void

