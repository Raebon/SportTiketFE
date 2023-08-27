import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '../../../shared/components/ui/card';
import { Separator } from '../../../shared/components/ui/separator';

interface MyAccountMenuProps {}
const linkClassName =
  'relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50';
export const MyAccountMenu: FC<MyAccountMenuProps> = ({}) => {
  return (
    <nav className="relative">
      <div className="sticky top-5">
        <Card className="min-w-[250px]">
          <CardHeader>
            <CardTitle>Můj účet</CardTitle>
            <Separator />
          </CardHeader>
          <CardContent>
            <Link className={linkClassName} to={'/my-account/deposit'}>
              Vložit peníze
            </Link>
            <Link className={linkClassName} to={'/my-account/cashout'}>
              Vybrat peníze
            </Link>
            <Link className={linkClassName} to={'/my-account/profile'}>
              Profil
            </Link>
            <Link className={linkClassName} to={'/my-account/transactions-history'}>
              Historie transakcí
            </Link>
            <Link className={linkClassName} to={'/my-account/settings'}>
              Nastavení
            </Link>
          </CardContent>
        </Card>
      </div>
    </nav>
  );
};
