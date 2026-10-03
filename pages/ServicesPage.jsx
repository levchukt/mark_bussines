import ServiceCard from "../components/ServiceCard"
function ServicesPage() {

  const services = [
    {
      id: 1,
      title: 'Аудит бізнесу',
      description: 'Аналізуємо поточні процеси і знаходимо слабкі місця.',
    },
    {
      id: 2,
      title: 'Стратегія росту',
      description: 'Будуємо план розвитку на 6-12 місяців уперед.',
    },
    {
      id: 3,
      title: 'Оптимізація процесів',
      description: 'Прибираємо зайві кроки і скорочуємо витрати часу.',
    },
  ]

 
  return (
    <section className=" px-8 py-16">
    <div className="max-w-5xl mx-auto px-4">
      <h1 className="text-3xl font-display md:text-4xl font-bold text-accent mb-10 font-bold">Послуги</h1>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">  
          {services.map((s) => {
            return <ServiceCard key={s.id} title={s.title} desc={s.description} />
          })}
          
        </div>
        <div className="mt-10 text-center">
          <button className="btn-primary">Обговорити проєкт</button>
        </div>
    </div>
    </section>
  )
}
 
export default ServicesPage