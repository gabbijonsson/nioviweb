import { useTextResources } from "@/useTextResources";

export default function Footer() {
  const { copy } = useTextResources();

  return (
    <footer className="bg-black py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center text-gray-200">
        <p>&copy; {copy.sectionFooterCopyright}</p>
      </div>
    </footer>
  );
}
