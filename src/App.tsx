import { useFeature } from "./useFeature";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
  const { features } = useFeature();

  return (
    <div id="home" className="min-h-screen bg-black text-white font-sans">
      <Header />

      <main>
        {features.map((feature) =>
          feature.enabled ? (
            <div key={feature.name}>{feature.section}</div>
          ) : null
        )}
      </main>

      <Footer />
    </div>
  );
}
