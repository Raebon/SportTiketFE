import { TiketCardComponent } from '../../../admin/components/tiket-card/TiketCardComponent';

import { TTiket } from '../../../shared/service/tiket/interfaces';
let victory: TTiket = {
  id: 'Asdasd',
  name: 'Tike #1',
  userId: 'asdasd',
  userName: 'Reabos',
  bet: 123123,
  rate: 1.2,
  approximateEndDatetime: new Date('2023-08-25T13:59:47.240Z'),
  status: 'victory'
};

let defeat: TTiket = {
  id: 'Asdasd',
  name: 'Tike #1',
  userId: 'asdasd',
  userName: 'Reabos',
  bet: 123123,
  rate: 1.2,
  approximateEndDatetime: new Date('2023-08-25T13:59:47.240Z'),
  status: 'victory'
};
const Home = () => {
  return (
    <div className="my-5 flex flex-col justify-center">
      <h1 className="scroll-m-20 text-5xl font-semibold tracking-tight text-center">TipTik</h1>
      <div className="grid grid-cols md:grid-cols-2 mt-10">
        <div className="grid justify-center gap-2">
          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-2 text-center">
            👑 Top winner tiket 👑
          </h3>
          <TiketCardComponent item={victory} isPublic={true} />
        </div>
        <div className="grid justify-center gap-2">
          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-2 text-center">
            👑 Top looser tiket 👑
          </h3>
          <TiketCardComponent item={defeat} isPublic={true} />
        </div>
      </div>
    </div>
  );
};

export default Home;
