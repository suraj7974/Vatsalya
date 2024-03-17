import { LoadingBar } from '@/components/loading-bar';
import { Navbar } from './_components/navbar';
import Footer from './_components/footer';

const BrowserLayout = ({ children }: { children: React.ReactNode }) => {

    return (
        <>
            <LoadingBar>
                <Navbar />
                <main className='mt-14 min-h-[calc(100vh-27.5rem)] p-8 flex flex-col gap-y-10'>
                    {children}
                </main>
                <Footer />
            </LoadingBar>
        </>
    );
};

export default BrowserLayout;