import { ShoppingCartIcon } from "lucide-react";
import Link from "next/link";

export default function Menu() {
    return (
        <div className="flex justify-end">
            <nav className="w-full flex gap-3">
                <Link href='/signin' className="flex items-center header-button">
                    {/* <UserIcon className="w-8 h-8" /> */}
                    Hello, Sign in
                    {/* <span className="font-bold">Sign in</span> */}
                </Link>
                <Link href='/cart' className="header-button">
                    <div className="flex items-end">
                        <ShoppingCartIcon className="w-8 h-8" />
                        Cart
                    </div>
                    {/* <span className="font-bold">Cart</span> */}
                </Link>
            </nav>
        </div>
    );
};