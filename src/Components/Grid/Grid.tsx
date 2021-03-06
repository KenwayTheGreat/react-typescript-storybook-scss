import { FunctionComponent, ReactNode } from 'react';
import styles from './Grid.module.scss';
import classNames from 'classnames';

type Cols = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
type Spacing = 'sm' | 'md' | 'lg';
type JustifyContent = "flex-start" | "center" | "flex-end" | "space-between";

const Grid: FunctionComponent<{
  children: ReactNode,
  container?: boolean,
  item?: boolean,
  xs?: Cols,
  sm?: Cols,
  md?: Cols,
  lg?: Cols,
  spacing?: Spacing,
  justifyContent?: JustifyContent,
}> = ({ children, container, item, xs, sm, md, lg, spacing, justifyContent }) => {
  const cn = classNames({
    [styles.Grid_container]: container,
    [styles.Grid_item]: item,
    [styles[`Grid_xs_${xs}`]]: xs,
    [styles[`Grid_sm_${sm}`]]: sm,
    [styles[`Grid_md_${md}`]]: md,
    [styles[`Grid_cols_${lg}`]]: lg,
    [styles[`Grid_spacing_${spacing}`]]: spacing,
    [styles[`Grid_justifyContent_${justifyContent}`]]: justifyContent
  });
  return <div className={cn}>{children}</div>
}

export default Grid
