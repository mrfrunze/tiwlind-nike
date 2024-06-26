import {Hero,CustomerReviews,Footer,PopularProducts,Services,SpecialOffer,Subscribe,SuperQuality} from "./sections/index"
import { Nav } from "./components/index"

const App = () => {
  return (
    <>
    <Nav/>
    <main className='relative'>
     <section className='xl:padding-l wide:padding-r padding-b'>
      <Hero/>
     </section>
     <section className="padding">
      <PopularProducts/>
     </section>
     <section className="padding">
      <SuperQuality/>
     </section>
     <section className="padding-x py-10">
      <Services/>
     </section>
     <section className="padding">
      <SpecialOffer/>
     </section>
     <section className="padding bg-pale-blue">
      <CustomerReviews/>
     </section>
     <section className="padding-x sm:py-32 py-16 w-full">
      <Subscribe/>
     </section>
    </main>
      <Footer/>
    </>
  )
}

export default App