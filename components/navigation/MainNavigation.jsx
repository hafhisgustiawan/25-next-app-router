import Link from 'next/link';
import { Menu, Drawer } from 'react-daisyui';
import {
  UserIcon,
  HomeModernIcon,
  ArrowPathIcon,
  CalculahrefrIcon,
  Squares2X2Icon,
  TableCellsIcon,
  CircleStackIcon,
  ScaleIcon,
  UsersIcon,
  QueueListIcon,
} from '@heroicons/react/24/outline';
import { Fragment } from 'react';

const MainNavigation = ({ showNav, setShowNav }) => {
  return (
    <Drawer
      // open={false}hidden md:block
      className={`fixed h-full w-0 py-3 bg-base-100 text-base-content border-r-2 border-base-200 hrefp-14 left-0 z-20 md:drawer-open md:w-60 ${
        showNav && 'drawer-open'
      }`}
      side={
        <Menu
          className={`bg-base-100 h-full w-56 space-y-1 ${
            showNav && 'border-r-2 border-base-200'
          }`}
        >
          <Menu.Item>
            <Link
              href="/"
              // onClick={() => setShowNav(false)}
              end
            >
              <HomeModernIcon className="h-4 aspect-square" />
              Menu Pesanan
            </Link>
          </Menu.Item>

          {/*FOR ADMIN*/}
          {user?.role === 'admin' && (
            <Fragment>
              <Menu.Item>
                <Link
                  href="/categories"
                  // onClick={() => setShowNav(false)}
                  end
                >
                  <CircleStackIcon className="h-4 aspect-square" />
                  Kategori
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link
                  href="/table"
                  // onClick={() => setShowNav(false)}
                  end
                >
                  <TableCellsIcon className="h-4 aspect-square" />
                  Meja
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link
                  href="/queue"
                  // onClick={() => setShowNav(false)}
                >
                  <QueueListIcon className="h-4 aspect-square" />
                  Antrian
                </Link>
              </Menu.Item>
            </Fragment>
          )}
          {/*FOR ADMIN*/}

          <Menu.Item>
            <Link
              href="/transaction"
              // onClick={() => setShowNav(false)}
            >
              <ArrowPathIcon className="h-4 aspect-square" />
              Riwayat Transaksi
            </Link>
          </Menu.Item>

          {user?.role === 'admin' && (
            <Fragment>
              <Menu.Item>
                <Link
                  href="/inggredient"
                  // onClick={() => setShowNav(false)}
                >
                  <Squares2X2Icon className="h-4 aspect-square" />
                  Bahan Baku
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link
                  href="/composition"
                  // onClick={() => setShowNav(false)}
                >
                  <ScaleIcon className="h-4 aspect-square" />
                  Komposisi Menu
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link
                  href="/calculation"
                  // onClick={() => setShowNav(false)}
                >
                  <CalculahrefrIcon className="h-4 aspect-square" />
                  Kalkulasi Porsi
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link
                  href="/supplier"
                  // onClick={() => setShowNav(false)}
                >
                  <UserIcon className="h-4 aspect-square" />
                  Supplier
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link
                  href="/users"
                  // onClick={() => setShowNav(false)}
                >
                  <UsersIcon className="h-4 aspect-square" />
                  Pengguna
                </Link>
              </Menu.Item>
            </Fragment>
          )}
        </Menu>
      }
    >
      <label
        htmlFor="my-drawer-2"
        aria-label="close sidebar"
        className="drawer-overlay"
      ></label>
    </Drawer>
  );
};

export default MainNavigation;
