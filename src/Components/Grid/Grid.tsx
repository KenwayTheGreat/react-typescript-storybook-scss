import { FunctionComponent, ReactNode } from 'react';
import styles from './Grid.module.scss';
import classNames from 'classnames';

type Cols = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
type Spacing = 'sm' | 'md' | 'lg';

const Grid: FunctionComponent<{
  children: ReactNode,
  container?: boolean,
  item?: boolean,
  cols?: Cols,
  spacing?: Spacing
}> = ({ children, container, item, cols, spacing }) => {
  const cn = classNames({
    [styles.Grid_container]: container,
    [styles.Grid_item]: item,
    [styles[`Grid_cols_${cols}`]]: cols,
    [styles[`Grid_spacing_${spacing}`]]: spacing
  });
  return <div className={cn}>{children}</div>
}

export default Grid
