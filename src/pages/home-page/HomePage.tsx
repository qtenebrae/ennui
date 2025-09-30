import styles from './HomePage.module.scss';

import { Skills } from '@/widgets/skills';

export default function HomePage() {
    return (
        <div className={styles.main}>
            <Skills />
        </div>
    );
}
