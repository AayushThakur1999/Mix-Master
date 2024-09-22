import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../components/Navbar";

const HomeLayout = () => {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === 'loading';
  return (
    <main className="w-full min-h-screen bg-stone-200">
      <Navbar />
      <section className="w-4/5 lg:w-3/4 mx-auto py-20">
        {isPageLoading ? <div className="mx-auto w-24 h-24 animate-spin [animation-duration:500ms] border-8 border-gray-400 border-t-rose-700 rounded-full" />: <Outlet />}
      </section>
    </main>
  );
};
export default HomeLayout;
