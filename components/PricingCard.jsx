function PricingCard({title, price, isPopular, features}) {
    return (
        <div className={`bg-primary-light group hover:shadow-xl hover:-translate-y-1 transition-all relative p-6 rounded-lg border-2 ${isPopular ? 'border-accent-light' : 'border-accent'}`}>
            {isPopular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent-light text-dark text-sm font-medium px-3 py-1 rounded-full">Популярний</span>
            )}
            <h3 className="font-display transition-all group-hover:text-accent-light text-xl font-bold text-dark mb-2">{title}</h3>
            <p className="text-4xl font-bold text-accent mb-1">{price}</p>
            <p className="text-dark text-sm mb-6">на місяць</p>

            <ul className="space-y-2 mb-6">
                {features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                        <span className="text-accent font-bold">✓</span>
                        <span>{feature}</span>
                    </li>
                ))}
            </ul>
            <button className={`w-full py-3 rounded-xl font-medium transition-all hover:scale-105 ${isPopular ? 'bg-accent-light text-dark' : 'bg-accent text-primary-light'}`}>Обрати</button>
        </div>
    )
}

export default PricingCard