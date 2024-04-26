
  /* bottom cart affix (wrapper) */
import React from 'react';
import { Button } from "@/components/ui/button.tsx";

const Footer: React.FC = () => {
    return (
        <footer className="sticky bottom-0 left-0 right-0 bg-white border-t border-zinc-200 flex justify-center">
            <div className="max-w-screen-lg p-6 flex justify-between items-center gap-4 grow">
                <div className="flex flex-col">
                    <span>Total for [?] tickets</span>
                    <span className="text-2xl font-semibold">[?] CZK</span>
                </div>
                <Button disabled variant="default">
                    Checkout now
                </Button>
            </div>
        </footer>
    );
};

export default Footer;

