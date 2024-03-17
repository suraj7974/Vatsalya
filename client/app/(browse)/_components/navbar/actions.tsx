import { SignInButton, UserButton, currentUser } from "@clerk/nextjs";
import { Bell, LogIn, User } from "lucide-react";

export const LoginAction = async () => {
    const user = await currentUser();

    return (
        <div className="flex items-center gap-x-5">
            <Bell className="w-6 h-6 cursor-pointer hover:text-blue-500" />
            {user ? (
                <UserButton afterSignOutUrl="/" />
            ) : (
                <SignInButton>
                    <LogIn className="w-6 h-6 cursor-pointer hover:text-blue-600" />
                </SignInButton>
            )}
        </div >
    )
}
