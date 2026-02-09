import React from "react";
import { Outlet, useNavigation } from "react-router";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Loading from "../components/Loading/Loading";

const HomeLayout = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  return (
    <>
      <div>
        <header className="bg-base-300">
          <Navbar></Navbar>
        </header>
        <main className="">
          {isLoading ? (
            <div className="flex justify-center items-center h-[60vh]">
              <Loading></Loading>
            </div>
          ) : (
            <Outlet></Outlet>
          )}
        </main>
        <footer>
          <Footer></Footer>
        </footer>
      </div>
    </>
  );
};

export default HomeLayout;
