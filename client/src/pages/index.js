import dynamic from 'next/dynamic';

const Sidebar = dynamic(() => import('../components/sidebar'), {
  suspense: true,
});
const Store = dynamic(() => import('../components/store'), {
  suspense: true,
});

function Home() {
  return (
    <>
      <Sidebar />
      <Store />
    </>
  );
}
export default Home;
