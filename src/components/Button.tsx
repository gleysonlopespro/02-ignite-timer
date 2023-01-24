import styles from './Button.module.css';

interface ButtonProps{
    background?: 'primary' | 'secundary' | 'danger' | 'sucess';
}

export function Button(props: ButtonProps){
    return <button className={styles.button}>Enviar</button>
}