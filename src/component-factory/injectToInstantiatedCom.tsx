import React, { isValidElement, cloneElement } from "react"

function injectToInstantiatedCom(
  _Com: React.SFC | React.FC | React.StatelessComponent | React.ReactNode, 
  eventHandler: Record<string, (...args: any[]) => any>, 
  itemProps: any
) {
  const props = Object.assign(eventHandler, itemProps)
  if(isValidElement(_Com)) {
    return cloneElement(_Com, { ...props }); // 实例组件 <Component/>
  } else if(isClassComponent(_Com)){ // class组件
    return React.createElement(_Com, {...props})
  } else if(isFunctionComponent(_Com)) {
    try{
      return _Com(props)
    }catch(e){
      return <_Com {...props} />
    }
  }

  return null
}

type IsReactFunc<T> = T extends () => any ? T : never;

function isClassComponent(component): component is IsReactFunc<React.ReactNode> {
  return typeof component === 'function' && component.prototype && !!component.prototype.isReactComponent
}

function isFunctionComponent(component): component is React.SFC {
  return !!(
    typeof component === 'function' &&
    String(component).includes('return React.createElement')
  );
}

function isReactComponent(component): boolean {
  return !!(isClassComponent(component) || isFunctionComponent(component));
}

function isCompositeTypeElement(element) {
  return isValidElement(element) && typeof element.type === 'function';
}

export default injectToInstantiatedCom