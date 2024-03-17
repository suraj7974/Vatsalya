import { LoadingBar } from '@/components/loading-bar';
import { Navbar } from '@/app/(browse)/_components/navbar';

const AuthLayout = ({ children }: { children: React.ReactNode }) => {

    return (
        <>
            <main className='h-screen flex justify-center items-center'>
                <LoadingBar>
                    {children}
                </LoadingBar>
            </main>
        </>
    );
};

export default AuthLayout;