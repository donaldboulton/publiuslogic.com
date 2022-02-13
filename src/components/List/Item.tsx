import * as React from 'react'
import * as CSS from 'csstype'
import { EnterArrowIcon } from '../icons/enter';

const listItem: CSS.Properties = {
    listStyle: 'none',
    display: 'flex',
    marginBottom: 'calc(1.45rem / 2)',
    lineHeight: '1.9',
    letterSpacing: '0.3px',
  
    'span[data-list-item]': {
      paddingRight: '8px',
      transform: 'translateY(4px)',
    },
  
    '& > ol': {
      marginLeft: '1.45rem',
      marginBottom: 'calc(1.45rem / 2)',
      marginTop: 'calc(1.45rem / 2)',
    },
  
    '& > ul': {
      marginLeft: '1.45rem',
      marginBottom: 'calc(1.45rem / 2)',
      marginTop: 'calc(1.45rem / 2)',
    },
  
    '& > p': {
      marginBottom: 'calc(1.45rem / 2)',
    },
  }

  const ListItem: React.FC<Props> = (props) => {
  const { children, ...rest } = props;

  return (
    <li style={listItem} {...rest}>
      <span data-list-item>
        <EnterArrowIcon stroke="text-indigo-600" />
      </span>
      <div>{children}</div>
    </li>
  );
};

ListItem.displayName = 'ListItem';

export default ListItem;
