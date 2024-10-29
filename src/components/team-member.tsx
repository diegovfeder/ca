import Image from "next/image";

interface TeamMemberProps {
  name: string;
  title: string;
  description: string;
  imageUrl?: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({
  name,
  title,
  description,
  imageUrl,
}) => {
  return (
    <div className="flex flex-col items-start bg-gray-200 p-4 shadow-md">
      {imageUrl && (
        <div className="flex w-full justify-center items-center">
          <div className="relative w-64 h-96 mb-4">
            <Image
              src={imageUrl}
              alt={name}
              fill
              className="object-cover border-4 border-white"
            />
          </div>
        </div>
      )}
      <h4 className="text-md text-stone-600 uppercase">{title}</h4>
      <h5 className="text-xl font-semibold text-stone-800">{name}</h5>
      <p className="text-sm text-stone-700 text-pretty">{description}</p>
    </div>
  );
};

export default TeamMember;
