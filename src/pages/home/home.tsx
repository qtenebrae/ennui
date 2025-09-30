import styles from './home.module.scss';
import { SkillsSection } from '@/widgets';

export function Home() {
    return (
        <div className={styles.home}>
            <SkillsSection />
        </div>
    );
}
