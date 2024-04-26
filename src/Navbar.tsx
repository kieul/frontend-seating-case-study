import React from "react";
import { Button } from "@/components/ui/button.tsx";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar.tsx";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu.tsx";

interface NavbarProps {
  isLoggedIn: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isLoggedIn }) => {
  return (
    <nav className="sticky top-0 left-0 right-0 bg-white border-b border-zinc-200 flex justify-center">
      <div className="max-w-screen-lg p-4 grow flex items-center justify-between gap-3">
        <div className="max-w-[250px] w-full flex">
          <a href="/">
            <img
              src="https://www.nfctron.com/img/svg/nfctron-logo-dark.svg?v=4"
              alt="Nfctron Logo"
              className="h-5"
            />
          </a>
        </div>
        <input
          type="text"
          placeholder="🔍"
          className="bg-zinc-50 rounded-md h-8 w-[200px] px-2 text-end	 hover:ring-2 hover:ring-violet-900 hover:bg-transparent transition duration-500"
        />
        <div className="max-w-[250px] w-full flex justify-end">
          {isLoggedIn ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost">
                  <div className="flex items-center gap-2">
                    <Avatar>
                      <AvatarImage src="https://source.boringavatars.com/marble/120?colors=25106C,7F46DB" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col text-left">
                      <span className="text-sm font-medium">John Doe</span>
                      <span className="text-xs text-zinc-500">
                        john.doe@nfctron.com
                      </span>
                    </div>
                  </div>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-[250px]">
                <DropdownMenuLabel>John Doe</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem disabled>Logout</DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button disabled variant="secondary">
              Login or register
            </Button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
