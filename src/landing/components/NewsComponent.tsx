export const NewsComponent = ({}) => {
  return (
    <section className="grid gap-2">
      <h3 className="font-semibold text-2xl">Novinky</h3>
      <div className="grid">
        <NewItem />
        <NewItem />
        <NewItem />
      </div>
    </section>
  );
};

const NewItem = () => {
  return (
    <>
      <h3 className="font-semibold text-xl">News release</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore voluptatibus, et mollitia
        ad veniam omnis fugit tenetur quam iusto atque, qui aliquam assumenda, eos inventore quaerat
        eum. Qui, quos magni!
      </p>
      <div className="flex justify-end">
        <span className="text-gray-800 font-semibold">Admin | 1.12.2001</span>
      </div>
    </>
  );
};
