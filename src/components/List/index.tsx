import * as React from 'react'
import * as CSS from 'csstype'
import ListItem from './ListItem'
import { ListProps } from './types'

const listStyle: CSS.Properties = {
    margin: '0 0 1.45rem 0',
    padding: '0',
    color: 'inherit',
    listStylePosition: 'outside',
    listStyleImage: 'none',
  
    variants: {
      variant: {
        unordered: {
          li: {
            // We use List.Item to render the proper style
            listStyle: 'none',
          },
        },
        ordered: {
          li: {
            counterIncrement: 'li',
  
            svg: {
              display: 'none',
            },
  
            '&:before': {
              content: "counters(li, '.') '. '",
              color: 'blue',
              marginRight: '8px',
            },
          },
        },
      },
    },
    defaultVariants: {
      variant: 'unordered',
    },
}
const List = (props: ListProps) => {
  const { variant = 'unordered', children, ...rest } = props;

  const Component = variant === 'ordered' ? 'ol' : 'ul';

  return (
    <div style={listStyle} as={Component} variant={variant} {...rest}>
      {children}
    </div>
  );
};

List.Item = ListItem;

export default List;
