import * as React from 'react'
import * as CSS from 'csstype'

const listItem: CSS.Properties = {
    listStyle: 'none',
    marginRight: '8px',
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
        <svg
          className='w-6 h-6 mr-2 ml-1 inline-block items-center text-indigo-400'
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          stroke="currentColor"
          {...props}
        >
          <path
            d="M5 12H19"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14.0829 6.42532L19 12L14.0829 17.5747"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <div>{children}</div>
    </li>
  );
};

ListItem.displayName = 'ListItem';

export default ListItem
