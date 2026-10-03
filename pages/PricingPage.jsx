import PricingCard from "../components/PricingCard"

function PricingPage() {

  const plans = [
    {
      id: 1,
      title: 'Старт',
      price: '490',
      isPopular: false,
      features: ['Аудит одного напряму', 'Звіт із рекомендаціями', 'Одна консультація'],
    },
    {
      id: 2,
      title: 'Бізнес',
      price: '990',
      isPopular: true,
      features: ['Повний аудит компанії', 'Стратегія на 6 місяців', 'Щотижневі зустрічі', 'Підтримка в чаті'],
    },
    {
      id: 3,
      title: 'Корпоративний',
      price: '1900',
      isPopular: false,
      features: ['Усе з тарифу Бізнес', 'Виділений менеджер', 'Навчання команди'],
    },
  ]


  return (
    <section className=" px-8 py-16">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-3xl font-display md:text-4xl text-accent mb-10 font-bold">Ціни</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {plans.map((plan) => (
            <PricingCard
              key={plan.id}
              title={plan.title}
              price={plan.price}
              isPopular={plan.isPopular}
              features={plan.features}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
 
export default PricingPage