import * as presetComponents from '../components/index'
import { IEventsMap, DiffViewData } from '../interface';
import injectToInstantiatedCom from './injectToInstantiatedCom';

function InjectEvents (componentName: string, itemProps, eventHandleMap: IEventsMap) {
  const { id } = itemProps;
  const { handleChange, handleSubmit, handleClick } = eventHandleMap;
  return {
    onChange: function (e: React.ChangeEvent<HTMLInputElement> | number | string | undefined) {
      const v = (typeof e === 'object' && e.target) ? e.target.value : e
      handleChange(id, { value: v }, componentName, itemProps);
    },
    onClick: function(e: React.MouseEvent<HTMLElement>) {
      const v = (typeof e === 'object' && e.target && e.clientX && e.clientY) ? e.target : e
      handleClick(id, { value: v }, componentName, itemProps);
    },
    onSubmit: function(diffs: DiffViewData) {
      handleSubmit(id, diffs, componentName, itemProps)
    }
  }
}


function generatorComponentMap<T extends Record<string, React.ReactNode>>(customComponents: T, eventHandleMap: IEventsMap): T {
  const componentMap = Object.create(null)

  const baseComponent = {
    ...presetComponents,
    ...customComponents
  }

  Object.keys(baseComponent).forEach(componentName => {
    componentMap[componentName] = (itemProps) => {
      const eventHandler = InjectEvents(componentName, itemProps, eventHandleMap)
      let _Com = baseComponent[componentName];

      // 注入属性和事件注入到实例化组件
      _Com = injectToInstantiatedCom(_Com, {...eventHandler, ...itemProps })
      return _Com
    }
  })

  return componentMap
}
export default generatorComponentMap