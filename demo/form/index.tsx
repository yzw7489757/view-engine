import React from 'react';
import ViewEngine from '../../src/index';
import DataEngine from '../../src/data-engine/index';
import { IViewData, IViewDataItemProps } from '../../src/interface';
import DATA from './ui';

const WithForm = () => {
  const [viewData, setViewData] = React.useState<IViewData>(DATA)
  const de = React.useRef(new DataEngine({
    viewData
  }))

  // React.useEffect(() => {
  //   de.current.listener('on', (engineData) => {
  //     setViewData(engineData)
  //   })
  // }, [])

  const triggerToFormChange = (keyName, diffs: IViewDataItemProps, type, itemProps) => {
    const newData = de.current.updateProps({
      [keyName]: diffs,
      field10: {
          value: Date.now()
      }
    })
    setViewData(newData)
    // console.log('newData: ', newData);
  }

  

  return (
      <ViewEngine 
        onChange={triggerToFormChange}
        viewLayout={[
          [
            'member2{12}', 
            'member2{12}', 
            'member1{20}', 
            'member3', 
            [
              'member4{8}', 'member5{8}', 'member6{8}'
            ],
            [
              'member7{8}', 'member8{8}', 'member9{8}'
            ],
            [
              'member6{8}', 'member9{8}','member10{8}'
            ]
          ],
          ['member2', 'member1', 'member8']
        ]}
        viewData={viewData}></ViewEngine>
  );
}

export default WithForm;
