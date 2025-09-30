import styles from './navigation.module.scss';
import cn from 'classnames';

import {
    NavigationMenu,
    NavigationMenuList,
    NavigationMenuItem,
    NavigationMenuLink,
} from '@radix-ui/react-navigation-menu';

import React from 'react';

interface NavigationProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Navigation({ className, ...props }: NavigationProps) {
    return (
        <div className={cn(styles.wrapper, className)} {...props}>
            <NavigationMenu className={styles.navigation}>
                <NavigationMenuList className={styles.navigation__list}>
                    <NavigationMenuItem className={styles.navigation__item}>
                        <NavigationMenuLink href='#'>Home</NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem className={styles.navigation__item}>
                        <NavigationMenuLink href='#'>Experience</NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem className={styles.navigation__item}>
                        <NavigationMenuLink href='#'>Skills</NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem className={styles.navigation__item}>
                        <NavigationMenuLink href='#'>Projects</NavigationMenuLink>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </div>
    );
}
