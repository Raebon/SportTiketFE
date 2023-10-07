import { TiketCardComponent } from '../../admin/components/tiket-card/TiketCardComponent';
import image from '../assets/landpage.webp';
import { TTiket } from '../../shared/service/tiket/interfaces';
let victory: TTiket = {
  id: 'Asdasd',
  name: 'Tiket #1',
  userId: 'asdasd',
  userName: 'Reabos',
  bet: 123123,
  rate: 1.2,
  approximateEndDatetime: new Date('2023-08-25T13:59:47.240Z'),
  status: 'victory',
  cashoutMoney: 0
};

let defeat: TTiket = {
  id: 'Asdasd',
  name: 'Tiket #1',
  userId: 'asdasd',
  userName: 'Reabos',
  bet: 123123,
  rate: 1.2,
  approximateEndDatetime: new Date('2023-08-25T13:59:47.240Z'),
  status: 'victory',
  cashoutMoney: 0
};

export const HeroComponent = ({}) => {
  return (
    <section className=" flex flex-col justify-center">
      <div className="relative">
        <img src={image} alt="asd" className="rounded-b-2xl shadow-sm" />
        <div className="absolute flex bg-gray-800/70 w-full h-full bottom-0 rounded-b-2xl items-center">
          <div className="grid grid-cols md:grid-cols-2 w-full">
            <h1 className="scroll-m-20 text-5xl font-semibold tracking-tight text-center col-span-2 text-white mb-10">
              Hall of fame
            </h1>
            <div className="grid justify-center gap-2">
              <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-2 text-center text-white">
                👑 Top winner tiket 👑
              </h3>
              <TiketCardComponent tiket={victory} isPublic={true} />
            </div>
            <div className="grid justify-center gap-2">
              <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-2 text-center text-white">
                👑 Top looser tiket 👑
              </h3>
              <TiketCardComponent tiket={defeat} isPublic={true} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
