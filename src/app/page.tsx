import FacePhoto from "@/components/FacePhoto";

type ContactData = {
  id: number;
  subtitle: string;
  title: string;
  url: string;
};

const contactData: ContactData[] = [
  {
    id: 1,
    subtitle: "Phone",
    title: "+371 29509420",
    url: "tel:+37129509420",
  },
  {
    id: 2,
    subtitle: "WhatsApp",
    title: "+371 29509420",
    url: "https://wa.me/0037129509420",
  },
  {
    id: 3,
    subtitle: "LinkedIn",
    title: "Andrejs Rinkevičs",
    url: "https://www.linkedin.com/in/andrejsrinkevics/",
  }
];

const prepositionData = [
  // {
  //   id: 3,
  //   title: "Hire me or a team for Startup Growth",
  // },
  {
    id: 1,
    title: "Technical Advisor consultation",
  },
  {
    id: 2,
    title: "Solution development",
  },
  {
    id: 3,
    title: "Pitch an idea",
  }
];

const linkedInMessageURL = "https://www.linkedin.com/in/andrejsrinkevics/";

export default function Page() {
  return (
    <main className="relative isolate mx-6 my-10 max-w-3xl bg-primary lg:mx-auto">
      <div className="flex h-full w-full flex-col rounded-primary bg-primary px-8 py-10 shadow-primary">
        <div className="flex flex-col justify-between md:flex-row-reverse">
          <span className="mb-4 mt-4 text-sm font-light md:my-0">
            Digital Business Card
          </span>
          <FacePhoto className=""/>
        </div>
        <h1 className="mt-4  text-3xl font-bold text-black/70">
          Andrejs Rinkevičs
        </h1>
        <h2 className="mt-2  font-light text-black/60">
          VP of Software at Giraffe360 - Real Estate 3D and Photography
        </h2>
        <h2 className="mt-2  font-light text-black/60">
          CTO at Qrunch - Software for Hotels and Restaurants
        </h2>
        <h2 className="mt-2  font-light text-black/60">
          Founding Partner at Pace - Startup Incubator
        </h2>
        <p className=" mt-2  text-sm text-black/70">
          Startups, Solution Architecture, Consulting, Advisor
        </p>
        <nav className="mt-4 flex w-full flex-col justify-between  md:flex-row">
          <ul className="mt-4 flex flex-col gap-1 text-black/60">
            <h1 className="text-xl font-bold text-black/80 md:my-1">
              Contacts
            </h1>
            {contactData.map((item) => (
                <li className="" key={item.id}>
                  <h2 className="text-sm font-light text-black/40">
                    {item.subtitle}
                  </h2>
                  <a className="font-normal hover:underline" href={item.url}>
                    {item.title}
                  </a>
                </li>
            ))}
          </ul>
          <ul className="mt-4 flex flex-col gap-1">
            <h1 className="text-xl font-bold text-black/80 hover:underline">
              <a href={linkedInMessageURL}>Send me a message</a>
            </h1>
            {prepositionData.map((item) => (
                <li
                    className="flex flex-row font-normal text-black/60"
                    key={item.id}
                >
                  {item.title}
                </li>
            ))}
          </ul>
        </nav>
      </div>
    </main>
  );
}
