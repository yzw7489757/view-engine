import * as presetComponents from '../components/index'
import { IEventsMap, DiffViewData, IViewDataItemProps } from '../interface';
import injectToInstantiatedCom from './injectToInstantiatedCom';
import decorateFormItem from '../components/form-item';

function InjectEvents (componentName: string, itemProps: IViewDataItemProps & { id: string }, eventHandleMap: IEventsMap) {
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
    onSubmit: function(values: DiffViewData) {
      handleSubmit(id, values, componentName, itemProps)
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
    componentMap[componentName] = (itemProps: IViewDataItemProps & { id: string }) => {
      const eventHandler = InjectEvents(componentName, itemProps, eventHandleMap)
      let _Com = baseComponent[componentName];

      // 注入属性和事件注入到实例化组件
      _Com = injectToInstantiatedCom(_Com, { ...eventHandler, ...itemProps })

      decorateFormItem({
        showValidatorMsg: true,
        ...itemProps,
        errorMsg: itemProps.errorMsg,
        children: _Com
      });

      return _Com
    }
  })

  return componentMap
}
export default generatorComponentMap