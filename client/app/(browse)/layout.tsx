import { LoadingBar } from '@/components/loading-bar';
import { Navbar } from './_components/navbar';

const BrowserLayout = ({ children }: { children: React.ReactNode }) => {

    return (
        <>
            <LoadingBar>
                <Navbar />
                <main className='mt-14 p-8 flex flex-col gap-y-10'>
                    {children}
                </main>
            </LoadingBar>
        </>
    );
};

export default BrowserLayout;