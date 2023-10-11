import styles from '../App.module.css';

export type FilterProps = {
  value: string;
  onChange(value: string): void;
}

export const Filter = (props: FilterProps) => {
  const { value, onChange } = props

  return <div style={{ display: 'flex', "align-items": 'center', "margin-bottom": '10px' }}>
    <input class={styles['filter-input']} value={value} placeholder="Filter..." onChange={(ev) => onChange(ev.target.value)}></input>
    <button onClick={() => onChange("")} class={styles.button} style={{ "background-color": 'transparent' }}>❌</button>
  </div>
}
