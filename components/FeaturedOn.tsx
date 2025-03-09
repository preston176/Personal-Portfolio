const FeaturedOn = () => {
    return (
        <div className='py-5 px-5 sm:mt-24 md:px-10 lg:px-20'>
            <h3 className='text-3xl text-primary font-semibold text-center my-6 mt-5'>As Featured on</h3>
            <div className="flex justify-center items-center space-x-5 sm:space-x-10 md:space-x-8 lg:space-x-12">
                <img src="/assets/featured/github.png" alt="GitHub" className="h-6 sm:h-12 opacity-50" />
                <img src="/assets/featured/hashnode.svg" alt="Hashnode" className="h-6 sm:h-12 opacity-50" />
                <img src="/assets/featured/linkedin.png" alt="LinkedIn" className="h-6 sm:h-12 opacity-50" />
            </div>
        </div>
    );
};

export default FeaturedOn;
