export default function Home({ params }: { params: { locale: string } }) {
  return <h1>Welcome! Current locale: {params.locale}</h1>;
}
