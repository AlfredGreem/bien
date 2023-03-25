import Image from "next/image"

function Hero() {
    return (
        <section className="relative h-[300px] sm:h-[400px]
        lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
            <Image
                src="https://links.papareact.com/0fm"
                layout="fill" objectFit="cover"
            />
            <div className="absolute top-1/2 w-full text-center">
                <p className="text-sm md:text-lg">Not sure where to go? Perfect.</p>
                
                <button className="bg-white px-10 py-4
                rounded-full shadow-sm font-bold my-3
                text-purple-500 hover:shadow-md active:scale-90 transition
                duration-150"
                >It's flexible</button>
            </div>
        </section>
    )
}

export default Hero