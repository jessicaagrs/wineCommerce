import styles from '@/style/components/header/header.module.css';
import { Cart } from './Cart';
import { LinkMenu } from './LinkMenu';
import { Logo } from './Logo';
import { Profile } from './Profile';
import { SearchHeader } from './SearchHeader';

export const Header = () => {
  return (
    <nav className={styles.container}>
      <Logo />
      <LinkMenu />
      <div className={styles.menuActions}>
        <SearchHeader />
        <Profile />
        <Cart />
      </div>
    </nav>
  );
};
