import styles from './welcome.module.scss';

export function Welcome() {
    return (
        <div className={styles.welcome}>
            <p>Let&#39;s Dive My Work</p>
            <p className={styles.secondary}>Designing and Developing Meaningful Web Solutions</p>
        </div>
    );
}
