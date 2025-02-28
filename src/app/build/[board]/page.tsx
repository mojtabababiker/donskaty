type Props = {
  boardId: string;
};

async function Page(props: Promise<Props>) {
  const { boardId } = await props;
  return (
    <div className="w-full h-full flex items-center justify-center text-3xl text-zinc-950">
      {boardId} Board
    </div>
  );
}

export default Page;
