import * as S from './styles';
import { forwardRef } from 'react';
import NextLink from 'next/link';

const Button = forwardRef(({ href, as, prefetch, ...props }, ref) => (
  <>
    <NextLink href={href} as={as} prefetch={prefetch} passHref>
      <S.Button
        bgcolor={props.bgcolor}
        width={props.totalwidth}
        onClick={props.onClick}
        totalradius={props.totalradius}
        bgborder={props.border}
        hover={props.hover}
        ref={ref}
      >
        {props.children}
      </S.Button>
    </NextLink>
  </>
));

Button.displayName = 'Button';

export default Button;
