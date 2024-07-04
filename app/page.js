import Head from 'next/head';
import Logo from '../components/Logo';
import SearchBar from '../components/SearchBar';
import AddCarButton from '../components/AddCarButton';
import SignInButton from '../components/SignInButton';
import CartButton from '../components/CartButton';
import MenuButton from '../components/MenuButton';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Kambo Autos </title>
        <meta name="description" content="Kambo Autos - home for car accessories and spare parts" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="flex items-center flex-col">
          <div className="container mx-5/10 flex items-center justify-between">
            <div className=""><Logo/></div>
            <div className='flex items-center gap-4 justify-between'>
              <SignInButton />
              <CartButton />
              <MenuButton />
            </div>
          </div>
          <div className="container mx-5/10 bg-white p-10 flex mx-auto gap-4 flex-col">
            <div className="flex" style={{width:'50%'}}><SearchBar/></div>
            <div className="w-4/10"><AddCarButton/></div>
          </div>
      </header>

      <main className="flex flex-col items-center justify-center min-h-screen py-2">
        <section className="container mx-auto text-center py-10">
          <h1 className="text-4xl font-bold mb-4">Welcome to Kambo Autos</h1>
          <p className="mb-6">Your go-to place for car parts</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">Shop Now</button>
        </section>
      </main>

      <footer className="bg-gray-800 w-full py-4 mt-auto">
        <div className="container mx-auto text-center text-white">
          &copy; 2024 Kambo Autos. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
