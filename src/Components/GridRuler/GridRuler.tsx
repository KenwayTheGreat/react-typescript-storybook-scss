import { FunctionComponent } from 'react';
import styles from './GridRuler.module.scss';
import classNames from 'classnames';

type Spacing = 'sm' | 'md' | 'lg';

const GridRuler: FunctionComponent<{ spacing?: Spacing }> = ({ spacing }) => {
  const cn = classNames(styles.GridRuler, {
    [styles[`GridRuler_spacing_${spacing}`]]: spacing
  });

  return <div className={cn}>
    {
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((number) => (
        <div key={number} className={styles.GridRuler_item} />
      ))
    }
  </div>
}

export default GridRuler