import Link from "next/link";
import CartButton from "./cart-button";

export default function Menu() {
    return (
        <div className="flex justify-end">
            <nav className="w-full flex gap-3">
                <Link href='/signin' className="flex items-center header-button">
                    {/* <UserIcon className="w-8 h-8" /> */}
                    Hello, Sign in
                    {/* <span className="font-bold">Sign in</span> */}
                </Link>
                <CartButton />
            </nav>
        </div>
    );
};