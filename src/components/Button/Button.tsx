import React from 'react';
import { ButtonProps } from './types';
import * as CSS from 'csstype'

const StyledButton: CSS.Properties = {
  WebkitAppearance: 'none',
  WebkitTapHighlightColor: 'transparent',
  WebkitUserSelect: 'none',
  MozUserSelect: 'none',
  MsUserSelect: 'none',
  userSelect: 'none',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexShrink: '0',
  outline: 'none',
  cursor: 'pointer',
  border: '0',
  font: 'inherit',
  /* Constant properties */
  fontSize: 'inherit',
  fontWeight: 'inherit',
  height: '44px',
  width: 'max-content',
  padding: '11px 16px',
  transition: 'background 0.2s, transform 0.2s, color 0.2s, box-shadow 0.3s',
  borderRadius: '5px',
  /* Computed properties */
  background: '#fff',
  color: '#000',
  transform: 'scale(var(--button-scale, 1)) translateZ(0)',
  boxShadow: 'inherit',
  opacity: '0.25',
  '--shadow-hover-primary':
    '0 2px 40px -4px #ccc',

  '&:active': {
    '--button-scale': '0.95',
  },
  '&:disabled': {
    cursor: 'not-allowed',
  },

  variants: {
    variant: {
      primary: {
        '--background': '#171717',
        '--color': '#ccc',
        '&:disabled': {
          '--background': '#171717',
          '--color': '#ccc',
        },

        '&:hover': {
          '&:not(:disabled)': {
            '--shadow': 'var(--shadow-hover-primary)',
          },
        },

        '&:focus-visible': {
          '--shadow': 'var(--shadow-hover-primary)',
        },
      },
      secondary: {
        '--background': '#171717',
        '--color': '#ccc',
        '&:disabled': {
          '--background': 'var(--maximeheckel-form-input-disabled)',
          '--color': 'var(--maximeheckel-colors-typeface-tertiary)',
        },

        '&:hover': {
          '&:not(:disabled)': {
            '--shadow': 'var(--shadow-hover-primary)',
          },
        },

        '&:focus-visible': {
          '--shadow': 'var(--shadow-hover-primary)',
        },
      },
    },
  },
}

const StyledIconButton: CSS.Properties = {
  WebkitAppearance: 'none',
  WebkitTapHighlightColor: 'transparent',
  WebkitUserSelect: 'none',
  MozUserSelect: 'none',
  MsUserSelect: 'none',
  userSelect: 'none',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexShrink: '0',
  outline: 'none',
  cursor: 'pointer',
  border: '0',
  /* Constant properties */
  width: '44px',
  height: '44px',
  background: 'transparent',
  transition: 'color 0.3s ease, transform 0.3s ease',
  borderRadius: 'var(--border-radius-1)',
  color: '#ccc',
  transform: 'scale(var(--button-content-scale, 1)) translateZ(0)',
  '--shadow-hover-primary':
    '0 2px 40px -4px var(--form-input-focus)',

  '&::after': {
    zIndex: '0',
    position: 'absolute',
    content: "''",
    display: 'block',
    width: '100%',
    height: '100%',
    borderRadius: 'var(--corner, var(--border-radius-1))',
    transition:
      'box-shadow 0.3s ease, border-color 0.2s, background 0.3s ease,\n      transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
    background: '#171717',
    transform: 'scale(var(--button-background-scale, 1)) translateZ(0)',
    border:
      '2px solid #000',
    boxShadow: 'var(--shadow, none)',
  },

  '&:disabled': {
    cursor: 'not-allowed',
    '--background': '#171717',
    '--color': '#ccc',
  },

  '&:hover': {
    '&:not(:disabled)': {
      '--border-color': 'var(--colors-brand)',
      '--color': 'var(--colors-brand)',
      '--corner': 'calc(var(--border-radius-1) + 2px)',
      '--button-background-scale': '0.92',
      '--shadow': '#000',
    },
  },

  '&:focus-visible': {
    '--border-color': '#171717',
    '--color': '#000',
    '--corner': 'calc(var(--border-radius-1) + 2px)',
    '--button-background-scale': 0.92,
    '--shadow': 'var(--shadow-hover-primary)',
  },

  '&:active': {
    '--button-content-scale': '0.95',
  },
}


const Button = <T extends object>(
  props: ButtonProps<T>,
  ref: React.ForwardedRef<HTMLButtonElement>
) => {
  const {
    variant = 'primary',
    children,
    icon,
    startIcon,
    endIcon,
    as: Component,
    ...rest
  } = props;

  if (variant === 'icon') {
    return (
      <StyledIconButton variant={variant} as={Component} ref={ref} {...rest}>
        <div
          className='flex'
          style={{
            zIndex: 1,
          }}
        >
          {icon}
        </div>
      </StyledIconButton>
    );
  }

  return (
    <StyledButton variant={variant} as={Component} ref={ref} {...rest}>
      {startIcon ? (
        <div
          className='flex'
          style={{
            marginRight: '8px',
          }}
        >
          {startIcon}
        </div>
      ) : null}
      {children}
      {endIcon ? (
        <div
          className='flex'
          css={{
            marginLeft: '8px',
          }}
        >
          {endIcon}
        </div>
      ) : null}
    </StyledButton>
  );
};
Button.displayName = 'Button';

const ForwardedButton = React.forwardRef(Button);

export const WrappedButton = <T,>({
  ref,
  ...rest
}: ButtonProps<T> & { ref?: React.Ref<HTMLButtonElement> }) => (
  <ForwardedButton {...rest} ref={ref} />
);

export default WrappedButton
