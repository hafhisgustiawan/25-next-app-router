'use client';
import { Navbar, Button, Menu } from 'react-daisyui';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = () => {
  const pathname = usePathname();

  return (
    <Navbar className="border-b-2">
      <div className="flex-1">
        <Button tag="a" color="ghost" className="normal-case text-xl">
          daisyUI
        </Button>
      </div>
      <div className="flex-none">
        <Menu horizontal={true} className="px-1 space-x-2">
          <Menu.Item>
            <Link href="/" className={pathname === '/' ? 'active' : undefined}>
              Home
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link
              href="/recommendations"
              className={pathname === '/recommendations' ? 'active' : undefined}
            >
              Recommendations
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link
              href="/foods"
              className={pathname === '/foods' ? 'active' : undefined}
            >
              Foods
            </Link>
          </Menu.Item>
          <Menu.Item>
            <details>
              <summary>Parent</summary>
              <ul className="p-2 bg-base-100">
                <li>
                  <a>Link 1</a>
                </li>
                <li>
                  <a>Link 2</a>
                </li>
              </ul>
            </details>
          </Menu.Item>
        </Menu>
      </div>
    </Navbar>
  );
};

export default Header;
