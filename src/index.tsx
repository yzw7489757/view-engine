import React from 'react';
// import isEqual from 'lodash/isEqual'
import InjectEvents from './component-factory/generatorComponentMap';
import { IEventsMap, IEventHandler, IViewData, ViewEngineProps, ViewEngineState } from './interface';
import generatorLayout from './view-handler/generatorLayout';
import generatorViewMap from './view-handler/generatorData';
import Renderer from './renderer/index';
import handleViewData from './utils/handleViewData';

class ViewEngine extends React.Component<ViewEngineProps, ViewEngineState> {

  viewMap: IViewData = {};

  layout

  public static defaultProps: Partial<ViewEngineProps>  = new ViewEngineProps()

  constructor(props: ViewEngineProps) {
    super(props)
    this.state = {
      resetKey: 0,
      componentsMap: this.generatorComponentMap(this.props)
    }
  }

  generatorComponentMap = (newProps: ViewEngineProps) => {
    const { customComponents } = newProps;
    const eventHandlerMap: IEventsMap = {
      handleClick: this.handleClick,
      handleSubmit: this.handleSubmit,
      handleChange: this.handleChange
    }
    return InjectEvents<ViewEngineProps['customComponents']>(customComponents, eventHandlerMap)
  }

  handleClick:IEventHandler = (id, diffs, componentName, itemProps) => {
    this.props.onClick(id, diffs, componentName, itemProps)
  };

  handleSubmit: IEventHandler = (id, diffs, componentName, itemProps) => {
    const { onSubmit } = this.props;
    this.handleChange(id, diffs, componentName, itemProps);
    onSubmit(id, diffs, componentName, itemProps)
  }

  handleChange: IEventHandler = (id, diffs, componentName, itemProps) => {
    const { onChange, viewData } = this.props;
    onChange(id, { value: diffs.value || itemProps.value }, componentName, itemProps, viewData)
  }

  reset = (key?) => {
    this.setState({
      resetKey: key || Date.now()
    })
  }

  // static getDerivedStateFromProps(nextProps: ViewEngineProps, prevState: ViewEngineState) {
  //   if(isEqual(nextProps.viewData, prevState.componentsMap)) {

  //   }
  //   return null
  // }
  

  render() {
    console.log('=============== rerender')
    const { componentsMap, resetKey } = this.state
    const { className, style, viewData: _viewData, viewLayout } = this.props
    const viewData = handleViewData(_viewData)
    this.viewMap = generatorViewMap(viewData, this.props);
    this.layout = generatorLayout(this.viewMap, viewLayout, {...this.props, viewData})
    console.log('this.layout: ', this.layout);
    return (
      <div key={resetKey} className={`view-engine ${className}`} style={style}>
        {Renderer({
          viewData, 
          componentsMap,
          viewMap: this.viewMap,
          layout: this.layout,
          ctx: this.props, 
        })}
      </div>
    )
  }
}


export default ViewEngine

