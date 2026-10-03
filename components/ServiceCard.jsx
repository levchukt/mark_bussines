function ServiceCard({ title, desc }) {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all ">
            <h3 className="font-display text-xl font-bold text-dark mb-2">{title}</h3>
            <p className="text-dark">{desc}</p>
        </div>
    )
}

export default ServiceCard