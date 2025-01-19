interface SpecialFeatureCardProps {
  title: string;
  description: string;
  image: string;
}

export const SpecialFeatureCard: React.FC<SpecialFeatureCardProps> = ({ 
  title, 
  description, 
  image 
}) => {
  return (
    // TODO: Add 3 Images instead of 1
    <div className="bg-white p-6 h-full flex flex-col">
      <h3 className="text-2xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <img 
        src={image} 
        alt={title}
        className="w-full object-cover mt-auto" 
      />
    </div>
  )
} 