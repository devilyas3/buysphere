'use client';

import { ChevronUp } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import { APP_NAME } from "@/lib/constants";

export default function Footer() {
    return (
        <footer className="bg-black text-white underline-link">
            <div className="w-full">
                <Button variant='ghost' className="w-full bg-gray-800 rounded-none"
                    onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
                >
                    <ChevronUp className="w-4 h-4 mr-2" />
                    Back to top
                </Button>
            </div>
            <div className="p-4">
                <div className="flex justify-center gap-3 text-sm">
                    <Link href='/page/conditions-of-use'>Conditions of Use</Link>
                    <Link href='/page/privacy-policy'>Privacy Policy</Link>
                    <Link href='/page/help'>Help</Link>
                </div>
                <div className="flex justify-center text-sm">
                    <p>© 2025, {APP_NAME}, Inc. or its affiliates</p>
                </div>
                <div className="mt-8 flex justify-center text-sm text-gray-400">
                    123. Main Street, Anytown, CA 12345 | +1 (123) 456-7890
                </div>
            </div>
        </footer>
    );
};