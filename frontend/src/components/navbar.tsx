import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Logo from './logo';
import { BsSun, BsMoon } from 'react-icons/bs';
import { slideAnimation } from '../utils/motion';
import { useAppwriteContext } from '../context/app-write';
import { UserProps } from '../interface';

const Navbar = () => {
  const [user, setUser] = React.useState<UserProps>();
  const [loading, setLoading] = React.useState(false);
  const { getUser } = useAppwriteContext();

  const getCurrentUser = React.useCallback(async () => {
    try {
      setLoading(true);
      const user_ = await getUser();
      setUser(user_);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, [getUser]);

  React.useEffect(() => {
    getCurrentUser();
  }, []);

  return (
    <motion.header
      className={`bg-gray-50 border-[1px] fixed w-full py-2 px-5 z-[100]`}
      {...slideAnimation('down')}
    >
      <motion.nav className='w-full h-full m-0 p-0 flex items-center justify-between'>
        <Logo size='text-2xl' />

        <motion.ul className='flex items-center gap-5 font-medium'>
          {loading ? (
            <motion.li className='hover:bg-white rounded-lg px-3 py-1.5 cursor-pointer hover:ring-2 hover:ring-gray-300 active:ring-4 active:ring-gray-400'>
              Loading
            </motion.li>
          ) : user ? (
            <Link to='/dashboard'>
              <motion.li className='hover:bg-white rounded-lg px-3 py-1.5 cursor-pointer hover:ring-2 hover:ring-gray-300 active:ring-4 active:ring-gray-400'>
                Profile
              </motion.li>
            </Link>
          ) : (
            <Link to='/authenticate'>
              <motion.li className='hover:bg-white rounded-lg px-3 py-1.5 cursor-pointer hover:ring-2 hover:ring-gray-300 active:ring-4 active:ring-gray-400'>
                Authenticate
              </motion.li>
            </Link>
          )}

          <motion.li className='hover:bg-white rounded-lg px-3 py-1.5 cursor-pointer hover:ring-2 hover:ring-gray-300 active:ring-4 active:ring-gray-400'>
            <label className='swap swap-rotate border-[1px] border-gray-50/60 rounded-full p-2'>
              <input title='Mode Toggle' type='checkbox' />
              <BsSun className='swap-on fill-current w-6 h-6' />
              <BsMoon className='swap-off fill-current w-6 h-6' />
            </label>
          </motion.li>
        </motion.ul>
      </motion.nav>
    </motion.header>
  );
};

export default Navbar;
