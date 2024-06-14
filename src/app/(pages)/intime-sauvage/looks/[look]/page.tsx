const page = async ({ params }: { params: { look: string } }) => {
  console.log(params.look);
  return <div>page</div>;
};

export default page;
