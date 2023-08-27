import Nav from './assets/Components/Nav';
import {Hero , SuperQuality,Subscribe,Services,PopularProducts,CustomerReviews,Footer,SpecialOffer} from './sections';

const App = () => (
  
    <main className="relative">
      <Nav />
      <section className="xl:padding-l wide:padding-r padding-b">
        <Hero />
      </section>

      <section className="padding">
        <PopularProducts />
      </section>

      <section className="padding">
        <SuperQuality />
      </section>

      <section className="padding-x py-10">
        <Services />
      </section>

      <section className="padding">
        <SpecialOffer />
      </section>

      <section className="bg-pale-blue padding">
        <CustomerReviews />
      </section>

      <section className="padding">
        <Subscribe />
      </section>

      <section className="bg-black padding-x paddinf-t pb-8">
        <Footer />
      </section>
    </main>

);

export default App

