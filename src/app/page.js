import LenguajeSelector from "@/components/LenguajeSelector";



export default function Home() {
  const {t} = useTransition('common');
  return (
    <main>
      <h1>{t(appTitle)}</h1>
      <LenguajeSelector/>
    </main>
  )
}
