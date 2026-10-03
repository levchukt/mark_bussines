function HomePage() {
  return (
    // <div className="p-8">
    //   <h1 className="text-3xl font-bold">Головна сторінка</h1>

    //   <div className="grid grid-cols-2 justify-items-center">
    //     <div className="bg-white p-4 shadow-sm">sm</div>
    //     <div className="bg-white p-4 shadow-md">md</div>
    //     {/* <div className="bg-white p-4 shadow-lg">lg</div>
    //     <div className="bg-white p-4 shadow-xl">xl</div>
    //     <div className="bg-white p-4 shadow-2xl">2xl</div>
    //     <button type="submit" className="rounded-md text-black bg-accent py-2 px-4 hover:scale-110 hover:shadow-lg transition-all ">button</button> */}
    //   </div>

    // </div>

    <section className=" gap-5 grid md:grid-cols-2 grid-cols-1 p-14 md:p-24">
      <div className="max-w-5xl mx-auto px-4 grid text-center">
        <h2 className="text-dark font-bold " >Мармелад</h2>
        <h1 className="font-display font-bold text-3xl md:text-4xl text-accent mb-4">Рішення, які рухають ваш бізнес вперед</h1>
        <p className="text-dark  md:w-6/7 mx-auto mb-8">Ми допомагаємо компаніям знаходити точки росту і впроваджуємо зміни, які дійсно працюють</p>
        <button className="btn-primary">Отримати консультацію</button>
      </div>
      <div>
        <img src="https://placehold.co/600x400/176742/white?text=Marmelad" alt=""/>
      </div>
    </section>

  )
}
 
export default HomePage