import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Profile from "@/components/Profile";
import Books from "@/components/Books";
import Works from "@/components/Works";
import Articles from "@/components/Articles";
import Themes from "@/components/Themes";
import Request from "@/components/Request";
import Flow from "@/components/Flow";
import Price from "@/components/Price";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <Profile />
        <Books />
        <Works />
        <Articles />
        <Themes />
        <Request />
        <Flow />
        <Price />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
