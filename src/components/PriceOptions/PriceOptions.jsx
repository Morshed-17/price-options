import PriceOption from "./PriceOption";


const PriceOptions = () => {
    const priceOptions = [
        {
          "id": "basic",
          "name": "Basic Membership",
          "price": "$29",
          "features": [
            "Access to gym facilities",
            "Unlimited cardio equipment usage",
            "Locker room access",
            "Towel service"
          ]
        },
        {
          "id": "premium",
          "name": "Premium Membership",
          "price": "$49",
          "features": [
            "Access to gym facilities",
            "Unlimited cardio equipment usage",
            "Locker room access",
            "Towel service",
            "Group fitness classes",
            "Personal trainer consultation (1 session)"
          ]
        },
        {
          "id": "ultimate",
          "name": "Ultimate Membership",
          "price": "$79",
          "features": [
            "Access to gym facilities",
            "Unlimited cardio equipment usage",
            "Locker room access",
            "Towel service",
            "Group fitness classes",
            "Personal trainer consultation (2 sessions/month)",
            "Sauna and steam room access"
          ]
        }
      ]
      
    return (
        <div className="">
            <h2 className="text-4xl font-bold text-center">Best Price In The Town</h2>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
           {
                priceOptions.map(option => <PriceOption key={option.id} option={option}/>)
            }
           </div>
            
        </div>
    );
};

export default PriceOptions;