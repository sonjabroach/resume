import {FC, memo} from 'react';

import {ExeclineItem} from '../../../data/dataDef';

const ExeclineItem: FC<{item: ExeclineItem}> = memo(({item}) => {
  const {title, content} = item;
  return (
    <div className="flex flex-col pb-8 text-center last:pb-0 md:text-left">
      <div className="flex flex-col pb-4">
        <h2 className="text-xl font-bold">{title}</h2>
      </div>
      {content}
    </div>
  );
});

ExeclineItem.displayName = 'ExeclineItem';
export default ExeclineItem;
