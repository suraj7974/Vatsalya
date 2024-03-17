import { LoadingBar } from '@/components/loading-bar';
import { Navbar } from '@/components/navbar';

const BrowserLayout = ({ children }: { children: React.ReactNode }) => {

    return (
        <>
            <Navbar />
            <main className='mt-14'>
                <LoadingBar>
                    {children}
                </LoadingBar>
            </main>
        </>
    );
};

export default BrowserLayout;