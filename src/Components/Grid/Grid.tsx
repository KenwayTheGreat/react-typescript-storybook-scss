import { FunctionComponent, ReactNode } from 'react';
import styles from './Grid.module.scss';
import classNames from 'classnames';

const Grid: FunctionComponent<{
  children: ReactNode,
  container?: boolean,
  item?: boolean
}> = ({ children, container, item }) => {
  const cn = classNames({
    [styles.Grid_container]: container,
    [styles.Item_container]: item
  });
  return <div className={cn}>{children}</div>
}

export default Grid
