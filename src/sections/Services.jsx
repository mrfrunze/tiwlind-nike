import { ServiceCard } from "../components"
import { services } from "../constants"

const Services = () => {
  return (
    <section className="services max-container flex justify-center flex-wrap gap-9">
      {
        services.map(service => {
          return <ServiceCard key={service.id}  {...service} />
        })
      }
    </section>
  )
}

export default Services