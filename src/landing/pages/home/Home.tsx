import { TiketCardComponent } from '../../../admin/components/tiket-card/TiketCardComponent';

import { TopTicket } from '../../../shared/service/tiket/interface';
let victory: TopTicket = new TopTicket(
  '123213asdasdasdasd',
  'Tiket #2',
  'Vikin',
  'victory',
  1.16,
  100,
  new Date('2023-08-25T12:59:47.240Z')
);

let defeat: TopTicket = new TopTicket(
  '123213asdasdasdasdsadasd',
  'Tiket #3',
  'Raebon',
  'defeat',
  5.16,
  100,
  new Date('2023-08-25T13:59:47.240Z')
);
const Home = () => {
  return (
    <div className="my-5 flex flex-col justify-center">
      <h1 className="scroll-m-20 text-5xl font-semibold tracking-tight text-center">TipTik</h1>
      <div className="grid grid-cols md:grid-cols-2 mt-10">
        <div className="grid justify-center gap-5">
          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-2 text-center">
            👑 Top winner tiket 👑
          </h3>
          <TiketCardComponent item={victory} />
        </div>
        <div className="grid justify-center gap-5">
          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-2 text-center">
            👑 Top looser tiket 👑
          </h3>
          <TiketCardComponent item={defeat} />
        </div>
      </div>
    </div>
  );
};

export default Home;
