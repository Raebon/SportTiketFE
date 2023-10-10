import { FC } from 'react'
import { useUsersQuery } from '../../api/queries/user/getUsersQuery'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '../../../shared/components/ui/table';
import { formatFullName } from '../../../shared/lib/utils';
import { formatDatetime } from '../../../shared/lib/datetime-format';

interface UserListComponentProps {
  
}

export const UserListComponent: FC<UserListComponentProps> = ({}) => {
  const {data, isLoading} = useUsersQuery()
  console.log(
    data?.data
  )
  if(isLoading) return "loading..."
  return <Table>
  <TableCaption>Počet uživatelů: {data?.data.count}</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead className="w-[350px]">ID</TableHead>
      <TableHead>Jméno</TableHead>
      <TableHead>Přezdívka</TableHead>
      <TableHead>Poslední přihlášení</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {data?.data.rows.map((item, index) => {
      return (
        <TableRow key={index}>
          <TableCell className="font-medium">{item.id}</TableCell>
          <TableCell>{formatFullName(item)}</TableCell>
          <TableCell>{item.userName}</TableCell>
          <TableCell>{formatDatetime(item.lastLoginDate)}</TableCell>
        </TableRow>
      );
    })}
  </TableBody>
</Table>
}