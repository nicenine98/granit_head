import { useNavigate } from 'react-router';
import { Button } from '../../components/Elements';
import { useAuth } from '../../lib/auth';
import { Disclosure } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import logo from '../../assets/images/logo.gif';

const navigation = [
    { name: 'FORSÍÐA', href: '#', current: true },
    { name: 'LEGSTEINAR & FYLGIHLUTIR', href: '#', current: false },
    { name: 'LASERMYNDIR &\n ÁLETRUN', href: '#', current: false },
    { name: 'UPPSETNING &\n AFHENDING', href: '#', current: false },
    { name: 'VIÐHALD &\n FEGRUN LEGSTEINA' }
]

const classNames = (...classes: any) => {
    return classes.filter(Boolean).join(' ')
}

const Navbar = () => {
    const navigate = useNavigate();
    const { user } = useAuth();

    const handleStart = () => {
        if (user) {
            navigate('/app');
        } else {
            navigate('/auth/login');
        }
    };
    return (
        <Disclosure as="nav" className="bg-black">
            {({ open }) => (
                <>
                    <div className="mx-auto px-2 sm:px-6 lg:px-32">
                        <div className="relative flex items-center sm:h-30 justify-between h-40">
                            <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex-1 flex items-center sm:items-stretch sm:justify-center">
                                <div className="flex-shrink-0 flex items-center pr-6">
                                    <img
                                        className="block lg:hidden h-16 w-auto"
                                        src={logo}
                                        alt="Workflow"
                                    />
                                    <img
                                        className="hidden lg:block h-32 w-auto"
                                        src={logo}
                                        alt="Workflow"
                                    />
                                </div>
                                <div className="hidden sm:flex sm:ml-6 items-center">
                                    <div className="flex flex-col items-center">
                                        <div className="flex flex-1 space-x-4">
                                            {navigation.map((item) => (
                                                <a
                                                    key={item.name}
                                                    href={item.href}
                                                    className={classNames(
                                                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                        'px-3 py-2 rounded-md text-lg font-medium text-center'
                                                    )}
                                                    aria-current={item.current ? 'page' : undefined}
                                                >
                                                    {item.name}
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute inset-y-0 right-8 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                    <Button size="md" className="text-gray-200 bg-black hover:bg-gray-800 text-lg ml-3" onClick={handleStart}>
                                        Get Start
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            {navigation.map((item) => (
                                <Disclosure.Button
                                    key={item.name}
                                    as="a"
                                    href={item.href}
                                    className={classNames(
                                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                        'block px-3 py-2 rounded-md text-base font-medium whitespace-pre'
                                    )}
                                    aria-current={item.current ? 'page' : undefined}
                                >
                                    {item.name}
                                </Disclosure.Button>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}

export default Navbar;
